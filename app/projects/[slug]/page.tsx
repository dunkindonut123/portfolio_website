import { ArrowUpRight, MapPin } from 'lucide-react'
import { notFound } from 'next/navigation'
import { ProjectVisual } from '@/components/project-card'
import { getProject, projects } from '@/lib/projects'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="/" aria-label="Home"><span>B</span>Brandon Angelo Halim</a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="/#work">Work</a><a href="/#about">About</a><a href="/#skills">Skills</a>
        </nav>
      </header>

      <section className="section project-detail">
        <div className="section-heading">
          <div className="section-heading-copy">
            <p className="eyebrow">{project.type}</p>
            <h2>{project.title}</h2>
            <p className="section-aside">{project.description}</p>
          </div>
        </div>

        <div className="project-detail-layout">
          <ProjectVisual project={project} />

          <div className="project-story">
            <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <div className="project-story-grid">
              <p><strong>The goal</strong>{project.goal}</p>
              <p><strong>My role</strong>{project.role}</p>
              <p><strong>What I learned</strong>{project.learned}</p>
              <p><strong>What I would improve</strong>{project.next}</p>
            </div>
            <div className="hero-actions">
              <a className="button button-dark" href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={16} /></a>
              <a className="button button-outline" href={project.source} target="_blank" rel="noreferrer">Source code <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </div>
        <div className="project-detail-actions">
          <a className="button button-outline" href="/projects">All projects <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="contact-heading">
          <p className="eyebrow">Contact</p>
          <h2>Get in<br /><em>touch.</em></h2>
        </div>
        <div className="contact-details">
          <p className="contact-label">Email</p>
          <a href="mailto:brandon.angelo.halim@gmail.com">brandon.angelo.halim@gmail.com</a>
          <p className="contact-label">Phone</p>
          <a href="tel:+628119633633">+62 811 9633 633</a>
          <p className="contact-label">Social</p>
          <div className="socials">
            <a href="https://github.com/dunkindonut123" target="_blank" rel="noreferrer" aria-label="GitHub">GitHub</a>
            <a href="https://www.linkedin.com/in/brandon-halim-8277622bb/" target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a>
            <a href="https://www.instagram.com/brandonangelo002/" target="_blank" rel="noreferrer" aria-label="Instagram">Instagram</a>
          </div>
        </div>
        <div className="footer-right">
          <a className="button button-light" href="mailto:brandon.angelo.halim@gmail.com">Send an email <ArrowUpRight size={16} /></a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Brandon Angelo Halim</span>
          <span><MapPin size={14} /> Based in Indonesia</span>
          <span className="footer-links">
            <a href="https://github.com/dunkindonut123" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/brandon-halim-8277622bb/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/brandonangelo002/" target="_blank" rel="noreferrer">Instagram</a>
          </span>
        </div>
      </footer>
    </main>
  )
}
