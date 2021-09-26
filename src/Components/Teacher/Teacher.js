import React from 'react';
import teacherStyle from './Teacher.css';
import {FiArrowRightCircle} from "react-icons/fi";

const Teacher = (props) => {
    
    const {picture,name,age,gender,company,email,Cost}=props.teacher;
    return (
        <div style={teacherStyle}>
            <div className="teacher-container">
                <img src={picture} alt="programmerPhoto" />
                <h2>Name: {name}</h2>
                <h3>Age: {age}</h3>
                <h3>Cost: {Cost}$</h3>
                <h4>Gender: {gender}</h4>
                <h4>Company: {company}</h4>
                <h4>Contact: {email}</h4>
                <span style={{position:'absolute',padding:'4px',marginLeft:'10px'}}><FiArrowRightCircle className='go-icon'> </FiArrowRightCircle></span>
                 <button onClick={()=>props.handleAddToCart(props.teacher)}>Request Meeting</button>                 
            </div>
        </div>
    );
};

export default Teacher;