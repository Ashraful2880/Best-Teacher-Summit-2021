import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Teacher from '../Teacher/Teacher';
import teachers from './Teachers.css';

const Teachers = () => {
    const [teachers,setTeachers]=useState([]);
    useEffect(()=>{
        fetch('./teachers.json')
        .then(res=>res.json())
        .then(data=>setTeachers(data))
    },[])
    return (
        <div className="teachers-container">
            {
                teachers.map(teacher=><Teacher 
                    key={teacher.id}
                    teacher={teacher}
                    ></Teacher>)
            }
        </div>
    );
};

export default Teachers;