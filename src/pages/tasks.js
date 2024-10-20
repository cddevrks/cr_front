import React, { useState, useEffect } from "react";
import axios from "axios";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/api/tasks/');
        setTasks(response.data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  const handleSubmit = async (taskId, driveLink) => {
    try {
      const response = await axios.post(`/api/submit_task/${taskId}/`, { drive_link: driveLink });
      if (response.status === 200) {
        alert("Task submitted successfully. You earned 50 points!");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error submitting task:", error);
    }
  };

  return (
    <div>
      <h1>Tasks</h1>
      {error && <p>Error: {error}</p>}
      {tasks.map(task => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Submitted Date: {new Date(task.submitted_date).toLocaleDateString()}</p>
          <p>Status: {task.is_verified ? 'Verified' : 'Pending Verification'}</p>
          <p>Points Awarded: {task.points_awarded}</p>
          {!task.is_verified && (
            <>
              <input type="text" placeholder="Google Drive Link" id={`drive-link-${task.id}`} defaultValue={task.drive_link} />
              <button onClick={() => handleSubmit(task.id, document.getElementById(`drive-link-${task.id}`).value)}>
                Submit/Update Link
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Tasks;
