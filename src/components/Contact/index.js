import React, { useState } from 'react';
import { capitalizeFirstLetter, validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage('Email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        };

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className="contact-form">
            <form id="contact-form" onSubmit={handleSubmit}>
            <h1>CONTACT</h1>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" placeholder="Enter Name" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange} placeholder="Enter Email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" placeholder="Enter Message" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{capitalizeFirstLetter(errorMessage)}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;