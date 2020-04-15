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
    const {studentname} = match.params;
    console.log(match.params);
    
    if( match.studentno !== undefined){
        return (
            <WithStNo studentname={studentname} studentno={match.studentno} />
        );
    }else{
        return (
            <WithoutStNo studentname={studentname}/>
        );    
    }

};

export default Student;
