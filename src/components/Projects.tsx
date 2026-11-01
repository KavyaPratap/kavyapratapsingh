'use client'

import { useState, useEffect, useRef } from 'react'
import {
  Folder,
  ExternalLink,
  Star,
  Lock,
  ArrowUpRight,
  Sparkles,
  Layers,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Play,
  X,
  Smartphone,
  Video,
} from 'lucide-react'
import styles from './Projects.module.css'

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

interface AppScreen {
  label: string
  src: string
}

interface Project {
  id: string
  title: string
  subtitle: string
  shortName: string
  semesterTag: string
  timeline: string
  status: string
  description: string
  highlights: string[]
  tags: string[]
  image: string
  screens?: AppScreen[]
  demoType: 'link' | 'video' | 'placeholder'
  demoUrl?: string
  demoLabel?: string
  sourceLabel?: string
  videoUrl?: string
  githubUrl?: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: 'project-quesper-app',
    title: 'Quesper — AI Exam Paper & Question Bank App',
    subtitle: 'Flagship Native Android Platform for CBSE / NCERT Educators',
    shortName: 'Quesper App',
    semesterTag: 'Nov 2025 — Present',
    timeline: 'Nov 2025 — Present · Main Flagship Project',
    status: 'Production · Live',
    description:
      'My primary flagship project, started in November 2025: a privately built native Android platform empowering educators across India to assemble professional, print-ready CBSE & NCERT exam papers in minutes. Teachers tap questions directly from authentic NCERT pages rather than retyping mathematical formulas, with automated blueprint calculations and instant export to print-ready PDF and editable Word (.docx).',
    highlights: [
      'Privately built native Android application with Kotlin and Jetpack Compose, slashing teacher test creation time from 2 hours to 3 minutes',
      'Architected offline-first local cache using Room Database with automatic cloud synchronization via Firebase Firestore',
      'Engineered blueprint engine supporting custom section limits, Bloom’s taxonomy marks distribution, and multi-set generation',
    ],
    tags: ['Android', 'Kotlin', 'Jetpack Compose', 'Room DB', 'Firebase', 'MVVM', 'CBSE/NCERT', 'Privately Built'],
    image: '/projects/quesper/feature_graphic/feature_1024_500.png',
    screens: [
      { label: 'Overview Banner', src: '/projects/quesper/feature_graphic/feature_1024_500.png' },
      { label: 'Class & Subject', src: '/projects/quesper/classandsubject.jpeg' },
      { label: 'Question Bank', src: '/projects/quesper/phone/ss4_phone.jpg' },
      { label: 'Paper Blueprint', src: '/projects/quesper/export.jpeg' },
      { label: 'Tap-to-Add View', src: '/projects/quesper/phone/ss1_phone.jpg' },
    ],
    demoType: 'link',
    demoUrl: 'https://quesper.in',
    demoLabel: 'Visit Quesper.in',
    sourceLabel: 'Privately Built Platform',
    githubUrl: 'https://quesper.in',
    featured: true,
  },
  {
    id: 'project-quesper-extractor',
    title: 'Quesper AI — Book Extractor & Question Generator',
    subtitle: 'Vertex AI Multimodal Vision Pipeline & Automated Exam Synthesizer',
    shortName: 'Book Extractor',
    semesterTag: 'July 2026',
    timeline: 'July 2026 · Extracted 20,000+ Questions',
    status: 'Production Pipeline · Privately Built',
    description:
      'An autonomous multimodal AI extraction and question synthesis system powered by Google Cloud & Vertex AI, built in July 2026 to extract over 20,000+ textbook questions. Features a 300 DPI vision pipeline for parsing textbook pages, automated diagram cropping with 4.5% padding, and generative agents synthesizing Case-Study, MCQ, and Assertion-Reason questions with battle-tested LaTeX equation repair.',
    highlights: [
      'Privately developed pipeline that successfully extracted 20,000+ authentic CBSE/NCERT questions directly from textbook scans',
      'Architected Vertex AI (Gemini 3.7 & 3.5 Flash via gcloud ADC) vision workflow with 300 DPI rendering & sub-question splitting',
      'Engineered generative agents synthesizing Case-Based, MCQ, and Assertion-Reason questions with verified step solutions and automated LaTeX backslash repair',
    ],
    tags: ['Vertex AI', 'Google Cloud (ADC)', 'Gemini Vision', '20,000+ Questions', 'Deep Learning (CNN/ANN)', 'Python', 'Privately Built'],
    image: '/projects/project-quesper.svg',
    demoType: 'video',
    demoLabel: 'Watch Video Demo',
    videoUrl: '/projects/extractor-demo.mp4',
    sourceLabel: 'Privately Built Pipeline',
    githubUrl: 'https://github.com/KavyaPratap',
    featured: true,
  },
  {
    id: 'project-tkinter-designer',
    title: 'Tkinter App Designer — Drag & Drop GUI with Local AI Synthesizer',
    subtitle: 'Visual Rapid Desktop Builder with Offline Local LLM Code Generation',
    shortName: 'GUI Designer & AI',
    semesterTag: '2024',
    timeline: '2024 · Desktop GUI Studio',
    status: 'Privately Built Tool',
    description:
      'A modular visual desktop application designer built in 2024, enabling developers to build GUI layouts via an interactive drag-and-drop canvas and synthesize complete production code. Integrated with offline local LLMs (CodeLlama & Qwen-Coder via local inference) for private, zero-latency callback function generation, AST syntax validation, and multi-target compilation across Python (Tkinter & CustomTkinter), Flutter (Dart), and Java (Swing).',
    highlights: [
      'Privately built visual drag-and-drop canvas with snap-to-grid alignment, marquee multi-widget selection, and F5 instant live preview',
      'Integrated local AI code synthesis engine running offline open-weights LLMs for automated event-handling logic & deprecated API fixes',
      'Built extensible multi-target Jinja2 template compiler exporting fully functional Python Tkinter, Flutter Dart, and Java Swing codebases',
    ],
    tags: ['Python', 'Tkinter', 'Local LLMs (Offline)', 'Code Synthesis', 'Jinja2', 'Flutter (Dart)', 'Java', 'Privately Built'],
    image: '/projects/project-gui-designer.svg',
    demoType: 'link',
    demoUrl: 'https://github.com/KavyaPratap',
    demoLabel: 'View Architecture',
    sourceLabel: 'Privately Built Tool',
    githubUrl: 'https://github.com/KavyaPratap',
    featured: true,
  },
]

