import React from 'react';
import img from '../../images/photo-1456513080510-7bf3a84b82f8.jpg';
import img2 from '../../images/time-to-study-school-tools-around-blackboard-background-46060556.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faBookOpen, faTachometerAlt, faCertificate } from '@fortawesome/free-solid-svg-icons';
import './HomeTop.css';

const HomeTop = () => {
    return (
        <div>
            <div className="row ">
                <div className="col-md-5 text-start ms-4">
                    <h1 className="fs-1 fw-bolder">The Prodigious eLearning Courses for you</h1>
                    <hr className="w-25 ms-2 home-ul" />
                    <p className="fw-light">Learning that gets you
                        Skills for your present (and your future). Get started with us.</p>
                    <p><FontAwesomeIcon className="me-3 fa-2x fontawesome-home" icon={faLightbulb} />Creative Study Pattern</p>
                    <p><FontAwesomeIcon className="me-3 fa-2x fontawesome-home" icon={faBookOpen} />Quick Crash Courses</p>
                    <p><FontAwesomeIcon className="me-3 fa-2x fontawesome-home" icon={faTachometerAlt} />Provided with Experimental Examples</p>
                    <p><FontAwesomeIcon className="me-3 fa-2x fontawesome-home" icon={faCertificate} />Certification Awarded</p>
                    <button className="btn btn-success">Discover New Courses</button>
                </div>
                <div className="col-md-6 d-flex mt-2">
                    <img className="w-50 me-4 rounded" src={img} alt="" />
                    <img className="w-50 me-2 mt-4" src={img2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomeTop;