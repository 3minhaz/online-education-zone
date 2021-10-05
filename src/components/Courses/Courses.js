import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Course from '../Course/Course';
import HomeTop from '../HomeTop/HomeTop';
import './Courses.css';

const Courses = () => {
    let [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    courses = courses.slice(0, 4);
    //course section added here
    return (
        <div>
            <HomeTop></HomeTop>
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