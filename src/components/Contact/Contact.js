import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className="my-5 py-5">
            <h1 className="mb-5">Contact Info</h1>
            <div className="row ">
                <div className="col-md-6">
                    <p>HBS Online courses are nothing like a typical sit-back-and-listen lecture. You’ll engage in a new activity every three to five minutes. Each element is designed to keep you interested, involved, and on your toes.</p>
                </div>
                <div className="col-md-6">
                    <div className="d-flex">
                        <h6 className="me-2"><FontAwesomeIcon className="me-2 fa-lg " icon={faAddressCard} />ADDRESS:</h6>
                        <p>  77 Indian St. Baltimore, MD 21206</p>
                    </div>
                    <div className="d-flex">
                        <h6 className="me-2"><FontAwesomeIcon className="me-2 fa-lg " icon={faPhone} />Phone:</h6>
                        <p>+3233-332-334</p>
                    </div>
                    <div className="d-flex">
                        <h6 className="me-2"><FontAwesomeIcon className="me-2 fa-lg " icon={faEnvelope} />Email:</h6>
                        <p>elearny@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;