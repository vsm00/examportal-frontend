import DashboardIcon from '@mui/icons-material/Dashboard'
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined'
import MarkEmailReadRoundedIcon from '@mui/icons-material/MarkEmailReadRounded'
import LogoutIcon from '@mui/icons-material/Logout'
import "./Sidebar.css"
import { Link } from "react-router-dom"

const Sidebar =()=>{
    return(
    <div className="sidebar">
      <div className="top">
          <span className="logo">TEST ADMIN</span>
    </div>
    <hr />
    <div className="center">

        <ul>
            <p className="title">MAIN</p>

            <li>
            <DashboardIcon className="icon"/>
                <span>Dashboard</span>
            </li>
            <li>
            <UploadFileOutlinedIcon className="icon"/>
                <span>Upload Results</span>
            </li>
            <li>
            <MarkEmailReadRoundedIcon className="icon"/>
                <span>Send Email</span>
            </li>
            <p className="title">USER</p>
            <li className>
            <LogoutIcon className="icon"/>
            <Link to="/" >Logout</Link>
            </li>
        </ul>
    </div>
        </div>
    )
}

export default Sidebar