import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Details.css";
import ParticlesComponent from "../components/Particles";
import toast from "react-hot-toast";

const Details = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    state: "",
    district: "",
    representative_type: "college",
    college: "",
    school: "",
    year_of_study: "",
    email: "",
    password: "",
  });

  const [isRegistered, setIsRegistered] = useState(false); // Track registration state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save form data to MongoDB during registration
    axios
      .post("/api/submit-form", formData)
      .then((response) => {
        if (response.data.status === "success") {
          // Navigate to Dashboard on successful registration
          toast.success("Account created successfully");
          // Set authentication in localStorage
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("userEmail", formData.email);
          // Update the authentication state to true
          setIsAuthenticated(true);
          navigate("/dashboard");
        } else {
          toast.error("Error! Please try again later");
          console.error("Registration failed");
        }
      })
      .catch((error) => {
        toast.error("Error! Please try again later");
        console.error("Error submitting the registration form", error);
      });
  };

  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      setIsLoading(true);
      // Sign-in logic
      const response = await axios.post("/api/sign-in", {
        email: formData.email,
        password: formData.password,
      });

      // Check the response status
      if (response.data.status === "success") {
        // Show toast notification for success
        toast.success(<b>Sign-in successful!</b>, {
          style: {
            background: "#333", // dark background
            color: "#fff", // white text
          },
        });
        // Set authentication in localStorage
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("userEmail", formData.email);
        // Update the authentication state to true
        setIsAuthenticated(true);

        // Navigate to Dashboard on successful sign-in
        navigate("/dashboard");
      } else {
        // Show toast notification for error
        toast.error(
          <b>
            Error signing in.
            <br /> {response.data.message}
          </b>,
          {
            style: {
              background: "#333", // dark background
              color: "#fff", // white text
            },
          }
        );

        console.error("Sign-in failed:", response.data.message); // Log the failure message
      }
    } catch (error) {
      // Show toast notification for a generic error
      toast.error(<b>Error during sign-in. Please try again.</b>, {
        style: {
          background: "#333", // dark background
          color: "#fff", // white text
        },
      });

      console.error("Error during sign-in:", error); // Log any errors that occur during the request
    } finally {
      setIsLoading(false); // Ensure loading state is reset
    }
  };

  const toggleRegistration = () => {
    setIsRegistered((prev) => !prev); // Toggle between registration and sign-in
  };

  return (
    <section className="bg-[#230c3c] min-h-screen flex justify-center items-center">
      <div id="intro" className="popup1 py-16">
        <div className="map max-w-[75%] lg:max-w-[50%]">
          <div className="map-body">
            <h1>Ahoy, me Hearties!</h1>
            <p>
              Welcome back, brave sailors! Chart your course and log in to
              continue your grand adventure on the high seas!
            </p>

            {isRegistered ? (
              // Sign In Form
              <form onSubmit={handleSignIn}>
                <div className="row12">
                  <div className="label">
                    <label htmlFor="email">Email:</label>
                  </div>
                  <div className="rightinput">
                    <input
                      className="input-field"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="row12">
                  <div className="label">
                    <label htmlFor="password">Password:</label>
                  </div>
                  <div className="rightinput">
                    <input
                      className="input-field"
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Enter Your Password"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="flex justify-center items-center bg-black text-white rounded-xl py-2">
                  <div className="container13 hoverable">
                    <button
                      className="submit12 hoverable"
                      id="signIn"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing In..." : "Sign In"}
                    </button>
                  </div>
                </div>
                <div
                  className="toggle-option text-lg justify-center items-center pt-4 flex gap-1"
                  onClick={toggleRegistration}
                >
                  Not registered ?{" "}
                  <div className="underline hoverable">Sign up here!</div>
                </div>
              </form>
            ) : (
              // Registration Form
              <form onSubmit={handleSubmit}>
                <div className="row12">
                  <div className="label">
                    <label htmlFor="name">*Yer Name:</label>
                  </div>
                  <div className="rightinput">
                    <input
                      className="input-field"
                      id="name"
                      autoFocus
                      type="text"
                      name="name"
                      placeholder="Scribe Yer Name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="row12">
                  <div className="label">
                    <label htmlFor="email">*Email:</label>
                  </div>
                  <div className="rightinput">
                    <input
                      className="input-field"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="row12">
                  <div className="label">
                    <label htmlFor="password">*Password:</label>
                  </div>
                  <div className="rightinput">
                    <input
                      className="input-field"
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Create Your Password"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="row12">
                  <div className="label">
                    <label htmlFor="phone">*Phone Number:</label>
                  </div>
                  <div className="rightinput">
                    <input
                      className="input-field"
                      id="phone"
                      type="text"
                      name="phone"
                      placeholder="Enter Phone Number"
                      required
                      maxLength={10}
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="row12">
                  <div className="label">
                    <label htmlFor="representative_type" className="text-wrap">
                      *Representative Type:
                    </label>
                  </div>
                  <div className="rightinput">
                    <select
                      className="input-field"
                      id="representative_type"
                      name="representative_type"
                      onChange={handleInputChange}
                      value={formData.representative_type}
                      required
                    >
                      <option value="college">College</option>
                      <option value="school">School</option>
                    </select>
                  </div>
                </div>

                <div className="row12">
                  <div className="label">
                    <label htmlFor="state">*State:</label>
                  </div>
                  <div className="rightinput">
                    <input
                      className="input-field"
                      id="state"
                      type="text"
                      name="state"
                      placeholder="Type Your State"
                      required
                      value={formData.state}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="row12">
                  <div className="label">
                    <label htmlFor="district">*District:</label>
                  </div>
                  <div className="rightinput">
                    <input
                      className="input-field"
                      id="district"
                      type="text"
                      name="district"
                      placeholder="Type Your District"
                      required
                      value={formData.district}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {formData.representative_type === "college" ? (
                  <div className="row12">
                    <div className="label">
                      <label htmlFor="college">College:</label>
                    </div>
                    <div className="rightinput">
                      <input
                        className="input-field"
                        id="college"
                        type="text"
                        name="college"
                        placeholder="Enter Your College Name"
                        value={formData.college}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="row12">
                    <div className="label">
                      <label htmlFor="school">School:</label>
                    </div>
                    <div className="rightinput">
                      <input
                        className="input-field"
                        id="school"
                        type="text"
                        name="school"
                        placeholder="Enter Your School Name"
                        value={formData.school}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                )}

                <div className="row12">
                  <div className="label">
                    <label htmlFor="year_of_study">Year of Study:</label>
                  </div>
                  <div className="rightinput">
                    <input
                      className="input-field"
                      id="year_of_study"
                      type="text"
                      name="year_of_study"
                      placeholder="Enter Year of Study"
                      value={formData.year_of_study}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="flex justify-center items-center bg-black text-white rounded-xl py-2">
                  <div className="container13 hoverable">
                    <button
                      className="submit12 hoverable"
                      id="submitform"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing Up..." : "Sign Up"}
                    </button>
                  </div>
                </div>
                <div
                  className="toggle-option text-lg justify-center items-center pt-4 flex gap-1"
                  onClick={toggleRegistration}
                >
                  Already registered ?{" "}
                  <div className="underline hoverable">Sign in here!</div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <ParticlesComponent />
    </section>
  );
};

export default Details;