export default function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const [activeAppScreenIndex, setActiveAppScreenIndex] = useState(0)
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setVideoModalOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    // Only run intersection observer on desktop
    if (typeof window !== 'undefined' && window.innerWidth < 960) return

    const observers: IntersectionObserver[] = []

    itemRefs.current.forEach((el, index) => {
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveProjectIndex(index)
            }
          })
        },
        {
          rootMargin: '-15% 0px -40% 0px',
          threshold: 0.15,
        }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((obs) => obs.disconnect())
    }
  }, [])

  const activeProject = projects[activeProjectIndex]

  // Image to show in the preview stage
  const currentStageImage =
    activeProject.screens && activeProject.screens[activeAppScreenIndex]
      ? activeProject.screens[activeAppScreenIndex].src
      : activeProject.image

  const handleSelectProject = (index: number) => {
    setActiveProjectIndex(index)
    setActiveAppScreenIndex(0)
    const target = itemRefs.current[index]
    if (target && window.innerWidth >= 960) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handlePrev = () => {
    setActiveProjectIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1))
    setActiveAppScreenIndex(0)
  }

  const handleNext = () => {
    setActiveProjectIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0))
    setActiveAppScreenIndex(0)
  }

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        {/* Section Header */}
        <div className={`section-header animate-fade-up ${styles.header}`}>
          <div>
            <div className="tag">
              <Folder size={12} />
              Project Showcase &amp; Timeline
            </div>
            <div className="divider" style={{ marginTop: 16 }} />
            <h2 className="section-title" style={{ marginTop: 8 }}>
              Engineering Journey &amp; Live Demos
            </h2>
            <p className="section-sub" style={{ marginTop: 14 }}>
              Explore my flagship builds — from the production Quesper Android app and Vertex AI question extractor to upcoming architectures.
            </p>
          </div>
          <a
            href="https://quesper.in"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <Smartphone size={16} />
            Visit Quesper.in
          </a>
        </div>

        {/* =====================================================
            MOBILE & TABLET VIEW (< 960px): Native Interactive Showcase
            ===================================================== */}
        <div className={styles.mobileShowcase}>
          {/* Stepper Tabs */}
          <div className={styles.mobileNavPills}>
            {projects.map((proj, idx) => {
              const isSelected = activeProjectIndex === idx
              return (
                <button
                  key={proj.id}
                  type="button"
                  className={`${styles.mobileNavPill} ${
                    isSelected ? styles.mobileNavPillActive : ''
                  }`}
                  onClick={() => {
                    setActiveProjectIndex(idx)
                    setActiveAppScreenIndex(0)
                  }}
                >
                  <span className={styles.pillIndex}>0{idx + 1}</span>
                  <div className={styles.pillText}>
                    <span className={styles.pillSem}>{proj.semesterTag}</span>
                    <span className={styles.pillName}>{proj.shortName}</span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Active Project Card (Mobile) */}
          <article className={styles.mobileCard}>
            {/* Meta Row */}
            <div className={styles.mobileMetaRow}>
              <span className={styles.mobileTimelineBadge}>
                <Calendar size={13} />
                {activeProject.timeline}
              </span>
              <span className={styles.statusPill}>
                <span className={styles.statusDot} />
                {activeProject.status}
              </span>
            </div>

            {/* Title & Subtitle */}
            {activeProject.featured && (
              <div className={styles.featuredBadge}>
                <Star size={11} fill="currentColor" />
                Featured Flagship
              </div>
            )}
            <h3 className={styles.mobileCardTitle}>{activeProject.title}</h3>
            <p className={styles.mobileCardSubtitle}>{activeProject.subtitle}</p>

            {/* Browser Screenshot Frame */}
            <div className={styles.mobileFrame}>
              <div className={styles.mobileFrameHeader}>
                <div className={styles.mobileFrameDots}>
                  <span className={styles.dotRed} />
                  <span className={styles.dotYellow} />
                  <span className={styles.dotGreen} />
                </div>
                <div className={styles.mobileFrameUrl}>
                  <Lock size={10} className={styles.lockIcon} />
                  <span>
                    {activeProject.demoUrl
                      ? activeProject.demoUrl.replace(/^https?:\/\//, '')
                      : activeProject.videoUrl || 'quesper.in'}
                  </span>
                </div>
              </div>

              <div style={{ position: 'relative' }}>
                <img
                  key={currentStageImage}
                  src={currentStageImage}
                  alt={`${activeProject.title} preview`}
                  className={styles.mobileFrameImg}
                />

                {/* Video Demo Button Overlay on mobile for Project 2 */}
                {activeProject.demoType === 'video' && (
                  <button
                    type="button"
                    className={styles.playDemoOverlayBtn}
                    onClick={() => setVideoModalOpen(true)}
                  >
                    <Play size={16} fill="currentColor" />
                    Watch Video Demo
                  </button>
                )}
              </div>

              {/* Mobile Screen Switcher for Quesper App */}
              {activeProject.screens && (
                <div className={styles.appScreenTabs}>
                  {activeProject.screens.map((screen, sIdx) => (
                    <button
                      key={screen.label}
                      type="button"
                      onClick={() => setActiveAppScreenIndex(sIdx)}
                      className={`${styles.appScreenTabBtn} ${
                        activeAppScreenIndex === sIdx ? styles.appScreenTabActive : ''
                      }`}
                    >
                      {screen.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Description */}
            <p className={styles.mobileCardDesc}>{activeProject.description}</p>

            {/* Highlights */}
            <div className={styles.mobileHighlightsBox}>
              <span className={styles.highlightsTitle}>
                <Sparkles size={13} /> Key Technical Accomplishments:
              </span>
              <ul className={styles.highlightsList}>
                {activeProject.highlights.map((item, hIdx) => (
                  <li key={hIdx}>
                    <CheckCircle2 size={13} className={styles.checkIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className={styles.mobileTags}>
              {activeProject.tags.map((tag) => (
                <span key={tag} className={styles.tagPill}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className={styles.mobileActions}>
              {activeProject.demoType === 'video' ? (
                <button
                  type="button"
                  onClick={() => setVideoModalOpen(true)}
                  className={`btn btn-primary ${styles.mobileBtn}`}
                >
                  <Play size={15} fill="currentColor" />
                  {activeProject.demoLabel || 'Watch Video Demo'}
                </button>
              ) : (
                <a
                  href={activeProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-primary ${styles.mobileBtn}`}
                >
                  <ExternalLink size={15} />
                  {activeProject.demoLabel || 'Launch Demo'}
                </a>
              )}

              {activeProject.githubUrl && (
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-outline ${styles.mobileBtn}`}
                >
                  {activeProject.sourceLabel?.includes('Proprietary') ? (
                    <Lock size={14} />
                  ) : (
                    <GithubIcon size={14} />
                  )}
                  {activeProject.sourceLabel || 'Source Code'}
                </a>
              )}
            </div>

            {/* Prev / Next Pagination Controls */}
            <div className={styles.mobilePagination}>
              <button
                type="button"
                onClick={handlePrev}
                className={styles.mobilePageBtn}
                aria-label="Previous Project"
              >
                <ChevronLeft size={16} />
                <span>Prev Project</span>
              </button>
              <span className={styles.mobilePageIndicator}>
                {activeProjectIndex + 1} of {projects.length}
              </span>
              <button
                type="button"
                onClick={handleNext}
                className={styles.mobilePageBtn}
                aria-label="Next Project"
              >
                <span>Next Project</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </article>
        </div>

        {/* =====================================================
            DESKTOP VIEW (>= 960px): Apple/Linear Sticky Split Showcase
            ===================================================== */}
        <div className={styles.desktopShowcase}>
          <div className={styles.splitLayout}>
            {/* Left Column: Timeline Milestones */}
            <div className={styles.timelineColumn}>
              <div className={styles.timelineSpine} />

              {projects.map((project, index) => {
                const isActive = activeProjectIndex === index

                return (
                  <div
                    key={project.id}
                    ref={(el) => {
                      itemRefs.current[index] = el
                    }}
                    className={`${styles.timelineNode} ${
                      isActive ? styles.timelineNodeActive : ''
                    }`}
                  >
                    {/* Timeline Marker Dot */}
                    <div
                      className={`${styles.timelineMarker} ${
                        isActive ? styles.timelineMarkerActive : ''
                      }`}
                      onClick={() => handleSelectProject(index)}
                      role="button"
                      tabIndex={0}
                      aria-label={`View ${project.title}`}
                    >
                      <span className={styles.markerInner} />
                    </div>

                    {/* Milestone Card */}
                    <div
                      className={`${styles.projectCard} ${
                        isActive ? styles.projectCardActive : ''
                      }`}
                    >
                      {/* Milestone Header */}
                      <div className={styles.milestoneMeta}>
                        <span className={styles.timelineDate}>
                          <Calendar size={13} />
                          {project.timeline}
                        </span>
                        <span className={styles.statusPill}>
                          <span className={styles.statusDot} />
                          {project.status}
                        </span>
                      </div>

                      <div className={styles.cardHeader}>
                        <div>
                          {project.featured && (
                            <div className={styles.featuredBadge}>
                              <Star size={11} fill="currentColor" />
                              Featured Flagship
                            </div>
                          )}
                          <h3 className={styles.projectTitle}>{project.title}</h3>
                          <p className={styles.projectSubtitle}>{project.subtitle}</p>
                        </div>
                      </div>

                      <p className={styles.projectDesc}>{project.description}</p>

                      {/* Key Technical Highlights */}
                      <div className={styles.highlightsBox}>
                        <span className={styles.highlightsTitle}>
                          <Sparkles size={13} /> Key Technical Accomplishments:
                        </span>
                        <ul className={styles.highlightsList}>
                          {project.highlights.map((item, hIdx) => (
                            <li key={hIdx}>
                              <CheckCircle2 size={13} className={styles.checkIcon} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Tags */}
                      <div className={styles.tags}>
                        {project.tags.map((tag) => (
                          <span key={tag} className={styles.tagPill}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className={styles.actionRow}>
                        {project.demoType === 'video' ? (
                          <button
                            type="button"
                            onClick={() => setVideoModalOpen(true)}
                            className={`btn btn-primary ${styles.actionBtn}`}
                          >
                            <Play size={15} fill="currentColor" />
                            {project.demoLabel || 'Watch Video Demo'}
                          </button>
                        ) : (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`btn btn-primary ${styles.actionBtn}`}
                          >
                            <ExternalLink size={15} />
                            {project.demoLabel || 'Launch Demo'}
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`btn btn-outline ${styles.actionBtn}`}
                          >
                            {project.sourceLabel?.includes('Proprietary') ? (
                              <Lock size={14} />
                            ) : (
                              <GithubIcon size={14} />
                            )}
                            {project.sourceLabel || 'Source Code'}
                          </a>
                        )}

                        <button
                          type="button"
                          className={`${styles.viewDemoQuickBtn} ${
                            isActive ? styles.viewDemoActive : ''
                          }`}
                          onClick={() => handleSelectProject(index)}
                        >
                          {isActive ? '● Active' : 'Showcase Demo'}
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Right Column: Sticky Project Demo Showcase Window */}
            <div className={styles.stickyColumn}>
              <div className={styles.stickyWrapper}>
                {/* Browser Mockup Window */}
                <div className={styles.browserFrame}>
                  {/* Browser Top Bar */}
                  <div className={styles.browserTopBar}>
                    <div className={styles.windowControls}>
                      <span className={`${styles.windowDot} ${styles.dotRed}`} />
                      <span className={`${styles.windowDot} ${styles.dotYellow}`} />
                      <span className={`${styles.windowDot} ${styles.dotGreen}`} />
                    </div>

                    <div className={styles.browserAddressBar}>
                      <Lock size={12} className={styles.lockIcon} />
                      <span className={styles.addressText}>
                        {activeProject.demoUrl || activeProject.videoUrl || 'quesper.in'}
                      </span>
                    </div>

                    {activeProject.demoUrl && activeProject.demoType === 'link' && (
                      <a
                        href={activeProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.openExternalIcon}
                        title="Open live app in new tab"
                        aria-label="Open live app in new tab"
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>

                  {/* Screenshot & Preview Stage */}
                  <div className={styles.screenshotStage}>
                    <img
                      key={currentStageImage}
                      src={currentStageImage}
                      alt={`${activeProject.title} Demo`}
                      className={styles.stageImage}
                    />

                    {/* Video Demo Button Overlay on desktop for Project 2 */}
                    {activeProject.demoType === 'video' && (
                      <button
                        type="button"
                        className={styles.playDemoOverlayBtn}
                        onClick={() => setVideoModalOpen(true)}
                      >
                        <Play size={18} fill="currentColor" />
                        Watch Video Demo
                      </button>
                    )}

                    {/* Floating Glassmorphic Info Banner */}
                    <div className={styles.stageOverlay}>
                      <div className={styles.stageMeta}>
                        <span className={styles.stageTimeline}>{activeProject.timeline}</span>
                        <h4 className={styles.stageTitle}>{activeProject.title}</h4>
                      </div>
                      {activeProject.demoType === 'video' ? (
                        <button
                          type="button"
                          onClick={() => setVideoModalOpen(true)}
                          className={`btn btn-primary ${styles.stageCta}`}
                        >
                          <Play size={13} fill="currentColor" />
                          Watch Video
                        </button>
                      ) : activeProject.demoType === 'link' ? (
                        <a
                          href={activeProject.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`btn btn-primary ${styles.stageCta}`}
                        >
                          <ExternalLink size={14} />
                          {activeProject.id === 'project-quesper-app' ? 'Launch App' : 'View Project'}
                        </a>
                      ) : null}
                    </div>
                  </div>

                  {/* App Screen Gallery Switcher Tabs (For Quesper App) */}
                  {activeProject.screens && (
                    <div className={styles.appScreenTabs}>
                      {activeProject.screens.map((screen, sIdx) => (
                        <button
                          key={screen.label}
                          type="button"
                          onClick={() => setActiveAppScreenIndex(sIdx)}
                          className={`${styles.appScreenTabBtn} ${
                            activeAppScreenIndex === sIdx ? styles.appScreenTabActive : ''
                          }`}
                        >
                          {screen.label}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Quick Project Switcher Stepper */}
                  <div className={styles.demoNavigator}>
                    <span className={styles.navLabel}>
                      <Layers size={13} /> Project Timeline:
                    </span>
                    <div className={styles.navTabs}>
                      {projects.map((proj, idx) => (
                        <button
                          key={proj.id}
                          type="button"
                          onClick={() => handleSelectProject(idx)}
                          className={`${styles.navTabBtn} ${
                            activeProjectIndex === idx ? styles.navTabActive : ''
                          }`}
                        >
                          <span className={styles.tabNum}>{idx + 1}</span>
                          <span className={styles.tabName}>{proj.shortName}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          VIDEO DEMO MODAL
          ===================================================== */}
      {videoModalOpen && (
        <div
          className={styles.videoModalBackdrop}
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className={styles.videoModalContainer}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.videoModalHeader}>
              <div className={styles.videoModalDots}>
                <span className={styles.dotRed} />
                <span className={styles.dotYellow} />
                <span className={styles.dotGreen} />
              </div>
              <span className={styles.videoModalTitle}>
                Quesper AI — Book Extractor &amp; Question Generator (Live Demo)
              </span>
              <button
                type="button"
                className={styles.videoModalClose}
                onClick={() => setVideoModalOpen(false)}
                aria-label="Close video"
              >
                <X size={18} />
              </button>
            </div>
            <div className={styles.videoPlayerWrapper}>
              <video
                src="/projects/extractor-demo.mp4"
                controls
                autoPlay
                playsInline
                className={styles.modalVideo}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
