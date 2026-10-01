import { ArrowUpRight, MapPin } from 'lucide-react'
import { ProjectCard } from '@/components/project-card'
import { projects } from '@/lib/projects'

export default function ProjectsPage() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="/" aria-label="Home"><span>B</span>Brandon Angelo Halim</a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="/#work">Work</a><a href="/#about">About</a><a href="/#skills">Skills</a>
        </nav>
      </header>

      <section className="section work-section section-selected-work projects-page" id="projects">
        <div className="section-heading">
          <div className="section-heading-copy">
            <p className="eyebrow">Archive</p>
            <h2>My personal<br /><em>projects.</em></h2>
            <p className="section-aside">Ten apps built to learn, ship, and practice full-stack development. Some were developed with AI assistance as part of my workflow.</p>
          </div>
          <div className="section-heading-side">
            <a className="button button-outline" href="/">Back to home <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
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
