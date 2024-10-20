"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";

export default function Tasks() {
  const [task, setTask] = useState(null); // State to store the task data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tasks using Axios when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/tasks"); // Replace with your endpoint
        const tasks = response.data.tasks;

        // Assume you want to display the first task from the response
        if (tasks && tasks.length > 0) {
          setTask(tasks[0]); // Set the first task
        } else {
          setError("No tasks available.");
        }
      } catch (error) {
        setError("Error fetching tasks. Please try again later.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  // If loading, display a loading message
  if (loading) {
    return <div className="text-white">Loading tasks...</div>;
  }

  // If error, display an error message
  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  // If no task is available, handle that case
  if (!task) {
    return <div className="text-white">No task available at the moment.</div>;
  }

  return (
    <div className="md:min-h-screen flex items-center justify-center bg-gradient-to-b from-[#4a332e] to-[#2d2438] overflow-hidden rounded-xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md p-6 bg-gradient-to-br from-[#ff7934]/20 to-transparent rounded-lg shadow-lg overflow-hidden"
      >
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
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="relative z-10 space-y-4 text-white"
        >
          <h2 className="text-2xl font-bold text-[#ff7934]">{`# ${task.title}`}</h2>
          <h3 className="text-xl font-semibold">{task.description}</h3>
          <p className="text-sm opacity-80">{`Points: ${task.points}`}</p>
          <p className="text-sm">
            Expires on:{" "}
            <span className="font-medium">
              {new Date(task.deadline).toLocaleDateString()}
            </span>
          </p>
          <a
            href={task.driveLink || "#"} // Add drive link if available
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-[#ff7934] text-white rounded-md hover:bg-[#ff7934]/80 transition-colors"
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload to Drive
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
