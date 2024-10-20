import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; // Import cookies library for cookie management

axios.defaults.baseURL = "http://127.0.0.1:8000";

const clientId =
  "949228241511-mbfe9v2nh8u098587qflqstthjfo5oso.apps.googleusercontent.com";

function GoogleLoginComponent() {
  const navigate = useNavigate();

  const navigateMyUser = (newCreated, isAuthenticated) => {
    if (isAuthenticated) {
      newCreated ? navigate("/details") : navigate("/dashboard");
    }
  };

  const sendTokenToDjango = async (token) => {
    try {
      // Pass CSRF token with each request if necessary
      const csrfToken = Cookies.get("csrftoken"); // Django CSRF token
      const response = await axios.post(
        "/api/google-login/",
        { token },
        {
          headers: {
            "X-CSRFToken": csrfToken, // Include CSRF token in the request headers
          },
        }
      );
      if (response && response.data) {
        const { newCreated, isAuthenticated, accessToken, redirectUrl } =
          response.data;

        if (newCreated || isAuthenticated) {
          // Store the JWT or access token received from the backend in cookies
          Cookies.set("accessToken", accessToken, { expires: 1, secure: true });

          // Store token in cookies instead of localStorage for Django to access
          Cookies.set("isAuthenticated", "true", { expires: 1 }); // Set cookie with 1-day expiration

          navigateMyUser(newCreated, isAuthenticated);
          // navigate(redirectUrl); // Redirect to the appropriate page
        }
      }
    } catch (error) {
      console.error("Error logging in with Google:", error);
    }
  };

  const handleLoginSuccess = (credentialResponse) => {
    sendTokenToDjango(credentialResponse.credential);
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginError} />
    </GoogleOAuthProvider>
  );
}

export default GoogleLoginComponent;
