import React from 'react';
import './Service.css'

const Service = (props) => {
    const { img, courseName, price, courseInstructor } = props.course;
    return (
        <div>
            <div className="col p-3 shadow border border-secondary rounded h-100 course-details">
                <div className="card ">
                    <img src={img} className="card-img-top w-100 h-100" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Course Name: {courseName}</h5>
                        <p className="card-text">Price: {price}</p>
                        <p>Instructor: {courseInstructor}</p>
                        <button className="btn btn-primary">Buy now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;