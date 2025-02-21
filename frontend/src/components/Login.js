import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";


const Login = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post("http://localhost:5000/api/login", { 
        email,
        password,
      });
      if(response.data){
      console.log("Login successful:", response.data);
       alert("Login successfully!");
    
      localStorage.setItem("user", JSON.stringify(response.data.user)); 
      navigate("/tasks"); 
       }else{
        console.error(" Unexcepted Response Format",response);
        alert("Unexcepted error. please try again");
    }} catch (error) {
     console.error("Login failed:", error.response.data || error.message);
     alert(error.response.data.message || "Login failed. please try again "); 
    }
  };

  return (
    <div style={{ textAlign: "center", padding:"200px",backgroundColor:"lightblue"}}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
         <button type="submit">Login</button>{" "}
      </form>{" "}
    </div>
  );
};

export default Login;