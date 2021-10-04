import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Course from '../Course/Course';
import './Courses.css';
import background from '../../images/photo-1456513080510-7bf3a84b82f8.jpg'

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./home.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])


    return (
        <div className="my-4">
            <div className="bg-img">

            </div>
            < div className="mx-5 my-4 row row-cols-1 row-cols-md-3 g-4">
                {
                    courses.map(course => <Course
                        key={course.name}
                        course={course}
                    ></Course>)
                }
            </div >
        </div>
    );
};

export default Courses;