import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    return (
        <div className="mx-5 my-4 row row-cols-1 row-cols-md-3 g-4 ">

            {
                courses.map(course => <Service
                    key={course.name}
                    course={course}
                ></Service>)
            }
        </div>
    );
};

export default Services;