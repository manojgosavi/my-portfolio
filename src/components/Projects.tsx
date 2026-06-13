import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section__heading">
          <h2>Projects I've Built</h2>
          <p>A selection of things I've worked on recently.</p>
        </div>
        <div className="projects__grid">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.title}
              target="_blank"
              rel="noreferrer"
              className="project-card"
            >
              <h3 className="project-card__subtitle">{project.subtitle}</h3>
              <h2 className="project-card__title">{project.title}</h2>
              <p className="project-card__description">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
