'use client'

import { Zap } from 'lucide-react'
import styles from './Skills.module.css'

const skillGroups = [
  {
    category: 'AI & Deep Learning',
    emoji: '🧠',
    skills: [
      { name: 'Vertex AI & Cloud AI', level: 85 },
      { name: 'Local LLMs (Code Synthesis)', level: 85 },
      { name: 'Deep Learning (CNN & ANN)', level: 80 },
      { name: 'Python & ML Pipelines', level: 85 },
    ],
  },
  {
    category: 'Cloud & Backend',
    emoji: '☁️',
    skills: [
      { name: 'Google Cloud Platform (GCP)', level: 85 },
      { name: 'Node.js', level: 75 },
      { name: 'REST APIs', level: 85 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    category: 'Frontend & Web',
    emoji: '🌐',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML/CSS & Tailwind', level: 90 },
    ],
  },
  {
    category: 'Mobile & Desktop',
    emoji: '📱',
    skills: [
      { name: 'Android (Kotlin)', level: 80 },
      { name: 'Jetpack Compose', level: 75 },
      { name: 'Tkinter & Desktop GUI', level: 85 },
      { name: 'Firebase & Room DB', level: 80 },
    ],
  },
]

const techIcons = [
  { name: 'Vertex AI',     color: '#4285F4', symbol: '✨' },
  { name: 'Local LLMs',    color: '#10B981', symbol: '⚡' },
  { name: 'Google Cloud',  color: '#4285F4', symbol: '☁️' },
  { name: 'Deep Learning', color: '#8B5CF6', symbol: '🧠' },
  { name: 'Python',        color: '#3776AB', symbol: '🐍' },
  { name: 'Android',       color: '#3DDC84', symbol: '🤖' },
  { name: 'Kotlin',        color: '#7F52FF', symbol: 'K' },
  { name: 'Next.js',       color: '#000000', symbol: 'N' },
  { name: 'React',         color: '#61DAFB', symbol: '⚛' },
  { name: 'Firebase',      color: '#FFCA28', symbol: '🔥' },
  { name: 'Git',           color: '#F05032', symbol: '⑂' },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Header */}
        <div className="section-header animate-fade-up">
          <div className="tag">
            <Zap size={12} />
            Tech Stack
          </div>
          <div className="divider" style={{ marginTop: 16 }} />
          <h2 className="section-title" style={{ marginTop: 8 }}>
            Skills & Technologies
          </h2>
          <p className="section-sub" style={{ marginTop: 14 }}>
            Tools and technologies I work with to build things.
          </p>
        </div>

        {/* Tech icon cloud */}
        <div className={`${styles.iconCloud} animate-fade-up delay-100`}>
          {techIcons.map((tech, i) => (
            <div
              key={tech.name}
              className={styles.techBadge}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className={styles.techSymbol}>{tech.symbol}</span>
              <span className={styles.techName}>{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Skill groups */}
        <div className={`${styles.groups} animate-fade-up delay-200`}>
          {skillGroups.map((group) => (
            <div key={group.category} className={`card ${styles.group}`}>
              <div className={styles.groupHeader}>
                <span className={styles.groupEmoji}>{group.emoji}</span>
                <h3 className={styles.groupTitle}>{group.category}</h3>
              </div>
              <div className={styles.skillList}>
                {group.skills.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillMeta}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPct}>{skill.level}%</span>
                    </div>
                    <div className={styles.bar}>
                      <div
                        className={styles.barFill}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
