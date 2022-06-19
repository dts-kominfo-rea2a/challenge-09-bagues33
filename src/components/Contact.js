// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css'

const Contact = (props) => {
    return (

            <div className="card-item">
                <img src={props.img} alt={props.alt}></img>
                <div className="card-text">
                    <h3>{props.nama}</h3>
                    <p>{props.nomor}</p>
                    <p>{props.email}</p>
                </div>

            </div>
    )
}

export default Contact;