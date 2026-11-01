'use client'

import { Mail, Send, MapPin } from 'lucide-react'
import styles from './Contact.module.css'

// SVG brand icons not in this lucide-react version
function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const socials = [
  {
    label: 'GitHub',
    handle: '@KavyaPratap',
    href: 'https://github.com/KavyaPratap',
    icon: <GithubIcon size={20} />,
    color: '#1A1917',
  },
  {
    label: 'LinkedIn',
    handle: 'Kavya Pratap Singh',
    href: 'https://linkedin.com/in/your-profile',
    icon: <LinkedinIcon size={20} />,
    color: '#0A66C2',
  },
  {
    label: 'Email',
    handle: 'kavyapratapsingh221@gmail.com',
    href: 'mailto:kavyapratapsingh221@gmail.com',
    icon: <Mail size={20} />,
    color: '#5B4EE8',
  },
]

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={`${styles.inner}`}>
          {/* Left: info */}
          <div className={`${styles.info} animate-fade-up`}>
            <div className="tag">
              <Mail size={12} />
              Contact
            </div>
            <div className="divider" style={{ marginTop: 16 }} />
            <h2 className="section-title" style={{ marginTop: 8 }}>
              Let&apos;s Work<br />Together
            </h2>
            <p className={styles.sub}>
              Open to internships, collaborations, and interesting projects.
              Feel free to reach out — I reply within 24 hours!
            </p>

            <div className={styles.locationBadge}>
              <MapPin size={15} />
              Noida, Uttar Pradesh, India
            </div>

            <div className={styles.socialCards}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialCard}
                >
                  <span className={styles.socialIcon} style={{ color: s.color, background: `${s.color}18` }}>
                    {s.icon}
                  </span>
                  <div>
                    <div className={styles.socialLabel}>{s.label}</div>
                    <div className={styles.socialHandle}>{s.handle}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className={`${styles.formWrap} animate-fade-up delay-200`}>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <h3 className={styles.formTitle}>Send a Message</h3>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="contact-name" className={styles.label}>Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your full name"
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-email" className={styles.label}>Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="your@email.com"
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-subject" className={styles.label}>Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="What is it about?"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-message" className={styles.label}>Message</label>
                <textarea
                  id="contact-message"
                  placeholder="Write your message here…"
                  className={`${styles.input} ${styles.textarea}`}
                  rows={5}
                  required
                />
              </div>

              <button id="contact-submit" type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                <Send size={15} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
