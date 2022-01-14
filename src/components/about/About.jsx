import React from 'react';
import Header from '../commons/Header';
import Footer from '../commons/Footer';
import CV from "../../files/CV_Roqueheli Arenas.pdf";

function About() {
    return (
        <>
            <Header />
            <section id="about">
                <div class="about container">
                    <div class="col-left">
                        <div class="about-img">
                        <img src="../../images/Profile.jpeg" alt="img" />
                        </div>
                    </div>
                    <div class="col-right">
                        <h1 class="section-title">About <span>me</span></h1>
                        <h2>Front End Developer</h2>
                        <p>Focused in striking a balance between functional and aesthetic design, ensuring web design is optimized, easy to use,
                           and was built with best practices. I can use HTML, CSS, and JavaScript to produce responsive websites and web apps that
                           provide users the best and most appropriate experience suited to their device and browser.</p>
                        <a href={CV} class="cta" target="_blank" rel='noreferrer noopener' download>Download Resume</a>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About;
