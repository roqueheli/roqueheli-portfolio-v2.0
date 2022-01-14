import React from 'react';
import data from '../../data/data';

function ProjectsList() {
    return (
        <section id="projects">
        <div class="projects container">
          <div class="projects-header">
            <h1 class="section-title">Recent <span>Projects</span></h1>
          </div>
          <div class="all-projects">
                {data.map((data, index) => {
                    return (
                        <div class="project-item">
                            <div class="project-info">
                                <h1>{data.name}</h1>
                                <h2><a href={data.url} target='_blank' rel="noopener, noreferrer">Enter here</a></h2>
                                <p>{data.description}</p>
                            </div>
                            <div class="project-img">
                                <img src={data.photo} alt={data.name} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
      </section>
    )
}

export default ProjectsList;
