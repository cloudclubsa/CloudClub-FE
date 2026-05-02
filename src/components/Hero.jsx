import newLogo from '../assets/NewLogoClub.png'
import programIcon from '../assets/Program Icon/PNG/AWS Student Builder Group_RGB_Program Icon_Purple.png'
import meetupIcon from '../assets/meetup.png'
import linkedinIcon from '../assets/linkedin.png'
import instagramIcon from '../assets/Instagram.webp'
import whatsappIcon from '../assets/Whatsapp.webp'
import discordIcon from '../assets/discord.png'
import boltIcon from '../assets/Icons/PNG/AWS Student Builder Group_RGB_Icons_Bolt_Amber.png'
import teamsIcon from '../assets/Icons/PNG/AWS Student Builder Group_RGB_Icons_Teams_Mint.png'
import trophyIcon from '../assets/Icons/PNG/AWS Student Builder Group_RGB_Icons_Trophy_Magenta.png'
import './Hero.css'

const words = ['Estude AWS', 'Conecte-se', 'Construa projetos', 'Lidere comunidade']

const socialLinks = [
  { icon: linkedinIcon, alt: 'LinkedIn', href: 'https://www.linkedin.com/company/110336050' },
  { icon: instagramIcon, alt: 'Instagram', href: 'https://www.instagram.com/cloudclub.go' },
  { icon: whatsappIcon, alt: 'WhatsApp', href: 'https://chat.whatsapp.com/DgJZowP8HH0LmxLgYQT0Pk?mode=gi_t' },
  { icon: discordIcon, alt: 'Discord', href: 'https://discord.gg/w7AxM4AbhE' },
]

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      {/* Animated gradient orbs */}
      <div className="hero-orb hero-orb--1"></div>
      <div className="hero-orb hero-orb--2"></div>
      <div className="hero-orb hero-orb--3"></div>

      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge">
            <img src={programIcon} alt="" className="hero-badge-icon" />
            <span>Comunidade oficial AWS</span>
          </div>

          <h1 className="hero-title">
            AWS Student Club <span className="hero-go">GO</span>
          </h1>

          <div className="hero-words">
            <p className="hero-greeting">Bem-vindo ao Club!</p>
            <div className="words-carousel">
              {words.map((word, i) => (
                <span key={i} className="word" style={{ animationDelay: `${i * 2.5}s` }}>
                  {word}
                </span>
              ))}
            </div>
          </div>

          <p className="hero-subtitle">
            Junte-se à nossa comunidade de estudantes apaixonados por cloud.
            <br />
            Aprenda, conecte-se e cresça com conteúdos e eventos AWS.
          </p>

          <div className="hero-actions">
            <a
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.meetup.com/aws-cloud-club-at-faculdade-sul-americana/?utm_medium=referral&utm_campaign=groupHome&utm_source=twitter&utm_version=v2&member_id=457819122"
            >
              <img src={meetupIcon} alt="" className="btn-icon" />
              <span>Ver próximos eventos</span>
            </a>
          </div>

          <div className="social-links">
            {socialLinks.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="social-link" aria-label={s.alt}>
                <img src={s.icon} alt={s.alt} />
              </a>
            ))}
          </div>
        </div>

        <aside className="hero-aside">
          <div className="hero-logo-wrapper">
            <img src={newLogo} alt="AWS Student Club GO Logo" className="hero-logo" />
            {/* Floating decorative icons */}
            <img src={boltIcon} alt="" className="hero-float hero-float--bolt" />
            <img src={teamsIcon} alt="" className="hero-float hero-float--teams" />
            <img src={trophyIcon} alt="" className="hero-float hero-float--trophy" />
          </div>
        </aside>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}
