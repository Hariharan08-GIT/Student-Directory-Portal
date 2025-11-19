import React from "react";
import './StudentCard.css';

 export default function StudentCard({name, rollNumber, course, email, skills = [], isActive}) {
    const style = {
        color:isActive ? "green" : "grey",
    }
    return(
        <div className="studentcard">
            <h3>{name}</h3>
            <p>Roll: {rollNumber}</p>
            <p>Course: {course}</p>
            <p>Email: {email}</p>
            <p style = {style}>{isActive ? "Active" : "Inactive"}</p>
            <ul>{skills.map((skill) => (<li>{skill}</li>))}</ul>
        </div>
    )
}
