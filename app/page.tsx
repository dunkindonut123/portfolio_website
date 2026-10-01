import { ArrowUpRight, MapPin, Sparkles } from 'lucide-react'
import { ProjectCard } from '@/components/project-card'
import { featuredProjects } from '@/lib/projects'

const skills = [
  { label: 'Languages', items: 'JavaScript · TypeScript · HTML · CSS · SQL' },
  { label: 'Frameworks', items: 'React · Next.js · Node.js · Express' },
  { label: 'Tools', items: 'Git · GitHub · Figma · VS Code · Vercel' },
  { label: 'Practices', items: 'Responsive UI · Accessibility · Testing · REST APIs' },
]

const strengths = [
  { title: 'Communication', detail: 'Active listening, written communication, and empathetic teamwork.' },
  { title: 'Problem Solving & Management', detail: 'Critical analysis, task prioritization, and self-directed learning.' },
  { title: 'Leadership', detail: 'Strategic task delegation based on team strengths.' },
]


export default function Page() {
  return (
    <main className="site-shell">

      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Home"><span>B</span>Brandon Angelo Halim</a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">Work</a><a href="#about">About</a><a href="#skills">Skills</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Aspiring application developer</p>
          <h1>Building with <em>curiosity</em><br />and intention.</h1>
          <p className="hero-intro">I&apos;m Brandon, a computer science student who has shipped client web apps with React, Next.js, TypeScript, and Supabase. AI is part of how I deliver, and I am rebuilding the fundamentals underneath that work so I can design, debug, and extend these apps on my own.</p>
          <div className="hero-actions"><a className="button button-dark" href="#work">See my work <ArrowUpRight size={16} /></a><a className="button button-outline" href="/resume.pdf" download="CV_BrandonAngeloHalim.pdf">Download resume <ArrowUpRight size={16} /></a></div>
        </div>
        <div className="hero-art" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="sun">B<span>✦</span></div><div className="art-note note-one">curious<br />by nature</div><div className="art-note note-two">always<br />learning</div></div>
      </section>

      <section className="section work-section section-selected-work" id="work">
        <div className="section-heading">
          <div className="section-heading-copy">
            <p className="eyebrow">Selected work</p>
            <h2>My personal<br /><em>projects.</em></h2>
            <p className="section-aside">Apps I have built to learn, ship, and practice full-stack development. Some were developed with AI assistance as part of my workflow.</p>
          </div>
        </div>
        <div className="project-list">{featuredProjects.map((project) => <ProjectCard key={project.number} project={project} />)}</div>
        <div className="project-list-action">
          <a className="button button-outline" href="/projects">View all projects <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="section about-section section-about" id="about">
        <div className="about-mark"><Sparkles size={22} /><span>About Me</span></div>
        <div className="about-copy">
          <p className="eyebrow">About me</p>
          <h2>Good work lives<br />between <em>disciplines.</em></h2>
          <p>I like making things that are useful, clear, and a little unexpected. My background sits somewhere between design, front-end development, 
            and a deep curiosity about how people move through the world.</p><p>When I&apos;m not at my desk, you&apos;ll usually find me walking somewhere new, 
            collecting old magazines, or trying to make the perfect bowl of noodles.</p><div className="about-bring"><p className="eyebrow">What I can bring</p>{strengths.map((strength, index) => <div className="strength-item" key={strength.title}><span>0{index + 1}</span><div><h3>{strength.title}</h3><p>{strength.detail}</p></div></div>)}</div><a className="text-link" href="mailto:brandon.angelo.halim@gmail.com">Let&apos;s talk <span>↗</span></a></div></section>

      <section className="section skills-section section-toolkit" id="skills"><div className="section-heading"><div className="section-heading-copy"><p className="eyebrow">Technical toolkit</p><h2>Learning the<br /><em>tools.</em></h2><p className="section-aside">A snapshot of the tools I use and the fundamentals I&apos;m actively developing through freelance work and structured study.</p></div></div><div className="skills-grid">{skills.map((skill) => <article className="skill-card" key={skill.label}><p className="card-kicker">{skill.label}</p><h3>{skill.items}</h3></article>)}</div></section>

      <footer className="footer" id="contact"><div className="contact-heading"><p className="eyebrow">Contact</p><h2>Get in<br /><em>touch.</em></h2></div><div className="contact-details"><p className="contact-label">Email</p><a href="mailto:brandon.angelo.halim@gmail.com">brandon.angelo.halim@gmail.com</a><p className="contact-label">Phone</p><a href="tel:+628119633633">+62 811 9633 633</a><p className="contact-label">Social</p><div className="socials"><a href="https://github.com/dunkindonut123" target="_blank" rel="noreferrer" aria-label="GitHub">GitHub</a><a href="https://www.linkedin.com/in/brandon-halim-8277622bb/" target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a><a href="https://www.instagram.com/brandonangelo002/" target="_blank" rel="noreferrer" aria-label="Instagram">Instagram</a></div></div><div className="footer-right"><a className="button button-light" href="mailto:brandon.angelo.halim@gmail.com">Send an email <ArrowUpRight size={16} /></a></div><div className="footer-bottom"><span>© 2026 Brandon Angelo Halim</span><span><MapPin size={14} /> Based in Indonesia</span><span className="footer-links"><a href="https://github.com/dunkindonut123" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/brandon-halim-8277622bb/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.instagram.com/brandonangelo002/" target="_blank" rel="noreferrer">Instagram</a></span></div></footer>
    </main>
  )
}

