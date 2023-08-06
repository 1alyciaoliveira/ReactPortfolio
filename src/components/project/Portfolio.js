import React from 'react'
import { projectData } from './Project.js'

const portfolio = () => {
  return (
    <div className='container' id='project'>
      <h2>Recent Projects</h2>

      <div className='projects'>
      {
        projectData.map(({_id, title, description, image, link}) =>(
          <project key={_id}>
            <h3>{title}</h3>
            <p>{description}</p>
            <img src={image} alt={title} />
            <a href={link}>View Project</a>
          </project>
      ))
      }
      </div>
    </div>
  );
};

export default portfolio