import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const AboutUs = () => {
    return (
        <div>
            <div className="row my-5 py-5 rounded">
                <div className="col-md-4">

                    <h2>Best Multi-Tier Courses</h2>
                    <p>Education System</p>
                </div>
                <div className="col-md-4">
                    <h2>Easy to Use Video Panels</h2>
                    <p>Best LMS System</p>
                </div>
                <div className="col-md-4">
                    <h2>Multi Purpose Dashboard</h2>
                    <p>Online Education</p>
                </div>
            </div>
            <div className="py-4">
                <h1>Why choose us</h1>
                <p>Auctor eleifend egestas felis a suscipit, amet ultricies orci. Eget nonummy ultrices magna ornare tellus molestie.</p>
            </div>
        </div>
    );
};

export default AboutUs;