import Sidebar from "../../components/sidebar/sidebars";
import Navbar from "../../components/navbar/Navbar";
import "./StudentDashboard.css";
import React from 'react'

const Student=()=>{
    return(
        <div className="dashboard">
            <Sidebar />
            <div className="homecontainer">
                <Navbar />
                <div className="top">
                    <h2>EXIT TEST CONFIRMATION</h2>
                </div>
                <div className="left">
                    <form>
                    <div className="formInput">
                        <label>Name</label>
                        <input type="text"/>
                    </div>
                    <div className="formInput">
                        <label>Phone Number</label>
                        <input type="tel"/>
                    </div>
                    <div className="formInput">
                        <label>Email</label>
                        <input type="email"/>
                    </div>
                    <div className="formInput">
                        <label>DOB</label>
                        <input type="date"/>
                    </div>
                    <div className="formInput">
                        <label for="batch">Batch Name</label>
                        <select name="batch" id="batch">
                        <option value="kkem"> </option>
                            <option value="kkem">KKEM March CSA</option>
                            <option value="kkem">KKEM March DSA</option>
                            <option value="kkem">KKEM March MLAI</option>
                            <option value="kkem">KKEM March FSD</option>
                            <option value="kkem">KKEM March ST</option>
                        </select>
                    </div>
                    <div className="formInput">
                        <label>Gender</label>
                        <input type="gender"/>
                    </div>
                    <button>Submit</button>
                    
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Student