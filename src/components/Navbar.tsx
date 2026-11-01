'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Education',      href: '#education' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Achievements',   href: '#achievements' },
  { label: 'Contact',        href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [active,   setActive]     = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route click
  const handleNavClick = (href: string) => {
    setActive(href)
    setMenuOpen(false)
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#hero" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <span className={styles.logoBracket}>&lt;</span>
          KPS
          <span className={styles.logoBracket}>/&gt;</span>
        </a>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${active === link.href ? styles.navLinkActive : ''}`}
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="/resume.pdf"
          download="Kavya_Pratap_Singh_Resume.pdf"
          className={`btn btn-primary ${styles.resumeBtn}`}
          aria-label="Download Resume (PDF)"
          title="Download Resume (PDF)"
        >
          <Download size={15} />
          Download Resume
        </a>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.mobileLink}
            onClick={() => handleNavClick(link.href)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="/resume.pdf"
          download="Kavya_Pratap_Singh_Resume.pdf"
          className={`btn btn-primary ${styles.mobileResume}`}
          onClick={() => setMenuOpen(false)}
        >
          <Download size={15} />
          Download Resume (PDF)
        </a>
      </div>
    </header>
  )
}
