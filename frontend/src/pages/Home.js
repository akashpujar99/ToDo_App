import { Link} from "react-router-dom";
import "./Home.css";

function Home(){
    return(
    <div style={{textAlign: "center", padding: " 250px",backgroundColor:"palevioletred"}}>
        <h1> Welcome to Todo App</h1><Link to="/register"> Register</Link>{" "}
        <Link to="/login"> login</Link>{" "}
    </div>
    );
}
 
export default Home;