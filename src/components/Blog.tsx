'use client'

import { BookOpen, Clock, ArrowRight } from 'lucide-react'
import styles from './Blog.module.css'

const posts = [
  {
    title: 'How I Built My First Full-Stack App',
    excerpt: 'Placeholder — Write about a tech topic, tutorial, or project walkthrough here. Share what you learned and how you solved problems.',
    date: 'November 2026',
    readTime: '5 min read',
    tags: ['React', 'Node.js'],
    href: '#',
  },
  {
    title: 'Getting Started with Android Development in Kotlin',
    excerpt: 'Placeholder — Share your journey into Android, tips for beginners, or how a specific feature was implemented.',
    date: 'October 2026',
    readTime: '7 min read',
    tags: ['Android', 'Kotlin'],
    href: '#',
  },
  {
    title: 'DSA Tips for Engineering Students',
    excerpt: 'Placeholder — Write about your approach to DSA, favorite resources, or how you improved your problem-solving skills.',
    date: 'September 2026',
    readTime: '4 min read',
    tags: ['DSA', 'Competitive'],
    href: '#',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="section">
      <div className="container">
        <div className={`section-header animate-fade-up ${styles.header}`}>
          <div>
            <div className="tag">
              <BookOpen size={12} />
              Blog
            </div>
            <div className="divider" style={{ marginTop: 16 }} />
            <h2 className="section-title" style={{ marginTop: 8 }}>
              Thoughts & Writings
            </h2>
            <p className="section-sub" style={{ marginTop: 14 }}>
              Articles, tutorials, and things I&apos;ve been thinking about.
            </p>
          </div>
          <span className={styles.comingSoon}>Coming Soon</span>
        </div>

        <div className={`${styles.grid} animate-fade-up delay-200`}>
          {posts.map((post) => (
            <article key={post.title} className={`card ${styles.card}`}>
              <div className={styles.tags}>
                {post.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>

              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.excerpt}>{post.excerpt}</p>

              <div className={styles.footer}>
                <div className={styles.meta}>
                  <span className={styles.date}>{post.date}</span>
                  <span className={styles.sep}>·</span>
                  <span className={styles.readTime}>
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
                <a href={post.href} className={styles.readMore} aria-label="Read more">
                  Read More <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
