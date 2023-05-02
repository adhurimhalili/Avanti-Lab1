import React from 'react';
import './Style/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <section id="about" style={{ padding: '20px' }}>
                <h2>About Us</h2>
                <p>Some information about the restaurant.</p>
                <Link to="/About">Read More</Link>
            </section>
            <section id="contact" style={{ padding: '20px' }}>
                <h2>Contact Us</h2>
                <p>Address, phone number, and email address.</p>
                <Link to="/Contact">Contact Us</Link>
            </section>
        </div><p>© 2023 Avanti Due Amici. All rights reserved.</p></footer>
    );
}


export default Footer;
