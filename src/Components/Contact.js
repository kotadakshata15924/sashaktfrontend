import React from 'react';

const Contact = () => {
    const contactStyle = {
        display: 'flex',
        justifyContent: 'space-between',
    };

    const mapStyle = {
        flex: 1,
        marginRight: '5px', // Adjust the margin as needed
    };

    const cardStyle = {
        flex: 1,
    };

    return (
        <div style={contactStyle}>
            <div style={mapStyle}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.304848758789!2d78.48765410927754!3d17.397151883422822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99c44533324f%3A0x8aa5456a7d836bb5!2sKeshav%20Memorial%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1704126898393!5m2!1sen!2sin"
                    width="400"
                    height="300"
                    style={{ border: '0' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <div style={cardStyle}>
                <h1 className="title-03">Contact Us</h1>
                <main>
                    <p>If you have any questions or need assistance, please don't hesitate to contact us. We are here to help!</p>

                    <div className="CardSection">
                        <h3>Our Address</h3>
                        <p>
                            Narayanguda <br />
                            Hyderabad, Telangana 500024 <br />
                            India
                        </p>
                    </div>

                    <div className="CardSection">
                        <h3>Email</h3>
                        <p>Email: <a href="mailto:Projectschool23@gmail.com">Projectschool23@gmail.com</a></p>
                    </div>

                    <div className="CardSection">
                        <h3>Phone</h3>
                        <p>Phone: 9030456231</p>
                    </div>
                </main>
                <footer>
                    <p>Copyright © {new Date().getFullYear()} Sashakt</p>
                </footer>
            </div>
        </div>
    );
};

export default Contact;
