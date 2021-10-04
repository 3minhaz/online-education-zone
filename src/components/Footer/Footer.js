import React from 'react';

const Footer = () => {
    return (
        <div className="row ms-4 me-4 mt-4">
            <div className="text-start col-md-4 " >
                <h3>Links</h3>
                <ul>
                    <li>Courses</li>
                    <li>Tutors</li>
                    <li>Quiz and Tests</li>
                </ul>
            </div>
            <div className="col-md-4 text-start">
                <h3>Company</h3>
                <ul>
                    <li>About</li>
                    <li>Talk to us</li>
                    <li>Help</li>
                </ul>
            </div>
            <div className="col-md-4 text-start">
                <h3>Contact us</h3>
                <ul>
                    <li>Address:77 Indian St. Baltimore, MD 21206</li>
                    <li>Email: +3233-332-334</li>
                    <li>Phone: elearny@example.com</li>
                </ul>
            </div>
            <hr />
            <h4>Copyright © 2021 Online Education Center. All Rights Reserved</h4>
        </div>
    );
};

export default Footer;