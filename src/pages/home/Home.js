import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import "./home.css"
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";


export default function Home() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {console.log("hi"+user._id)}
      <Topbar/>
      <div className="homeContainer">
      <Sidebar />
      <Feed />
      <Rightbar user={user}/>     
      </div>
      
    </div>
  )
}


