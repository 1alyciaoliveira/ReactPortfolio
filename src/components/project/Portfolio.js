import React from 'react'
import { projectData } from './Project.js'

const portfolio = () => {
  return (
    <div className='portfolio'>
      <h3>Portfolio</h3>
      <div className='projects'>
      {
        projectData.map(({_id, title, description, image, link}) =>(
          <project key={_id}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link}>View Project</a>
         {/* how can I add a link to github and another one to the deployed app? */
         /*how can I centralize the images and the links?
        why is the footer so high in the page? when in mobile view, the footer is in the middle of the page.*/} 

          </project>
      ))
      }
      </div>
    </div>
  );
};

export default portfolio