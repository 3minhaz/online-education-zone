import React from 'react';

const Course = (props) => {
    const { img, courseName, price, courseInstructor } = props.course;
    return (
        <div>
            <div className="col p-3 shadow border border-secondary rounded h-100">
                <div className="card">
                    <img className="h-100 w-100" src={img} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Course Name: {courseName}</h5>
                        <h4>Price: {price}</h4>
                        <p className="card-text">Instructor: {courseInstructor}</p>
                        <button className="btn btn-primary">Buy now</button>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;