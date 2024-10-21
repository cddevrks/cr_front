"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export default function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch leaderboard data using Axios when the component mounts
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5001/api/leaderboard"); // Replace with your endpoint
        const leaderboard = response.data.leaderboard;

        // Update leaderboard data
        setLeaderboardData(leaderboard);
      } catch (error) {
        setError("Error fetching leaderboard. Please try again later.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }; 

    fetchLeaderboard();
  }, []);

  // Display a loading message while fetching data
  if (loading) {
    return <div className="text-white">Loading leaderboard...</div>;
  }

  // Display an error message if there is an error
  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="md:min-h-screen flex items-center justify-center bg-gradient-to-b from-[#4a332e] to-[#2d2438] overflow-hidden p-4 rounded-xl font-oswald">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-6 rounded-lg overflow-hidden"
      >
        <div className="relative z-10 space-y-4">
          <motion.h2
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            className="text-2xl font-bold text-center text-[#ff7934] flex items-center justify-center"
          >
            <Trophy className="w-6 h-6 mr-2" />
            Leaderboard
          </motion.h2>
          <ul className="space-y-3">
            {leaderboardData.map((item, index) => (
              <motion.li
                key={item} // Assuming the user ID is nested within the leaderboard data
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 120 }}
                  className="w-8 h-8 flex-shrink-0 rounded-full bg-[#ff7934] flex items-center justify-center font-bold text-white"
                >
                  {index + 1}
                </motion.div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                  <p className="text-sm text-white/70">{item.college}</p> {/* Replace with other details if necessary */}
                </div>
                <div className="text-[#ff7934] font-bold">{item.points}</div>
              </motion.li>
            ))}
          </ul>
        </div>
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
      </motion.div>
    </div>
  );
}
