'use client'

import { Briefcase, MapPin, Calendar } from 'lucide-react'
import styles from './Experience.module.css'

const experiences = [
  {
    role: 'Full-Stack & AI Systems Developer',
    company: 'Proprietary EdTech & AI Platforms',
    location: 'Noida / Remote',
    period: '2024 — Present',
    type: 'Software Development',
    description:
      'Privately architected and built intelligent desktop builder tools (2024) and high-throughput AI document vision pipelines (Quesper AI, July 2026) that extracted 20,000+ questions with automated diagram cropping and LaTeX formula corrections.',
    highlights: [
      'Developed multimodal vision extractor (Gemini 3.7 & 3.5 Flash) extracting 20,000+ questions with 300 DPI rendering',
      'Engineered responsive web interfaces and secure backend API services with real-time sync',
      'Tech stack: Vertex AI, Google Cloud (ADC), Python, Deep Learning (CNN/ANN), Next.js',
    ],
  },
  {
    role: 'Android Developer',
    company: 'Quesper (Mobile Platform)',
    location: 'Remote',
    period: 'Nov 2025 — Present',
    type: 'Mobile Engineering',
    description:
      'Privately built native Android application using Kotlin and Jetpack Compose (started Nov 2025). Designed offline-first architecture with Room Database and Firebase cloud persistence for CBSE/NCERT educators.',
    highlights: [
      'Designed intuitive tap-to-add exam generation UI reducing test assembly time by 90%',
      'Architected offline-first local cache using Room Database with automatic background sync',
      'Tech stack: Kotlin, Jetpack Compose, Room DB, Firebase, MVVM Architecture',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <div className="section-header animate-fade-up">
          <div className="tag">
            <Briefcase size={12} />
            Experience
          </div>
          <div className="divider" style={{ marginTop: 16 }} />
          <h2 className="section-title" style={{ marginTop: 8 }}>
            Work Experience
          </h2>
          <p className="section-sub" style={{ marginTop: 14 }}>
            Professional experience I&apos;ve gained so far.
          </p>
        </div>

        <div className={`${styles.list} animate-fade-up delay-200`}>
          {experiences.map((exp, i) => (
            <div
              key={exp.role + i}
              className={`card ${styles.card}`}
            >
              <div className={styles.cardLeft}>
                <div className={styles.roleIcon}>
                  <Briefcase size={20} />
                </div>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardHead}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>{exp.company}</p>
                  </div>
                  <div className={styles.metaRight}>
                    <span className={styles.typeBadge}>{exp.type}</span>
                    <span className={styles.period}>
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className={styles.location}>
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className={styles.desc}>{exp.description}</p>

                <ul className={styles.highlights}>
                  {exp.highlights.map((h) => (
                    <li key={h} className={styles.highlight}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
