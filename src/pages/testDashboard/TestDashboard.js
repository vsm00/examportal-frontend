import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Batches from "../Batches/Batches";
import "./TestDashboard.css";
import React from 'react'

const Test=()=>{
    return(
        <div className="dashboard">
            <Sidebar />
            <div className="homecontainer">
                <Navbar />
            </div>
            <div className="listcontainer">
                <div className="listTitle">BATCHES FOR EXIT EXAM</div>
                <hr/>
                <Batches/>
            </div>
        </div>

    );
};

export default Test