import { useState } from "react";
import axios from "axios";

function TaskForm({ fetchTasks }) {
  const [title, setTitle] = useState("");

  const addTask = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/tasks",
        { title },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      setTitle("");
      fetchTasks();
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <form onSubmit={addTask}>
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Task</button>{" "}
    </form> 
  );
}

export default TaskForm;