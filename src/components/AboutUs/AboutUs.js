import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faAddressBook, faCertificate, faGraduationCap, faVideo } from '@fortawesome/free-solid-svg-icons';
import './Aboutus.css'


const AboutUs = () => {
    return (
        <div>
            <div className="row mx-5 my-5 py-5 rounded">
                <div className="col-md-4 text-start">
                    <div>
                        <FontAwesomeIcon className="me-3 fa-5x fontawesome" icon={faBook} />
                    </div>
                    <div>
                        <h2>Best Multi-Tier Courses</h2>
                        <p>Education System</p>
                    </div>
                </div>
                <div className="col-md-4 text-start">
                    <div>
                        <FontAwesomeIcon className="me-3 fa-5x fontawesome" icon={faVideo} />
                    </div>
                    <div>
                        <h2>Easy to Use Video Panels</h2>
                        <p>Best LMS System</p>
                    </div>
                </div>
                <div className="col-md-4 text-start">
                    <div>
                        <FontAwesomeIcon className="me-3 fa-5x fontawesome" icon={faGraduationCap} />
                    </div>
                    <div>
                        <h2>Multi Purpose Dashboard</h2>
                        <p>Online Education</p>
                    </div>
                </div>
            </div>
            <div className="row mx-5 pb-5">
                <div className="col-md-5 d-flex">
                    <div>
                        <FontAwesomeIcon className="me-3 fa-5x fontawesome" icon={faAddressBook} />
                    </div>
                    <div className="text-start">
                        <h2>Best Education System</h2>
                        <p>Advance Education Management</p>
                    </div>
                </div>
                <div className="col-md-5 d-flex">
                    <div>
                        <FontAwesomeIcon className="me-3 fa-5x fontawesome" icon={faCertificate} />
                    </div>
                    <div className="text-start">
                        <h2>Best Education System</h2>
                        <p>Advance Education Management</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;