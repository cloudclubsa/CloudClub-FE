import awsWhiteLogo from '../assets/AWS_WHT.png'
import newLogo from '../assets/NewLogoClub.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={newLogo} alt="AWS Student Club GO" className="footer-brand-logo" />
          <p className="footer-tagline">
            Comunidade de estudantes apaixonados por cloud.
          </p>
        </div>

        <div className="footer-links">
          <h4>Navegação</h4>
          <a href="#inicio">Início</a>
          <a href="#eventos">Eventos</a>
          <a href="#organizadores">Organizadores</a>
          <a href="#faq">FAQ</a>
        </div>

        <div className="footer-links">
          <h4>Comunidade</h4>
          <a href="https://discord.gg/w7AxM4AbhE" target="_blank" rel="noopener noreferrer">Discord</a>
          <a href="https://chat.whatsapp.com/DgJZowP8HH0LmxLgYQT0Pk?mode=gi_t" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="https://www.instagram.com/cloudclub.go" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/company/110336050" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>

        <div className="footer-aws">
          <img src={awsWhiteLogo} alt="AWS" className="footer-aws-logo" />
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2025 AWS Student Club GO</p>
          <p>Desenvolvido por Ricardo Neres & Pedro Cardoso</p>
        </div>
      </div>
    </footer>
  )
}
