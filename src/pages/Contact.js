import React, { useState } from 'react';

export default function Contact() {
    const [firstnameError, setFirstnameError] = useState(true);
    const [lastnameError, setLastnameError] = useState(true);
    const [telephoneError, setTelephoneError] = useState(true);
    const [emailError, setEmailError] = useState(true);
    const [messageError, setMessageError] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleChange = (input) => {
        let name = input.target.name;
        let value = input.target.value;
        let emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let telephonePattern = /^((0047)?|(\+47)?|(47)?)\d{8}$/



        switch (name) {
            case 'firstname':
                (value !== '') ? setFirstnameError(false) : setFirstnameError(true)
                break;
            case 'lastname':
                (value !== '') ? setLastnameError(false) : setLastnameError(true)
                break;
            case 'telephone':
                (telephonePattern.test(value)) ? setTelephoneError(false) : setTelephoneError(true)
                break;
            case 'email':
                (emailPattern.test(value)) ? setEmailError(false) : setEmailError(true)
                break;
            case 'message':
                (value !== '') ? setMessageError(false) : setEmailError(true)
                break;
        }
    }


    return (
        <>
            <div className="contact-container">
                <div className="contact-row">
                    <h1>Contact Form</h1>
                    <form onSubmit={handleSubmit}>
                        <p>Firstname</p>
                        <input type='text'
                            name='firstname'
                            onChange={handleChange}
                            className="form-control"
                        />
                        <p className={(firstnameError) ? 'error' : 'error__hide'}>Please enter your firstname*</p>
                        <br />
                        <p>Lastname</p>
                        <input type='text'
                            name='lastname'
                            onChange={handleChange}
                            className="form-control"
                        />
                        <p className={(lastnameError) ? 'error' : 'error__hide'}>Please enter your lastname*</p>
                        <br />
                        <p>Telephone number</p>
                        <input type='text'
                            name='telephone'
                            onChange={handleChange}
                            className="form-control"
                        />
                        <p className={(telephoneError) ? 'error' : 'error__hide'}>Please enter your lastname*</p>
                        <br />
                        <p>Email</p>
                        <input type='text'
                            name='email'
                            onChange={handleChange}
                            className="form-control"
                        />
                        <p className={(emailError) ? 'error' : 'error__hide'}>Please enter your email*</p>
                        <br />
                        <p>Message</p>
                        <textarea type='text'
                            name='message'
                            onChange={handleChange}
                            className="form-control message-form"
                        />
                        <p className={(messageError) ? 'error' : 'error__hide'}>Please enter a message*</p>
                        <br />
                        <input type="submit" value="Send" disabled={firstnameError || lastnameError || emailError || messageError} className="btn-contact" />
                    </form>
                </div>
            </div>
        </>
    )
}