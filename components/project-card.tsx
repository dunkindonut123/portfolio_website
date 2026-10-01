import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/projects'

export function ProjectShape({ number }: { number: string }) {
  const variant = (Number.parseInt(number, 10) - 1) % 3

  if (variant === 0) {
    return (
      <>
        <div className="shape-window"><span /><span /><span /></div>
        <div className="shape-line" />
      </>
    )
  }

  if (variant === 1) {
    return (
      <>
        <div className="shape-book">field<br /><i>notes</i></div>
        <div className="shape-dot" />
      </>
    )
  }

  return (
    <>
      <div className="shape-sun" />
      <div className="shape-arc" />
    </>
  )
}

export function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className={`project-visual has-image ${project.color}`}>
        <img src={project.image} alt={`${project.title} homepage`} />
      </div>
    )
  }

  return (
    <div className={`project-visual ${project.color}`}>
      <span className="project-number">{project.number}</span>
      <div className="visual-shape">
        <ProjectShape number={project.number} />
      </div>
    </div>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a className="project-card" href={`/projects/${project.slug}`} aria-label={`Open project story for ${project.title}`}>
      <ProjectVisual project={project} />
      <div className="project-info">
        <div>
          <p className="project-type">{project.type}</p>
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </div>
        <span className="round-arrow" aria-hidden="true">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </a>
  )
}
