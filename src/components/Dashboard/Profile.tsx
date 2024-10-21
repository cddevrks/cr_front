"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  School,
  MapPin,
  House,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// Define the type for profile data
interface Profile {
  name: string;
  email: string;
  phone: string;
  representativeType: string;
  college: string;
  district: string;
  state: string;
}

export default function Component() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null); // State is typed as Profile or null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Error is now typed as a string or null

  // Fetch the profile using Axios when the component mounts
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const email = localStorage.getItem("userEmail"); // Get email from localStorage

        if (!email) {
          throw new Error("No email found in local storage.");
        }

        const response = await axios.get(
          `https://cr.abhyudayiitb.org/api/profile?email=${email}`
        ); // Pass the email as a query parameter

        setProfile(response.data.profile); // Assuming the API returns the user profile directly

        if (response.data.profile.representative_type === "college") {
          let typeStu = "College Representative";
        } else if (response.data.profile.representative_type === "school") {
          let typeStu = "School Representative";
        }
      } catch (error) {
        setError("Error fetching profile. Please try again later.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // If loading, display a loading message
  if (loading) {
    return (
      <div className="md:min-h-screen flex items-center justify-center bg-gradient-to-b from-[#4a332e] to-[#2d2438] overflow-hidden p-4 rounded-xl font-oswald">
        <h2 className="text-2xl font-bold text-[#ff7934]">
          Loading Profile...
        </h2>
      </div>
    );
  }

  // If error, display an error message
  if (error) {
    return (
      <div className="md:min-h-screen flex items-center justify-center bg-gradient-to-b from-[#4a332e] to-[#2d2438] overflow-hidden p-4 rounded-xl font-oswald">
        <h2 className="text-2xl font-bold text-[#ff7934]">{error}</h2>
      </div>
    );
  }

  // If no profile data, handle that case
  if (!profile) {
    return (
      <div className="md:min-h-screen flex items-center justify-center bg-gradient-to-b from-[#4a332e] to-[#2d2438] overflow-hidden p-4 rounded-xl font-oswald">
        <h2 className="text-2xl font-bold text-[#ff7934]">
          No profile data available.
        </h2>
      </div>
    );
  }

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="md:min-h-screen flex items-center justify-center bg-gradient-to-b from-[#4a332e] to-[#2d2438] overflow-hidden p-4 rounded-xl font-oswald">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-6 rounded-lg shadow-lg overflow-hidden relative bg-white/10"
      >
        <div className="relative z-10 space-y-6">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            className="w-32 h-32 mx-auto bg-gradient-to-br from-[#ff7934] to-[#ff9f67] rounded-full flex items-center justify-center shadow-lg"
          >
            <span className="text-4xl font-bold text-white">
              {profile.name.charAt(0)}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-[#ff7934]">
              {profile.name}
            </h2>
            <p className="text-white/80">
              {(() => {
                if (profile.representativeType === "college") {
                  return "College Representative";
                } else if (profile.representativeType === "school") {
                  return "School Representative";
                } else {
                  return ""; // or some default value
                }
              })()}
            </p>
          </motion.div>

          <div className="space-y-4">
            <ProfileItem
              icon={<Mail className="w-5 h-5" />}
              label="Email"
              value={profile.email}
              isExpanded={expandedSection === "email"}
              onToggle={() => toggleSection("email")}
            />
            <ProfileItem
              icon={<Phone className="w-5 h-5" />}
              label="Phone"
              value={profile.phone}
              isExpanded={expandedSection === "phone"}
              onToggle={() => toggleSection("phone")}
            />
            <ProfileItem
              icon={<School className="w-5 h-5" />}
              label="College"
              value={profile.college}
              isExpanded={expandedSection === "college"}
              onToggle={() => toggleSection("college")}
            />
            <ProfileItem
              icon={<MapPin className="w-5 h-5" />}
              label="District"
              value={profile.district}
              isExpanded={expandedSection === "district"}
              onToggle={() => toggleSection("district")}
            />
            <ProfileItem
              icon={<House className="w-5 h-5" />}
              label="State"
              value={profile.state}
              isExpanded={expandedSection === "state"}
              onToggle={() => toggleSection("state")}
            />
          </div>
        </div>

        <AnimatedBackground />
      </motion.div>
    </div>
  );
}

function ProfileItem({
  icon,
  label,
  value,
  isExpanded,
  onToggle,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden"
    >
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onToggle}
        className="w-full flex items-center justify-between p-3 text-white"
      >
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-[#ff7934]/20 rounded-full flex items-center justify-center">
            {icon}
          </div>
          <p className="font-medium">{label}</p>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </motion.button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-3 pb-3"
          >
            <p className="text-white/80">{value}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          initial={{
            opacity: Math.random(),
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: ["-10%", "110%"],
            transition: {
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          style={{
            width: Math.random() * 2 + 1 + "px",
            height: Math.random() * 2 + 1 + "px",
          }}
        />
      ))}
    </div>
  );
}
