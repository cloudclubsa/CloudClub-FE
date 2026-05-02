import { useState, useEffect } from 'react'
import newLogo from '../assets/NewLogoClub.png'
import './Header.css'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Eventos', href: '#eventos' },
  {
    label: 'Fotos',
    dropdown: [
      { label: 'AWS #2', href: 'https://photos.app.goo.gl/3UZasMbJAoYHwGMDA' },
      { label: 'AWS #1', href: 'https://photos.app.goo.gl/PVjKnB2p2dxw3dGx9' },
    ],
  },
  {
    label: 'Certificados',
    dropdown: [
      { label: 'Student Club #1', href: 'https://drive.google.com/drive/folders/1VoI089mon6JDo6cI0BKNT30Vh2RVYAgw?usp=drive_link' },
      { label: 'Student Club #2', href: 'https://drive.google.com/drive/folders/14SOI66NCVs5CLUh0bKmQuQwRz75ywhjs?usp=drive_link' },
    ],
  },
  { label: 'Feedback', href: 'https://community.buildon.aws/survey/TK9G0ZHP?p=0' },
  { label: 'Organizadores', href: '#organizadores' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#inicio" className="logo" aria-label="Início">
          <img src={newLogo} alt="AWS Student Club GO" />
          <span className="logo-text">Student Club <span className="logo-go">GO</span></span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`menu-navbar ${menuOpen ? 'open' : ''}`}>
          <ul>
            {navLinks.map((link, i) =>
              link.dropdown ? (
                <li key={i} className="nav-dropdown">
                  <button
                    className={`nav-dropbtn ${activeDropdown === i ? 'active' : ''}`}
                    onClick={() => toggleDropdown(i)}
                  >
                    {link.label}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <div className={`nav-dropdown-content ${activeDropdown === i ? 'show' : ''}`}>
                    {link.dropdown.map((item, j) => (
                      <a key={j} href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.label}
                      </a>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={i}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}
