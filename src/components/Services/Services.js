import React, { useEffect, useState } from 'react';

const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div>
            {
                courses.map(course => console.log(course))
            }
        </div>
    );
};

export default Services;