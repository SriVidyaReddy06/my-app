import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import { FaLinkedin, FaUserCircle } from "react-icons/fa";

const Dashboard = () => {
    const data = ["I'm a Graduate Teaching Assistant", "I'm a Student Research Assistant"]
    const [newData, setNewData] = useState("");

    function setRandomName() {
        const index = Math.floor(Math.random() * data.length);
        let x = data[index]
        if (x == newData) {
            setRandomName()
        }
        else {
            setNewData(x)
        }
        return
    }
    useEffect(() => {
        setTimeout(() => {
            setRandomName()
        }, 5000);
    }, [newData])

    return (
        <>           
            <div className='card card-center'>
                <div className='row'>
                    <FaUserCircle style={{ fontSize: '100px' }}></FaUserCircle>
                    <h1 className='item'>Sri Vidya Puttareddygari</h1>
                </div>
                <p className='title'>{newData}</p>
                <p>Masters in Software Engineering @ Gannon University</p>
                <div><FaLinkedin style={{ color: "#0A66C2", margin: '10px', fontSize: '30px' }}></FaLinkedin>
                </div><p><button>Resume</button></p>
            </div>
        </>
    );
};
export default Dashboard;