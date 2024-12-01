import React from 'react';

const ContactUs = () => {
    return (
        <div className='contUs'>
            <div className="containe">
                {/* Introduction */}
                <section>
                    <h2>Contact Us Roommates!</h2>
                    <p>We’re here to make your search for the perfect roommate or rental experience as seamless as possible. Whether you have questions, need support, or just want to get in touch, we’d love to hear from you!</p>
                </section>

                {/* How Can We Help You */}
                <section>
                    <h3>How Can We Help You?</h3>
                    <p><strong>General Inquiries:</strong> For any questions about our platform, services, or anything else, feel free to reach out to us through the contact form below.</p>
                    <p><strong>Support and Feedback:</strong> If you have any concerns or feedback, we want to hear it! Your input helps us improve our services.</p>
                    <p><strong>Partner with Us:</strong> Interested in collaborating with Roommates? We’re open to partnerships and opportunities to enhance the roommate matching experience.</p>
                </section>

                {/* Contact Information */}
                <section className="contact-info">
                    <h3>Our Contact Information:</h3>
                    <p><strong>Address:</strong><br /> Rajahmundry, Andhra Pradesh, INDIA</p>
                    <p><strong>Email Us:</strong><br /> For general inquiries or support, please contact us at: <a href="mailto:princepardhu28@gmail.com">princepardhu28@gmail.com</a></p>
                    <p><strong>Call Us:</strong><br /> Have questions or need assistance? Call us at: <strong>(+91) 9160597454</strong></p>
                </section>
            </div>
        </div>
    );
};

export default ContactUs;