'use client'

import { User, MapPin, Calendar, Globe, Smartphone, Download, ExternalLink } from 'lucide-react'
import styles from './About.module.css'

const highlights = [
  { icon: <User size={18} />,       label: 'Name',       value: 'Kavya Pratap Singh' },
  { icon: <MapPin size={18} />,     label: 'Location',   value: 'Noida, Uttar Pradesh' },
  { icon: <Calendar size={18} />,   label: 'Education',  value: 'B.Tech CSE (2024 — 2028)' },
  { icon: <Globe size={18} />,      label: 'Languages',  value: 'English, Hindi, German (Learning)' },
  { icon: <Smartphone size={18} />, label: 'Developer',  value: 'Google Play Console Account' },
]

const interests = [
  'Vertex AI & Google Cloud',
  'Deep Learning (CNN & ANN)',
  'Full Stack Web',
  'Android Apps',
  'Problem Solving',
]

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Photo */}
          <div className={`${styles.photoWrap} animate-fade-up`}>
            <div className={styles.photo}>
              <img
                src="/profile.jpg"
                alt="Kavya Pratap Singh"
                className={styles.photoImg}
              />
              <div className={styles.photoBadge}>
                <span>🎓</span>
                <span>B.Tech CSE</span>
              </div>
            </div>
            <div className={styles.photoAccent} aria-hidden />
          </div>

          {/* Content */}
          <div className={styles.content}>
            <div className="section-header animate-fade-up">
              <div className="tag">
                <User size={12} />
                About Me
              </div>
              <div className="divider" style={{ marginTop: 16 }} />
              <h2 className="section-title" style={{ marginTop: 8 }}>
                Crafting Intelligent<br />Digital Products
              </h2>
              <p className="section-sub" style={{ marginTop: 14 }}>
                I&apos;m a passionate engineering student who builds intelligent, scalable products — from Vertex AI pipelines and custom Deep Learning models (CNN &amp; ANN) to full-stack web and native Android applications.
              </p>
            </div>

            <p className={`${styles.body} animate-fade-up delay-200`}>
              Currently in my 5th semester at <strong>Noida Institute of Engineering
              and Technology (NIET)</strong>, I spend my time building side projects,
              learning new technologies, and contributing to the developer community.
              I believe great software is equal parts logic and creativity.
            </p>

            {/* Info grid */}
            <div className={`${styles.infoGrid} animate-fade-up delay-300`}>
              {highlights.map((item) => (
                <div key={item.label} className={styles.infoCard}>
                  <span className={styles.infoIcon}>{item.icon}</span>
                  <div>
                    <div className={styles.infoLabel}>{item.label}</div>
                    <div className={styles.infoValue}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Interests */}
            <div className={`${styles.interests} animate-fade-up delay-400`}>
              <span className={styles.interestsLabel}>Interests:</span>
              {interests.map((i) => (
                <span key={i} className={styles.interest}>{i}</span>
              ))}
            </div>

            {/* Resume Action */}
            <div className="animate-fade-up delay-500" style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href="/resume.pdf"
                download="Kavya_Pratap_Singh_Resume.pdf"
                className="btn btn-primary"
                aria-label="Download Resume (PDF)"
                title="Download Resume (PDF)"
              >
                <Download size={15} />
                Download Resume (PDF)
              </a>
              <a
                href="/resume.tex"
                download="kavya_pratap_singh_resume.tex"
                className="btn btn-outline"
                aria-label="Download Overleaf LaTeX Source (.tex)"
                title="Download Overleaf LaTeX Source (.tex)"
              >
                <Download size={15} />
                LaTeX (.tex)
              </a>
              <a
                href="https://github.com/KavyaPratap"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                aria-label="Visit GitHub Profile"
              >
                <ExternalLink size={15} />
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
