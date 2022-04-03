import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'gmail',
            'service_nnf0pnq',
            form.current,
            'service_nnf0pnq'
        )
            .then(
                () => {
                    alert('Email sent successfully!')
                    window.location.reload(false)
                },
                () => {
                    alert('Error sending email')
                }
            )


    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially ambitious or
                        large projects. However, if you have other request or question,
                        don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" require />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" require />
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder="Subject" require />
                                </li>
                                <li>
                                    <textarea name="message" placeholder="Message" require />
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Mitesh Rathod
                    <br />
                    <br />
                    Country : India
                    <br />
                    State : Gujarat<br /><br />
                    City : Surat<br />
                    PinCode : 395007 <br />
                    <span>miteshofficial007@gmail.com</span>
                </div>
                
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Contact;