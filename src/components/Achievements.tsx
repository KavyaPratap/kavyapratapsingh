'use client'

import { Trophy, Award, Star } from 'lucide-react'
import styles from './Achievements.module.css'

const achievements = [
  {
    title: '2nd Position — Calculus of Innovation',
    subtitle: 'Hackathon · Innovation & Problem Solving',
    description:
      'Secured 2nd position at the Calculus of Innovation hackathon for architecting and pitching an impactful, cutting-edge technology solution.',
    icon: <Trophy size={22} />,
    type: 'hackathon',
  },
  {
    title: 'NPTEL Certifications',
    subtitle: 'NPTEL · IIT / Ministry of Education',
    description:
      'Completed rigorous certified technical coursework and advanced problem solving through prestigious NPTEL academic programs.',
    icon: <Award size={22} />,
    type: 'cert',
  },
  {
    title: 'Vice President — Design Thinking Club',
    subtitle: 'College Club / Society · NIET · Ongoing',
    description:
      'Leading student innovation workshops, human-centered design bootcamps, and creative hackathons as Vice President of the Design Thinking Club.',
    icon: <Star size={22} />,
    type: 'other',
  },
]

const typeColor: Record<string, string> = {
  hackathon: '#5B4EE8',
  cert: '#7C3AED',
  other: '#10B981',
}

export default function Achievements() {
  return (
    <section id="achievements" className={`section ${styles.achievements}`}>
      <div className="container">
        <div className="section-header animate-fade-up">
          <div className="tag">
            <Trophy size={12} />
            Achievements
          </div>
          <div className="divider" style={{ marginTop: 16 }} />
          <h2 className="section-title" style={{ marginTop: 8 }}>
            Achievements &amp; Leadership
          </h2>
          <p className="section-sub" style={{ marginTop: 14 }}>
            Recognitions, certifications, and leadership roles.
          </p>
        </div>

        <div className={`${styles.grid} animate-fade-up delay-200`}>
          {achievements.map((a) => (
            <div key={a.title} className={`card ${styles.card}`}>
              <div
                className={styles.iconWrap}
                style={{ background: `${typeColor[a.type]}18`, color: typeColor[a.type] }}
              >
                {a.icon}
              </div>
              <h3 className={styles.title}>{a.title}</h3>
              <p className={styles.subtitle}>{a.subtitle}</p>
              <p className={styles.desc}>{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
