import React from 'react';
import Header from '../commons/Header';
import Footer from '../commons/Footer';

function Contact() {
    return (
        <>
            <Header />
            <section id="contact">
                <div class="contact container">
                    <div>
                        <h1 class="section-title">Contact <span>info</span></h1>
                    </div>
                    <div class="contact-items">
                        <div class="contact-item">
                        <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" alt='Phone' /></div>
                        <div class="contact-info">
                            <h1>Phone</h1>
                            <h2>+56 9 9246 9431</h2>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" alt='Email' /></div>
                        <div class="contact-info">
                            <h1>Email</h1>
                            <h2>roqueheliarenas@gmail.com</h2>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" alt='Address' /></div>
                        <div class="contact-info">
                            <h1>Address</h1>
                            <h2>Calle Nueva 120, La Florida, Chile</h2>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact;
