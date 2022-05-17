import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Projects from '../../Constants/Projects';


const Project = (props) => {

  const {id} = useParams();
  let result = Projects.find(project => project.link === id);
  const [project, setProject] = useState(result);

  useEffect(() => {
    setProject(result);
  }, [result]);

  return(
    <section className='project'>
      <div className='project__image-container'>
        {
          project.projectImage.map((image) => {
            return (
            <img className='project__image' src={image} alt={project.title} key={image.id} />
            )}
          )
        }
      </div>
      <ul className='project__info'>
        <li className='project__item'>
          <h2 className='project__title'>
            {project.title}
          </h2>
        </li>
        <li className='project__item'>
          <p className='project__description'>
            {project.description}
          </p>
        </li>
        <li className='project__item'>
          <p className='project__subtitle'>
            date
          </p>
          <p className='project__description' id="date">
            {project.date}
          </p>
        </li>
        <li className='project__item'>
          <p className='project__subtitle'>
            client
          </p>
          <a className='project__link' href={project.clientLink} target="_blank" rel='noreferrer'>
            {project.client}
          </a>
        </li>
        <li className='project__item'>
          <p className='project__subtitle'>
            tags
          </p>
          <p className='project__description' id="tags">
            {project.tags}
          </p>
        </li>
      </ul>
    </section>
  )
};

export default Project;