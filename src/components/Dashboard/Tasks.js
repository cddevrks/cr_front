import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";
import toast from "react-hot-toast";
import { marked } from "marked"; // Import marked for parsing markdown
import "github-markdown-css"; // Optional: for GitHub-style markdown rendering

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submissionLink, setSubmissionLink] = useState("");
  const [submittingTask, setSubmittingTask] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  // Fetch tasks
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("/api/tasks");
        const tasksData = response.data.tasks;

        if (tasksData && tasksData.length > 0) {
          setTasks(tasksData);
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

  // Function to validate URL
  const isValidURL = (string) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(string);
  };

  // Handle task submission
  const handleSubmitTask = async () => {
    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) {
      toast.error("User not logged in. Please log in to submit tasks.");
      return;
    }

    if (!submissionLink) {
      toast.error("Please provide a submission link.");
      return;
    }

    if (!isValidURL(submissionLink)) {
      toast.error("Please provide a valid submission link.");
      return;
    }

    setSubmittingTask(selectedTaskId);
    try {
      const response = await axios.post("/api/submit-task", {
        email: userEmail,
        taskId: selectedTaskId,
        link: submissionLink,
      });

      if (response.data.status === "success") {
        toast.success("Task submitted successfully!");
      } else {
        toast.error("Task submission failed.");
      }
      setSubmissionLink("");
      setError(null);
      setShowModal(false);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.message;
        if (errorMessage === "You have already submitted this task") {
          toast.error("You have already submitted this task.");
        } else {
          toast.error(errorMessage || "Task submission failed.");
        }
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
      console.error(error);
    } finally {
      setSubmittingTask(null);
    }
  };

  const openModal = (taskId) => {
    setSelectedTaskId(taskId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSubmissionLink("");
  };

  // Configure marked options
  marked.setOptions({
    breaks: true, // Enable line breaks
    gfm: true, // Enable GitHub Flavored Markdown
  });

  // Function to render markdown content
  const renderMarkdown = (content) => {
    try {
      return { __html: marked(content) };
    } catch (error) {
      console.error("Error parsing markdown:", error);
      return { __html: content }; // Fallback to raw content
    }
  };

  if (loading) {
    return (
      <div className="md:min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#4a332e] to-[#2d2438] overflow-hidden rounded-xl space-y-6 p-4">
        <h2 className="text-2xl font-bold text-[#ff7934]">Loading Tasks...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="md:min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#4a332e] to-[#2d2438] overflow-hidden rounded-xl space-y-6 p-4">
        <h2 className="text-2xl font-bold text-[#ff7934]">{error}</h2>
      </div>
    );
  }

  return (
    <>
      <div className="md:min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#4a332e] to-[#2d2438] overflow-hidden rounded-xl space-y-6 p-4">
        {tasks.map((task, index) => (
          <motion.div
            key={task._id || index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-[70%] md:w-[80%] p-6 bg-gradient-to-br from-[#ff7934]/20 to-transparent rounded-lg shadow-lg overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
              className="relative z-10 space-y-4 text-white"
            >
              <h2 className="text-2xl font-bold text-[#ff7934]">
                {task.title}
              </h2>

              {/* Updated Markdown rendering with proper styling */}
              <div
                className="markdown-body prose prose-invert prose-headings:text-[#ff7934] max-w-none"
                dangerouslySetInnerHTML={renderMarkdown(task.description)}
              />

              <p className="text-sm opacity-80">{`Points: ${task.points}`}</p>
              <p className="text-sm">
                Expires on:{" "}
                <span className="font-medium">
                  {new Date(task.deadline).toLocaleDateString()}
                </span>
              </p>

              <button
                onClick={() => openModal(task._id)}
                className="inline-flex items-center px-4 py-2 bg-[#ff7934] text-white rounded-md hover:bg-[#ff7934]/80 transition-colors"
              >
                <Upload className="w-4 h-4 mr-2" />
                Submit Task
              </button>
            </motion.div>
          </motion.div>
        ))}

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full space-y-4">
              <h3 className="text-xl font-semibold">Submit Task</h3>
              <input
                type="text"
                value={submissionLink}
                onChange={(e) => setSubmissionLink(e.target.value)}
                placeholder="Enter submission link"
                className="w-full px-3 py-2 text-black rounded-md border-2 border-gray-700"
              />
              <div className="flex justify-end space-x-4">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-300 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmitTask}
                  disabled={submittingTask === selectedTaskId}
                  className="px-4 py-2 bg-[#ff7934] text-white rounded-md hover:bg-[#ff7934]/80 transition-colors disabled:opacity-50"
                >
                  {submittingTask === selectedTaskId
                    ? "Submitting..."
                    : "Submit"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <style jsx="true">{`
        /* Override GitHub markdown theme for dark mode */
        .markdown-body {
          color: white !important;
          background-color: transparent !important;
        }

        .markdown-body pre {
          background-color: rgba(255, 255, 255, 0.1) !important;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .markdown-body code {
          background-color: rgba(255, 255, 255, 0.1) !important;
          color: #ff7934 !important;
        }
      `}</style>
    </>
  );
}
