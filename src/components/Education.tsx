'use client'

import { GraduationCap } from 'lucide-react'
import styles from './Education.module.css'

const education = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    institute: 'Noida Institute of Engineering & Technology',
    short: 'NIET, Greater Noida',
    period: '2024 — 2028',
    current: true,
    semester: '5th Semester · Ongoing',
    grade: 'Current CGPA: 8.67 / 10',
    highlights: [
      'Core subjects: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks',
      'Vice President — Design Thinking Club (NIET)',
      'Specializing in Vertex AI, Deep Learning (CNN & ANN), and Full-Stack Architecture',
    ],
  },
  {
    degree: 'Class XII — Senior Secondary (Science)',
    institute: 'Senior Secondary School',
    short: 'CBSE',
    period: '2023 — 2024',
    current: false,
    semester: null,
    grade: 'Score: 85%',
    highlights: [
      'Stream: Physics, Chemistry, Mathematics (PCM) with Computer Science',
      'Strong academic foundation in analytical problem solving and mathematics',
    ],
  },
  {
    degree: 'Class X — Secondary School',
    institute: 'Secondary School',
    short: 'CBSE',
    period: '2021 — 2022',
    current: false,
    semester: null,
    grade: 'Score: 95%',
    highlights: [],
  },
]

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header animate-fade-up">
          <div className="tag">
            <GraduationCap size={12} />
            Education
          </div>
          <div className="divider" style={{ marginTop: 16 }} />
          <h2 className="section-title" style={{ marginTop: 8 }}>
            Academic Journey
          </h2>
        </div>

        <div className={`${styles.timeline} animate-fade-up delay-200`}>
          {education.map((edu, i) => (
            <div key={edu.degree} className={styles.item}>
              {/* Line */}
              <div className={styles.lineWrap}>
                <div className={`${styles.dot} ${edu.current ? styles.dotActive : ''}`}>
                  <GraduationCap size={14} />
                </div>
                {i < education.length - 1 && <div className={styles.line} />}
              </div>

              {/* Card */}
              <div className={`card ${styles.card} ${edu.current ? styles.cardActive : ''}`}>
                <div className={styles.cardHead}>
                  <div>
                    {edu.current && (
                      <span className={styles.currentBadge}>Currently Enrolled</span>
                    )}
                    <h3 className={styles.degree}>{edu.degree}</h3>
                    <p className={styles.institute}>{edu.institute}</p>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.period}>{edu.period}</span>
                    <span className={styles.grade}>{edu.grade}</span>
                    {edu.semester && <span className={styles.semester}>{edu.semester}</span>}
                  </div>
                </div>

                {edu.highlights && edu.highlights.length > 0 && (
                  <ul className={styles.highlights}>
                    {edu.highlights.map((h) => (
                      <li key={h} className={styles.highlight}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
