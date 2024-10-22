import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Simple Card component that we'll use across admin components
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="px-6 py-4 border-b border-gray-200">{children}</div>
);

const CardTitle = ({ children }) => (
  <h2 className="text-xl font-semibold text-gray-800">{children}</h2>
);

const CardContent = ({ children }) => <div className="p-6">{children}</div>;

// AdminDashboard.js
const AdminDashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/admin/upload-task" className="block">
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle>Upload Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Create and manage tasks for representatives
              </p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/admin/review-submissions" className="block">
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle>Review Submissions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Review task submissions and award points
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

// UploadTask.js
const UploadTask = () => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    deadline: "",
    points: "",
    submissionType: "individual",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:4040/api/admin/upload-task",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(taskData),
        }
      );
      const data = await response.json();
      if (data.status === "success") {
        alert("Task uploaded successfully!");
        setTaskData({
          title: "",
          description: "",
          deadline: "",
          points: "",
          submissionType: "individual",
        });
      }
    } catch (error) {
      console.error("Error uploading task:", error);
      alert("Failed to upload task");
    }
  };

  const inputClasses =
    "w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Upload New Task</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className={labelClasses}>Title</label>
              <input
                type="text"
                value={taskData.title}
                onChange={(e) =>
                  setTaskData({ ...taskData, title: e.target.value })
                }
                className={inputClasses}
                required
              />
            </div>
            <div>
              <label className={labelClasses}>Description</label>
              <textarea
                value={taskData.description}
                onChange={(e) =>
                  setTaskData({ ...taskData, description: e.target.value })
                }
                className={inputClasses}
                rows="4"
                required
              />
            </div>
            <div>
              <label className={labelClasses}>Deadline</label>
              <input
                type="datetime-local"
                value={taskData.deadline}
                onChange={(e) =>
                  setTaskData({ ...taskData, deadline: e.target.value })
                }
                className={inputClasses}
              />
            </div>
            <div>
              <label className={labelClasses}>Points</label>
              <input
                type="number"
                value={taskData.points}
                onChange={(e) =>
                  setTaskData({ ...taskData, points: e.target.value })
                }
                className={inputClasses}
                required
              />
            </div>
            <div>
              <label className={labelClasses}>Submission Type</label>
              <select
                value={taskData.submissionType}
                onChange={(e) =>
                  setTaskData({ ...taskData, submissionType: e.target.value })
                }
                className={inputClasses}
              >
                <option value="individual">Individual</option>
                <option value="team">Team</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200"
            >
              Upload Task
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

// Modal.js - Custom Modal Component
const Modal = ({ isOpen, onClose, onConfirm, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{message}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

// ReviewSubmissions.js
const ReviewSubmissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [points, setPoints] = useState({});
  const [updating, setUpdating] = useState(false);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:4040/api/admin/submissions"
      );
      if (response.data.status === "success") {
        setSubmissions(response.data.submissions);
      }
    } catch (error) {
      console.error("Error fetching submissions:", error);
      alert("Failed to fetch submissions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const handlePointsChange = (submissionId, value) => {
    setPoints((prev) => ({
      ...prev,
      [submissionId]: value,
    }));
  };

  const handleUpdateClick = (submission) => {
    if (!points[submission._id]) {
      alert("Please enter points first");
      return;
    }
    setSelectedSubmission(submission);
    setModalOpen(true);
  };

  const handleConfirmUpdate = async () => {
    if (!selectedSubmission || updating) return;

    try {
      setUpdating(true);
      const response = await axios.post(
        "http://localhost:4040/api/admin/update-points",
        {
          email: selectedSubmission.email,
          taskId: selectedSubmission.taskId._id,
          pointsAwarded: parseInt(points[selectedSubmission._id]),
        }
      );

      if (response.data.status === "success") {
        // Clear the points input for this submission
        setPoints((prev) => ({
          ...prev,
          [selectedSubmission._id]: "",
        }));
        // Refresh the submissions list
        fetchSubmissions();
        alert("Points updated successfully!");
      }
    } catch (error) {
      console.error("Error updating points:", error);
      alert("Failed to update points");
    } finally {
      setUpdating(false);
      setModalOpen(false);
      setSelectedSubmission(null);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">
            Review Submissions
          </h2>
        </div>

        <div className="p-6">
          {loading ? (
            <div className="text-center py-4">Loading submissions...</div>
          ) : submissions.length === 0 ? (
            <div className="text-center py-4 text-gray-500">
              No submissions found
            </div>
          ) : (
            <div className="space-y-4">
              {submissions.map((submission) => (
                <div
                  key={submission._id}
                  className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h3 className="font-medium text-gray-800">
                        {submission.email}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Task: {submission.taskId?.title || "Unknown Task"}
                      </p>
                      <p className="text-sm text-gray-600">
                        Submitted:{" "}
                        {new Date(submission.submittedAt).toLocaleDateString()}
                      </p>
                      <a
                        href={submission.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm inline-block mt-2"
                      >
                        View Submission
                      </a>
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-auto">
                      <input
                        type="number"
                        placeholder="Enter points"
                        value={points[submission._id] || ""}
                        onChange={(e) =>
                          handlePointsChange(submission._id, e.target.value)
                        }
                        className="border rounded px-3 py-2 w-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        onClick={() => handleUpdateClick(submission)}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                        disabled={!points[submission._id]}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirmUpdate}
        title="Confirm Points Update"
        message={`Are you sure you want to award ${
          selectedSubmission ? points[selectedSubmission._id] : ""
        } points to ${selectedSubmission?.email || ""}?`}
      />
    </div>
  );
};

export default {
  AdminDashboard,
  UploadTask,
  ReviewSubmissions,
};
