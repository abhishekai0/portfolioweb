import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faPalette, faBug } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';

const services = [
    {
        icon: faCode,
        title: 'Web Development',
        description: 'Building responsive and high-quality websites.'
    },
    {
        icon: faMobileAlt,
        title: 'App Development',
        description: 'Creating efficient and user-friendly mobile applications.'
    },
    {
        icon: faPalette,
        title: 'UI & UX Design',
        description: 'Designing visually appealing and user-centric interfaces.'
    },
    {
        icon: faBug,
        title: 'Code Error Debugging',
        description: 'Identifying and fixing bugs in code.'
    }
];

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
            .then((result) => {
                alert('Message sent successfully!');
            }, (error) => {
                alert('Failed to send message, please try again.');
            });
    };

    return (
        <section id="contact" style={{ padding: '2rem' }}>
            <h2>Services</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                {services.map((service, index) => (
                    <div key={index} style={{
                        border: '2px solid transparent',
                        borderImage: 'linear-gradient(45deg, red, yellow, green, blue, purple)',
                        borderImageSlice: 1,
                        borderRadius: '10px',
                        padding: '1rem',
                        margin: '1rem',
                        textAlign: 'center',
                        width: '200px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        transition: 'transform 0.3s',
                        cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <FontAwesomeIcon icon={service.icon} size="3x" style={{ marginBottom: '0.5rem', color: '#007bff' }} />
                        <h3 style={{ marginBottom: '0.5rem' }}>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
            <h2>Contact Me</h2>
            <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input type="text" name="user_name" placeholder="Your Name" required style={{ margin: '0.5rem 0', padding: '0.5rem', width: '300px' }} />
                <input type="email" name="user_email" placeholder="Your Email" required style={{ margin: '0.5rem 0', padding: '0.5rem', width: '300px' }} />
                <textarea name="message" placeholder="Your Message" required style={{ margin: '0.5rem 0', padding: '0.5rem', width: '300px', height: '150px' }} />
                <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Send
                </button>
            </form>
        </section>
    );
};

export default Contact;
