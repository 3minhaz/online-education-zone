import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Course from '../Course/Course';
import './Courses.css';


const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./home.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    //course section added here
    return (

        <div>

            <div className="my-4">
                < div className="mx-5 my-4 row row-cols-1 row-cols-md-3 g-4">
                    {
                        courses.map(course => <Course
                            key={course.name}
                            course={course}
                        ></Course>)
                    }
                </div >
            </div>
        </div>
    );
};

export default Courses;