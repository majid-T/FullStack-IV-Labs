import React from "react";
import './Courses';
import Courses from "./Courses";


const Student = props =>{
    const CourseList = () => {
        if(props.enrolled){
            const coursesParam = props.enrolled;    
            const listItems = coursesParam.map((course) => <p><b>{course}</b></p>);
            return listItems;
        } 
    };

return (
    <>
        <p>Student <b>{props.name}</b> with student number <b>{props.number}</b></p>
        <Courses/>
        <CourseList/>
    </>
    )
};

export default Student;