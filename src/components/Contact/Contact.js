import React from 'react';

const Contact = () => {
    return (
        <div className="my-5 py-5">
            <h1 className="mb-5">Contact Info</h1>
            <div className="row ">
                <div className="col-md-6">
                    <p>Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat.</p>
                </div>
                <div className="col-md-6">
                    <div className="d-flex">
                        <h6 className="me-2">ADDRESS:</h6>
                        <p>  77 Indian St. Baltimore, MD 21206</p>
                    </div>
                    <div className="d-flex">
                        <h6 className="me-2">Phone:</h6>
                        <p>+3233-332-334</p>
                    </div>
                    <div className="d-flex">
                        <h6 className="me-2">Email:</h6>
                        <p>elearny@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;