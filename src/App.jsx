import { useEffect, useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Atom,
  BrainCircuit,
  Braces,
  BriefcaseBusiness,
  Check,
  CloudSun,
  Code2,
  Database,
  FileText,
  GitBranch,
  GraduationCap,
  Mail,
  Menu,
  MessageSquareText,
  Network,
  Phone,
  Send,
  Sparkles,
  Workflow,
  X,
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import './App.css'

const email = 'kishorejayabal10@gmail.com'
const phone = '+91 6374642981'
const github = 'https://github.com/Kishorekk6342'
const linkedin = 'https://linkedin.com/in/kishore-kumar-k-j/'
const currentYear = new Date().getFullYear()

const navigation = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Expertise', 'expertise'],
  ['Projects', 'projects'],
  ['Journey', 'experience'],
  ['Technology', 'technology'],
  ['Education', 'education'],
  ['Contact', 'contact'],
]

const projectData = [
  {
    kind: 'weather',
    category: 'AI Agent · Weather',
    title: 'Intelligent Weather Agent',
    description: 'An AI-powered weather agent using LLM function calling and external APIs.',
    technologies: ['Python', 'LLMs', 'Function Calling', 'REST APIs'],
  },
  {
    kind: 'conversation',
    category: 'Conversational AI',
    title: 'Conversational GenAI Chatbot',
    description: 'A conversational AI application using prompt chaining, multi-turn memory and structured responses.',
    technologies: ['Python', 'Generative AI', 'LLMs'],
  },
  {
    kind: 'tracker',
    category: 'Full-stack Platform',
    title: 'Hue Tracker',
    description: 'A full-stack issue tracking platform with authentication, assignment and workflow management.',
    technologies: ['Supabase', 'Backend Integration', 'Authentication', 'CRUD'],
  },
]

const interestData = [
  {
    kind: 'learning',
    icon: <BrainCircuit aria-hidden="true" />,
    title: 'Machine Learning',
    description: 'Understanding patterns and building predictive systems.',
  },
  {
    kind: 'generative',
    icon: <Sparkles aria-hidden="true" />,
    title: 'Generative AI',
    description: 'Exploring LLMs and creating intelligent applications.',
  },
  {
    kind: 'retrieval',
    icon: <Network aria-hidden="true" />,
    title: 'RAG Systems',
    description: 'Connecting language models with relevant knowledge.',
  },
  {
    kind: 'agents',
    icon: <Workflow aria-hidden="true" />,
    title: 'AI Agents',
    description: 'Building systems that can interact with tools and APIs.',
  },
]

const galleryCandidates = [
  '/images/teaching/teaching-01.jpeg',
  '/images/teaching/teaching-02.jpeg',
  '/images/teaching/teaching-03.jpeg',
]

