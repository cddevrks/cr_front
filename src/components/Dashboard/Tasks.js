import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";
import toast from "react-hot-toast";

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
        const response = await axios.get("http://localhost:5001/api/tasks");
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
    const regex = /^(ftp|http|https):\/\/[^ "]+$/; // Basic URL pattern
    return regex.test(string);
  };

  // Handle task submission
  const handleSubmitTask = async () => {
    const userEmail = localStorage.getItem("userEmail"); // Assuming you store user email in localStorage
    if (!userEmail) {
      toast.error("User not logged in. Please log in to submit tasks.");
      return;
    }

    if (!submissionLink) {
      toast.error("Please provide a submission link.");
      return;
    }

    // Check if submissionLink is a valid URL
    if (!isValidURL(submissionLink)) {
      toast.error("Please provide a valid submission link.");
      return;
    }

    setSubmittingTask(selectedTaskId);
    try {
      const response = await axios.post(
        "http://localhost:5001/api/submit-task",
        {
          email: userEmail,
          taskId: selectedTaskId,
          link: submissionLink,
        }
      );
      console.log(response);
      // Check if the response status is 'success'
      if (response.data.status === "success") {
        toast.success("Task submitted successfully!"); // Show success toast
      } else {
        toast.error("Task submission failed."); // Handle other statuses if necessary
      }
      setSubmissionLink("");
      setError(null);
      setShowModal(false); // Close the modal after successful submission
    } catch (error) {
      // If the error has a response and it's a 400 status
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.message;

        // Check for the specific "already submitted" message
        if (errorMessage === "You have already submitted this task") {
          toast.error("You have already submitted this task.");
        } else {
          toast.error(errorMessage || "Task submission failed.");
        }
      } else {
        // Generic error handling for other types of errors
        toast.error("An unexpected error occurred. Please try again.");
      }
      console.error(error);
    } finally {
      setSubmittingTask(null);
    }
  };

  // Open modal for the selected task
  const openModal = (taskId) => {
    setSelectedTaskId(taskId);
    setShowModal(true);
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
    setSubmissionLink("");
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
    <div className="md:min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#4a332e] to-[#2d2438] overflow-hidden rounded-xl space-y-6 p-4">
      {tasks.map((task, index) => (
        <motion.div
          key={task._id || index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-md p-6 bg-gradient-to-br from-[#ff7934]/20 to-transparent rounded-lg shadow-lg overflow-hidden"
        >
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

      {/* Submission Modal */}
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
                {submittingTask === selectedTaskId ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
