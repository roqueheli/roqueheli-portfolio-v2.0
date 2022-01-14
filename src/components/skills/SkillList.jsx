import React from 'react';
import skillsData from '../../data/skillslist';

function ServiceList() {
    return (
        <section id="services">
        <div class="services container">
            <div class="service-top">
                <h1 class="section-title">Skil<span>l</span>s</h1>
            </div>
            <div class="service-bottom">
                {skillsData.map((skill) => {
                    return (
                        <div class="service-item">
                            <div class="icon"><img src={skill.photo} alt={skill.name}/></div>
                            <h2>{skill.name}</h2>
                            <p>{skill.level}</p>
                        </div>    
                    );
                })}
            </div>
        </div>
    </section>
    )
}

export default ServiceList;
