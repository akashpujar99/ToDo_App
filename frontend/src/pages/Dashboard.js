import TaskForm from "../components/Taskform.js";
import TaskList from "../components/TaskList.js";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center" , padding: "20px" }}> 
      <h1>Dashboard</h1>
      <TaskForm fetchTasks={TaskList.fetchTasks} /><TaskList /> 
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;