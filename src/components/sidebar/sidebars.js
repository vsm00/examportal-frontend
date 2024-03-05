import DashboardIcon from '@mui/icons-material/Dashboard'
import LogoutIcon from '@mui/icons-material/Logout'
import "./Sidebar.css"
import { Link } from "react-router-dom"

const Sidebars =()=>{
    return(
    <div className="sidebar">
      <div className="top">
          <span className="logo">STUDENT</span>
    </div>
    <hr />
    <div className="center">

        <ul>
            <li>
            <DashboardIcon className="icon"/>
                <span>Dashboard</span>
            </li>
            <li>
            <LogoutIcon className="icon"/>
            <Link to="/">Logout</Link>
            </li>
        </ul>
    </div>
        </div>
    )
}

export default Sidebars
