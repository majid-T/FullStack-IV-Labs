import React from 'react';

const WithoutStNo = (props)=>{
    return (
      <div>
        <p>Student</p>
        <p>{`The student name is "${props.studentname}"`}</p>
      </div>
    );
};

const WithStNo = (props)=>{
    return (
        <div>
          <p>Student</p>
          <p>{`The student name is "${props.studentname}"`}</p>
          <p>{`The student No is "${ props.studentno}"`}</p>
        </div>
      );
};

const Student = ({match})=>{
    const {studentname, studentno} = match.params;

    if( studentno === undefined){
        return (
          <WithoutStNo studentname={studentname}/>
        );
    }else{
        return (
          <WithStNo studentname={studentname} studentno={studentno} />
        );    
    }

};

export default Student;
