import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../pages/Details.css";
import ParticlesComponent from "../../components/Particles.js";
import toast from "react-hot-toast";

const AdminSignIn = ({ setIsAdmin }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      setIsLoading(true);

      const response = await axios.post("/api/admin-sign-in", {
        email: formData.email,
        password: formData.password,
      });

      if (response.data.status === "success") {
        toast.success(<b>Sign-in successful!</b>, {
          style: {
            background: "#333",
            color: "#fff",
          },
        });

        localStorage.setItem("isAdmin", "true");
        setIsAdmin("true");

        navigate("/admin-dashboard");
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
      toast.error(<b>Error during sign-in. Please try again.</b>, {
        style: {
          background: "#333", // dark background
          color: "#fff", // white text
        },
      });

      console.error("Error during sign-in:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-[#230c3c] min-h-screen flex justify-center items-center">
      <div id="intro" className="popup1 py-16">
        <div className="map max-w-[75%] lg:max-w-[50%]">
          <div className="map-body">
            <h1>Admin Login Only</h1>
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
            </form>
          </div>
        </div>
      </div>
      <ParticlesComponent />
    </section>
  );
};

export default AdminSignIn;