function Reveal({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={reduceMotion ? undefined : { once: true, amount: 0.12 }}
      transition={reduceMotion ? undefined : { duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

function SectionTitle({ eyebrow, title, description, className = '' }) {
  return (
    <div className={`section-title ${className}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function KKLogo() {
  return (
    <svg className="kk-logo" viewBox="0 0 48 48" aria-hidden="true">
      <image href="/images/kk-monogram.png" x="0" y="8.24" width="48" height="31.52" />
    </svg>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = navigation
      .map(([, id]) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)
        if (visible[0]) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-22% 0px -58% 0px', threshold: [0, 0.15, 0.4, 0.7] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <nav className="nav-shell page-width" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Kishore Kumar KJ, home">
          <KKLogo />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <div id="primary-navigation" className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          {navigation.map(([label, id]) => (
            <a
              key={id}
              className={activeSection === id ? 'is-active' : ''}
              href={`#${id}`}
              aria-current={activeSection === id ? 'location' : undefined}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

function HeroNetwork() {
  return (
    <svg className="hero-network" viewBox="0 0 640 520" fill="none" aria-hidden="true">
      <path d="M56 102 172 177l-66 105 145 38 38-126 105 75 110-128M172 177l117-111 100 203 107 123M106 282l145 38 50 146 88-197 107 123 67-128M251 320l122 44" />
      <circle cx="56" cy="102" r="4" /><circle cx="172" cy="177" r="5" />
      <circle cx="289" cy="66" r="4" /><circle cx="389" cy="269" r="5" />
      <circle cx="494" cy="141" r="4" /><circle cx="106" cy="282" r="4" />
      <circle cx="251" cy="320" r="5" /><circle cx="301" cy="466" r="4" />
      <circle cx="389" cy="269" r="4" /><circle cx="496" cy="392" r="5" />
      <circle cx="563" cy="264" r="4" />
    </svg>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-grid page-width">
        <div className="hero-copy">
          <div className="hero-identity">
            <span className="identity-dot" />
            <span>KISHOREKUMAR KJ</span>
            <i />
            <span>AI/ML ENGINEER</span>
          </div>
          <h1>I build things<br />with <em>AI.</em></h1>
          <p className="hero-intro">
            I&apos;m Kishore Kumar KJ, an AI/ML Engineer exploring the possibilities of Machine Learning,
            Generative AI and intelligent systems.
          </p>
          <div className="hero-chips" aria-label="Technologies">
            {['Python', 'LLMs', 'Generative AI', 'RAG', 'AI Agents'].map((technology) => (
              <span className="tech-chip" key={technology}>{technology}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a className="button button-blue" href="#projects">
              Explore My Work <ArrowDownRight size={17} aria-hidden="true" />
            </a>
            <a className="button button-hero-outline" href="#contact">
              Let&apos;s Connect <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a className="resume-link" href="/kishore-kumar-kj-resume.pdf" download>
              <FileText size={15} aria-hidden="true" /> Download Resume
            </a>
          </div>
        </div>

        <Reveal className="hero-portrait">
          <HeroNetwork />
          <div className="portrait-frame">
            <img
              src="/images/kishore.webp"
              width="1199"
              height="1312"
              alt="Kishore Kumar KJ, AI/ML Engineer"
              fetchPriority="high"
            />
          </div>
          <span className="portrait-caption">COIMBATORE, INDIA <i /> BUILDING WITH AI</span>
        </Reveal>
      </div>
      <div className="hero-bottom page-width" aria-hidden="true">
        <span>ARTIFICIAL INTELLIGENCE</span>
        <span className="hero-bottom-line" />
        <span>IDEAS INTO APPLICATIONS</span>
      </div>
    </section>
  )
}

function About() {
  const highlights = [
    { icon: <Code2 aria-hidden="true" />, text: 'Practical AI applications' },
    { icon: <MessageSquareText aria-hidden="true" />, text: 'Conversational AI systems' },
    { icon: <BriefcaseBusiness aria-hidden="true" />, text: 'Workshops & mentoring' },
  ]

  return (
    <section className="section about-section" id="about">
      <div className="page-width">
        <div className="about-heading">
          <SectionTitle eyebrow="A LITTLE ABOUT ME" title="Beyond the code." />
          <span className="about-side-note">Curious about intelligence.<br />Passionate about building with AI.</span>
        </div>
        <div className="about-layout">
          <Reveal className="about-copy">
            <p>
              My interest in AI goes beyond simply using models. I enjoy understanding how they work,
              experimenting with new approaches and turning those experiments into practical applications.
            </p>
            <p>
              From machine learning to conversational AI and agent-based systems, I&apos;m constantly
              exploring ways to make technology more useful.
            </p>
            <p>
              I also enjoy sharing my knowledge through technical workshops and helping students
              discover emerging technologies.
            </p>
          </Reveal>
          <div className="about-highlights">
            {highlights.map((highlight, index) => (
              <Reveal className="about-highlight" key={highlight.text} delay={index * 0.06}>
                <span className="highlight-icon">{highlight.icon}</span>
                <span>{highlight.text}</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </Reveal>
            ))}
            <blockquote className="about-pullquote">
              “Curious about intelligence. Passionate about building with AI.”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

function InterestVisual({ kind }) {
  if (kind === 'learning') {
    return (
      <svg className="interest-graphic learning-graphic" viewBox="0 0 230 160" fill="none" aria-hidden="true">
        <path d="M22 124c27-4 34-71 64-71s34 52 61 52 35-77 61-85" />
        <path d="M22 137h190M23 18v119" className="graph-axis" />
        <circle cx="86" cy="53" r="5" /><circle cx="147" cy="105" r="5" /><circle cx="208" cy="20" r="5" />
      </svg>
    )
  }
  if (kind === 'generative') {
    return (
      <div className="interest-graphic generative-graphic" aria-hidden="true">
        <span /><span /><span /><span /><span /><span /><span /><span /><span />
        <i>MODEL</i>
      </div>
    )
  }
  if (kind === 'retrieval') {
    return (
      <svg className="interest-graphic retrieval-graphic" viewBox="0 0 230 160" fill="none" aria-hidden="true">
        <path d="M48 44 106 79M48 116l58-37m24 0 54-41m-54 41 54 37" />
        <rect x="21" y="27" width="48" height="34" rx="6" />
        <rect x="21" y="99" width="48" height="34" rx="6" />
        <rect x="100" y="61" width="48" height="36" rx="18" />
        <rect x="178" y="21" width="36" height="34" rx="6" />
        <rect x="178" y="99" width="36" height="34" rx="6" />
        <circle cx="45" cy="43" r="4" /><circle cx="124" cy="79" r="5" />
      </svg>
    )
  }
  return (
    <svg className="interest-graphic agents-graphic" viewBox="0 0 230 160" fill="none" aria-hidden="true">
      <path d="M46 81h47m44 0h46M70 53l24 28-24 28m90-56 24 28-24 28" />
      <rect x="14" y="60" width="34" height="42" rx="8" />
      <rect x="93" y="55" width="45" height="52" rx="12" />
      <rect x="182" y="60" width="34" height="42" rx="8" />
      <circle cx="115" cy="72" r="4" /><circle cx="115" cy="88" r="4" />
    </svg>
  )
}

function Interests() {
  return (
    <section className="section interests-section" id="expertise">
      <div className="page-width">
        <Reveal className="interests-heading">
          <SectionTitle
            eyebrow="WHAT INTERESTS ME"
            title="Where curiosity meets engineering."
            description="Exploring ideas, and finding practical ways to build with them."
          />
          <Atom size={40} strokeWidth={1} aria-hidden="true" />
        </Reveal>
        <div className="interest-list">
          {interestData.map((item, index) => (
            <Reveal className={`interest-item interest-${item.kind}`} key={item.kind} delay={index * 0.04}>
              <div className="interest-visual"><InterestVisual kind={item.kind} /></div>
              <div className="interest-copy">
                <span className="interest-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectPreview({ kind }) {
  if (kind === 'weather') {
    return (
      <div className="project-preview weather-preview" aria-hidden="true">
        <div className="preview-toolbar"><span /><span /><span /><i>weather-agent / request-flow</i></div>
        <div className="weather-flow">
          <div className="flow-user"><MessageSquareText /><span>User</span><small>Question</small></div>
          <div className="flow-connector"><i /></div>
          <div className="flow-model"><BrainCircuit /><span>LLM</span><small>Function call</small></div>
          <div className="flow-connector"><i /></div>
          <div className="flow-tool"><CloudSun /><span>Weather tool</span><small>External API</small></div>
          <div className="flow-connector"><i /></div>
          <div className="flow-result"><Check /><span>API response</span><small>Live information</small></div>
        </div>
        <div className="preview-footnote"><span>TOOL CALL</span><span>RESPONSE</span></div>
      </div>
    )
  }
  if (kind === 'conversation') {
    return (
      <div className="project-preview conversation-preview" aria-hidden="true">
        <div className="preview-toolbar"><span /><span /><span /><i>conversation / response-pipeline</i></div>
        <div className="chat-window">
          <div className="chat-window-head"><MessageSquareText /><span>AI conversation</span><i /></div>
          <div className="chat-message chat-message-user">Help me explore this idea.</div>
          <div className="chat-message chat-message-ai"><span /><span /><span /></div>
          <div className="chat-pipeline">
            <span>Prompt</span><ArrowRight /><span>Memory</span><ArrowRight /><span>Structured response</span>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="project-preview tracker-preview" aria-hidden="true">
      <div className="preview-toolbar"><span /><span /><span /><i>hue tracker / issues</i></div>
      <div className="tracker-window">
        <div className="tracker-sidebar"><b>H</b><i /><i /><i /><i /></div>
        <div className="tracker-main">
          <div className="tracker-title"><span>Issue workspace</span><span>+ New issue</span></div>
          <div className="tracker-tabs"><span>All issues</span><span>Assigned</span><span>Workflow</span></div>
          <div className="tracker-issue"><span className="issue-mark issue-blue" /><span>Issue tracking</span><small>Open</small><span className="avatar-dot">K</span></div>
          <div className="tracker-issue"><span className="issue-mark issue-purple" /><span>Task assignment</span><small>In progress</small><span className="avatar-dot avatar-purple">A</span></div>
          <div className="tracker-issue"><span className="issue-mark issue-green" /><span>Workflow update</span><small>Resolved</small><span className="avatar-dot avatar-green">M</span></div>
        </div>
      </div>
    </div>
  )
}

function ProjectShowcase({ project, reverse = false }) {
  return (
    <Reveal className={`project-showcase${reverse ? ' project-reverse' : ''}`}>
      <div className="showcase-visual"><ProjectPreview kind={project.kind} /></div>
      <div className="showcase-copy">
        <span className="showcase-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-chips">
          {project.technologies.map((technology) => <span className="tech-chip" key={technology}>{technology}</span>)}
        </div>
        <a className="project-link" href={github} target="_blank" rel="noreferrer">
          GitHub profile <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </Reveal>
  )
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="page-width">
        <Reveal className="projects-heading">
          <SectionTitle
            eyebrow="SELECTED PROJECTS"
            title="From ideas to intelligent applications."
            description="Practical applications built with AI and software engineering."
          />
        </Reveal>
        <div className="project-showcases">
          {projectData.map((project, index) => (
            <ProjectShowcase key={project.kind} project={project} reverse={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ company, role, period, children, primary = false }) {
  return (
    <Reveal className={`journey-item${primary ? ' journey-item-primary' : ''}`}>
      <span className="journey-marker" aria-hidden="true" />
      <div className="journey-meta">
        <span>{company}</span>
        {period && <span>{period}</span>}
      </div>
      <h3>{role}</h3>
      <p>{children}</p>
    </Reveal>
  )
}

function TeachingGallery() {
  const [photos, setPhotos] = useState([])
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  useEffect(() => {
    let active = true
    const available = new Set()

    galleryCandidates.forEach((src) => {
      const image = new Image()
      image.onload = () => {
        available.add(src)
        if (active) {
          setPhotos(galleryCandidates.filter((candidate) => available.has(candidate)))
        }
      }
      image.src = src
    })

    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    if (!selectedPhoto) return undefined

    function closeOnEscape(event) {
      if (event.key === 'Escape') setSelectedPhoto(null)
    }

    document.body.classList.add('lightbox-open')
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.classList.remove('lightbox-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [selectedPhoto])

  if (!photos.length) return null

  return (
    <div className="teaching-gallery">
      <div className="gallery-heading">
        <div>
          <span className="section-eyebrow">WORKSHOPS &amp; MENTORING</span>
          <h3>Sharing what I learn.</h3>
          <p>Technical workshops, AI training and student mentoring.</p>
        </div>
      </div>
      <div className={`gallery-grid${photos.length < 3 ? ' gallery-grid-short' : ''}`}>
        {photos.map((src, index) => (
          <button
            className={`gallery-image gallery-image-${index + 1}`}
            type="button"
            key={src}
            onClick={() => setSelectedPhoto(src)}
            aria-label={`Open workshop photo ${index + 1}`}
          >
            <img
              src={src}
              width="960"
              height="640"
              alt={`Kishore Kumar KJ teaching, workshop photo ${index + 1}`}
              loading="lazy"
            />
          </button>
        ))}
      </div>
      {selectedPhoto && (
        <div
          className="photo-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Workshop photograph"
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedPhoto(null)
          }}
        >
          <button className="lightbox-close" type="button" onClick={() => setSelectedPhoto(null)} aria-label="Close photograph">
            <X size={24} />
          </button>
          <img src={selectedPhoto} alt="Expanded workshop photograph" />
        </div>
      )}
    </div>
  )
}

function Journey() {
  return (
    <section className="section journey-section" id="experience">
      <div className="journey-dark">
        <div className="page-width">
          <Reveal className="journey-heading">
            <SectionTitle
              eyebrow="JOURNEY"
              title={<>Learning by building.<br />Growing by sharing.</>}
            />
            <p className="journey-intro">AI research, technical training and a continued curiosity for what&apos;s next.</p>
          </Reveal>
          <div className="journey-timeline">
            <TimelineItem company="HueLearn" role="AI Researcher" period="2 years" primary>
              Built AI applications in Python, developed LLM chatbots and connected conversational systems to REST APIs.
            </TimelineItem>
            <TimelineItem company="Monarch Softwares" role="Technical Trainer" period="1 year">
              Shared Generative AI, AI/ML and Python; guided learners through LLM concepts and practical projects.
            </TimelineItem>
            <TimelineItem company="BridgeAI Innovations" role="Technical Workshops & Mentoring">
              Led Generative AI workshops with RAG, trained students and delivered a 20-day Full Stack, AI and ML program.
            </TimelineItem>
          </div>
          <div className="teaching-impact">
            <div className="impact-heading">
              <span>TEACHING &amp; WORKSHOPS</span>
              <p>Sharing emerging technologies with learners.</p>
            </div>
            <div className="impact-stat"><strong>15<span>+</span></strong><span>workshops conducted</span></div>
            <div className="impact-stat"><strong>500<span>+</span></strong><span>students trained</span></div>
          </div>
          <TeachingGallery />
        </div>
      </div>
    </section>
  )
}

const technologyGroups = [
  {
    icon: <Braces aria-hidden="true" />,
    title: 'Languages',
    technologies: ['Python', 'C#'],
    className: 'language-group',
  },
  {
    icon: <BrainCircuit aria-hidden="true" />,
    title: 'ML & AI',
    technologies: ['Scikit-learn', 'LLMs', 'Prompt Engineering', 'RAG', 'Embeddings', 'AI Agents', 'Function Calling', 'AI Workflows'],
    className: 'ai-group',
  },
  {
    icon: <Database aria-hidden="true" />,
    title: 'Backend & Tools',
    technologies: ['REST APIs', 'Supabase', 'Git', 'GitHub', 'Postman'],
    className: 'backend-group',
  },
]

function TechnologyEcosystem() {
  return (
    <section className="section technology-section" id="technology">
      <div className="page-width technology-layout">
        <Reveal className="technology-heading">
          <SectionTitle
            eyebrow="TECHNOLOGY ECOSYSTEM"
            title="Tools for making ideas useful."
          />
          <p>The languages, frameworks and tools I work with.</p>
        </Reveal>
        <div className="technology-groups">
          {technologyGroups.map((group) => (
            <Reveal className={`technology-group ${group.className}`} key={group.title}>
              <div className="technology-group-title">
                <span>{group.icon}</span>
                <h3>{group.title}</h3>
              </div>
              <div className="technology-tags">
                {group.technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
        <div className="ecosystem-mark" aria-hidden="true">
          <span /><span /><span />
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="page-width education-row">
        <div className="education-icon"><GraduationCap size={24} aria-hidden="true" /></div>
        <div className="education-copy">
          <span>EDUCATION</span>
          <h2>B.Tech, Information Technology</h2>
          <p>Honours in Artificial Intelligence &amp; Data Science · SNS College of Technology</p>
        </div>
        <div className="education-year"><span>GRADUATED</span><strong>2025</strong></div>
        <div className="education-result"><span>ACADEMIC PERCENTAGE</span><strong>78%</strong></div>
      </div>
    </section>
  )
}

function Contact() {
  const [formStatus, setFormStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const subject = encodeURIComponent(formData.get('subject'))
    const body = encodeURIComponent(
      `From: ${formData.get('name')} (${formData.get('email')})\n\n${formData.get('message')}`,
    )

    setIsSubmitting(true)
    setFormStatus('Opening your email app…')
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
    window.setTimeout(() => {
      setIsSubmitting(false)
      setFormStatus(`If your email app did not open, write to ${email}.`)
    }, 1400)
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="page-width contact-layout">
        <Reveal className="contact-copy">
          <SectionTitle
            eyebrow="GET IN TOUCH"
            title="Have an interesting idea? Let’s talk."
          />
          <p>I&apos;m always interested in discussing AI, building useful applications and exploring new opportunities.</p>
          <a className="contact-email" href={`mailto:${email}`}>
            {email} <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <div className="contact-links">
            <a href={`tel:${phone.replace(/\s/g, '')}`}><Phone size={16} aria-hidden="true" />{phone}</a>
            <a href={linkedin} target="_blank" rel="noreferrer"><BriefcaseBusiness size={16} aria-hidden="true" />LinkedIn<ArrowUpRight size={13} aria-hidden="true" /></a>
            <a href={github} target="_blank" rel="noreferrer"><GitBranch size={16} aria-hidden="true" />GitHub<ArrowUpRight size={13} aria-hidden="true" /></a>
          </div>
        </Reveal>
        <Reveal className="contact-form-panel">
          <h3>Send a note</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" autoComplete="name" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
            </label>
            <label>
              Subject
              <input name="subject" placeholder="A short subject" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="4" placeholder="What would you like to discuss?" required />
            </label>
            <button className="button button-blue" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Opening email…' : 'Send email'} <Send size={16} aria-hidden="true" />
            </button>
            <p className="form-status" role="status" aria-live="polite">{formStatus}</p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-content">
        <a className="footer-brand" href="#home">
          <KKLogo />
          <span className="footer-brand-copy">
            <span>KISHOREKUMAR KJ</span>
            <span>AI/ML ENGINEER</span>
          </span>
        </a>
        <p>Building intelligent solutions with AI.</p>
        <div className="footer-socials">
          <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><BriefcaseBusiness size={17} /></a>
          <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><GitBranch size={17} /></a>
          <a href={`mailto:${email}`} aria-label="Email Kishore"><Mail size={17} /></a>
        </div>
      </div>
      <div className="page-width footer-bottom">
        <span>© {currentYear} KISHOREKUMAR KJ</span>
        <a href="#home">Back to top <ArrowUpRight size={13} aria-hidden="true" /></a>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Interests />
        <Projects />
        <Journey />
        <TechnologyEcosystem />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
