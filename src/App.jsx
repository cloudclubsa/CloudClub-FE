import { useEffect, useState } from 'react'
import cloudClubArtwork from './assets/NewLogoClub.png'
import awsLogo from './assets/AWS_BLK.png'
import aluraLogo from './assets/Alura.webp'
import cloudClubLogo from './assets/CloudClub_Purple.png'
import fiapLogo from './assets/Fiap-logo-novo-removebg-preview.png'
import rocketseatLogo from './assets/RocketSeat.png'
import ricardoImg from './assets/Ricardo.png'
import mariaImg from './assets/Maria.jpg'
import thaysaImg from './assets/Thaysa.jpg'
import lucasImg from './assets/Lucas.jpg'
import allinnyImg from './assets/Allinny.jpg'
import marcoImg from './assets/Marco.jpg'
import janineImg from './assets/janine.jpg'
import joaoImg from './assets/joao.jpg'
import juliaImg from './assets/Julia.jpeg'
import './App.css'

const meetupUrl = 'https://www.meetup.com/aws-cloud-club-at-faculdade-sul-americana/'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/110336050' },
  { label: 'Instagram', href: 'https://www.instagram.com/cloudclub.go' },
  { label: 'WhatsApp', href: 'https://chat.whatsapp.com/DgJZowP8HH0LmxLgYQT0Pk?mode=gi_t' },
  { label: 'Discord', href: 'https://discord.gg/w7AxM4AbhE' },
]

const events = [
  {
    id: 2,
    edition: 'EDIÇÃO_02',
    day: '04',
    month: 'ABR',
    title: 'Conhecendo AWS #2',
    location: 'Hub Goiás — Auditório Principal',
    time: '19h às 21h45 · Presencial + transmissão',
    price: 'Evento com vagas limitadas',
    link: 'https://www.sympla.com.br/evento/conhecendo-aws-2-aws-cloud-club/3362325',
    description: 'Uma noite de aprendizado sobre serviços AWS, carreira em nuvem, networking e oportunidades para quem quer construir junto com a comunidade.',
    accent: 'mint',
  },
  {
    id: 1,
    edition: 'EDIÇÃO_01',
    day: '19',
    month: 'JAN',
    title: 'Conhecendo AWS Cloud Club #1',
    location: 'Hub Goiás — Miniauditório (2º andar)',
    time: '19h30 às 22h · Presencial',
    price: 'O encontro que iniciou a nossa história',
    link: 'https://www.sympla.com.br/evento/aws-cloud-club-sa-conhecendo-aws-cloud-club-1/3276397?share_id=copiarlink',
    description: 'Nosso primeiro encontro: introdução ao mundo AWS, palestras, networking e muita troca de conhecimento entre estudantes e profissionais.',
    accent: 'yellow',
  },
]

const journey = [
  {
    number: '01',
    eyebrow: 'COMECE AQUI',
    title: 'Descubra a nuvem.',
    text: 'Conteúdo direto ao ponto para entender AWS, cloud computing e as possibilidades de carreira.',
    symbol: '☁',
    color: 'purple',
  },
  {
    number: '02',
    eyebrow: 'MÃO NA MASSA',
    title: 'Construa projetos.',
    text: 'Workshops, demos e desafios para transformar teoria em experiências que cabem no portfólio.',
    symbol: '</>',
    color: 'yellow',
  },
  {
    number: '03',
    eyebrow: 'GENTE DE VERDADE',
    title: 'Crie conexões.',
    text: 'Conheça estudantes, profissionais e empresas que também acreditam no poder da comunidade.',
    symbol: '↗',
    color: 'mint',
  },
  {
    number: '04',
    eyebrow: 'PRÓXIMO NÍVEL',
    title: 'Compartilhe e lidere.',
    text: 'Ensine o que aprendeu, participe da organização e ajude a nuvem goiana a crescer.',
    symbol: '★',
    color: 'pink',
  },
]

const team = [
  { name: 'Ricardo Neres', role: 'Capitão / Líder', work: 'CEO e DevOps @ Ya3', img: ricardoImg, linkedin: 'https://www.linkedin.com/in/9neres/', captain: true },
  { name: 'Maria Paula', role: 'Capitã / Líder', work: 'Cybersegurança @ AIC Soluções', img: mariaImg, linkedin: 'https://www.linkedin.com/in/mariapaulacr', captain: true },
  { name: 'Pedro Cardoso', role: 'Desenvolvimento', work: 'Engenheiro de Software @ Decisão Sistemas', img: 'https://github.com/Printf-PedroCardoso.png', linkedin: 'https://www.linkedin.com/in/printf-pedro-c/' },
  { name: 'Jéssica Canuto', role: 'Marketing', work: 'Analista de Suporte @ JM SISTEMAS,BPO & AUDITORIAS', img: 'https://avatars.githubusercontent.com/u/108158611?v=4', linkedin: 'https://www.linkedin.com/in/j%C3%A9ssica-canuto-637a7a263/' },
  { name: 'Lucas Téofilo', role: 'Vice-líder', work: 'Desenvolvedor @ IndiceMor', img: lucasImg, linkedin: 'https://www.linkedin.com/in/lucas-teófilo-monteiro-finotti-941bb0197' },
  { name: 'Allinny', role: 'Planejamento', work: 'Engenheira de Software', img: allinnyImg, linkedin: 'https://www.linkedin.com/in/alinny-gomes-damascena-070871332' },
  { name: 'Marco', role: 'Áudio e vídeo', work: 'Engenheiro de Software', img: marcoImg, linkedin: 'https://www.linkedin.com/in/marco-antonio-oliveira-cavaco-9b3b24325' },
  { name: 'Janine', role: 'Vice-líder', work: 'Engenheira de Software', img: janineImg, linkedin: 'https://www.linkedin.com/in/janine-ferreira-leal-b95339265' },
  { name: 'João Silva', role: 'Áudio e vídeo', work: 'Software Engineer', img: joaoImg, linkedin: 'https://www.linkedin.com/in/joaoplssilva' },
  { name: 'Júlia Almeida', role: 'Design', work: 'Engenheira de Software', img: juliaImg },
]

const faqs = [
  {
    question: 'O que é o AWS Cloud Club GO?',
    answer: 'É uma comunidade apoiada pela AWS, feita para estudantes e profissionais que querem aprender e se desenvolver em cloud computing. O “GO” representa Goiás, mas todo mundo é bem-vindo.',
  },
  {
    question: 'Como participo dos eventos?',
    answer: 'As inscrições são divulgadas no Meetup e nas nossas redes sociais. Acompanhe a agenda para garantir sua vaga assim que um novo encontro for anunciado.',
  },
  {
    question: 'Preciso já saber AWS?',
    answer: 'Não. A comunidade foi criada justamente para aproximar quem está começando de quem já trabalha com nuvem. Curiosidade e vontade de aprender são o melhor ponto de partida.',
  },
  {
    question: 'Os eventos são pagos?',
    answer: 'Somos uma comunidade sem fins lucrativos. Algumas atividades são gratuitas e outras podem ter um valor simbólico para cobrir infraestrutura e coffee break.',
  },
  {
    question: 'Minha empresa pode apoiar o clube?',
    answer: 'Sim. Envie uma proposta para cloudclubs.sa@gmail.com e vamos construir juntos uma parceria que gere impacto real para a comunidade de tecnologia local.',
  },
]

const sponsorLogos = [
  { src: awsLogo, alt: 'AWS' },
  { src: aluraLogo, alt: 'Alura' },
  { src: cloudClubLogo, alt: 'AWS Cloud Clubs', className: 'sponsor-logo--club' },
  { src: fiapLogo, alt: 'FIAP' },
  { src: rocketseatLogo, alt: 'Rocketseat' },
]

function ExternalLink({ children, ...props }) {
  return <a target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
}

function Marquee({ items, className = '' }) {
  return (
    <div className={`marquee ${className}`} aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((group) => (
          <div className="marquee-group" key={group}>
            {items.map((item, index) => <span key={`${group}-${index}`}>{item}</span>)}
          </div>
        ))}
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeEvent, setActiveEvent] = useState(null)
  const [openFaq, setOpenFaq] = useState(0)

  useEffect(() => {
    if (!activeEvent) return undefined
    const onKeyDown = (event) => event.key === 'Escape' && setActiveEvent(null)
    document.body.classList.add('modal-open')
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeEvent])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <Marquee
        className="announcement-bar"
        items={['AWS CLOUD CLUB GO', 'PRÓXIMOS EVENTOS NO MEETUP', 'APRENDA • CONECTE • CONSTRUA', 'COMUNIDADE EM GOIÁS']}
      />

      <header className="site-header">
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? 'site-nav site-nav--open' : 'site-nav'} aria-label="Navegação principal">
          <a href="#jornada" onClick={closeMenu}>Sobre</a>
          <a href="#eventos" onClick={closeMenu}>Eventos</a>
          <a href="#time" onClick={closeMenu}>Time</a>
          <a href="#certificados" onClick={closeMenu}>Certificados</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
          <ExternalLink className="nav-cta" href={meetupUrl}>ENTRAR NO CLUB ↗</ExternalLink>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero dotted-bg">
          <div className="hero-copy">
            <div className="hero-badges">
              <span className="label label--yellow">📍 GOIÁS + ONLINE</span>
              <span className="label label--white">AWS COMMUNITY</span>
            </div>

            <h1 className="hero-title">
              <span>AWS</span>
              <span>CLOUD CLUB</span>
              <span className="hero-title-accent">GO.</span>
            </h1>

            <div className="hero-actions">
              <ExternalLink className="button button--primary" href={meetupUrl}>VER PRÓXIMOS EVENTOS <span>→</span></ExternalLink>
              <a className="button button--secondary" href="#jornada">CONHECER O CLUB <span>↓</span></a>
            </div>

            <div className="social-row" aria-label="Redes sociais">
              {socialLinks.map((social) => (
                <ExternalLink key={social.label} href={social.href}>{social.label} ↗</ExternalLink>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <img className="hero-community-logo" src={cloudClubArtwork} alt="AWS Student Club GO" />
          </div>
        </section>

        <section className="partners" aria-label="Parceiros e apoiadores">
          <div className="partners-title">APOIO & ECOSSISTEMA</div>
          <div className="sponsor-marquee">
            <div className="sponsor-track">
              {[0, 1].map((group) => (
                <div className="sponsor-group" key={group} aria-hidden={group === 1}>
                  {sponsorLogos.map((logo) => (
                    <img key={`${group}-${logo.alt}`} src={logo.src} alt={group === 0 ? logo.alt : ''} className={logo.className || ''} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="jornada" className="journey dotted-bg section-block">
          <div className="section-kicker">A JORNADA DE QUEM FAZ</div>
          <h2 className="display-title">O QUE ACONTECE<br />AQUI.</h2>
          <p className="section-lead section-lead--yellow">VOCÊ NÃO PRECISA SABER TUDO. SÓ PRECISA COMEÇAR.</p>

          <div className="journey-grid">
            <div className="journey-line" aria-hidden="true"><span>◆</span></div>
            {journey.map((step, index) => (
              <article className={`journey-card journey-card--${step.color} ${index % 2 ? 'journey-card--right' : ''}`} key={step.number}>
                <div className="journey-card-meta">
                  <span>{step.eyebrow}</span>
                  <b>ETAPA_{step.number}</b>
                </div>
                <div className="journey-symbol" aria-hidden="true">{step.symbol}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <Marquee className="section-marquee section-marquee--purple" items={['APRENDA NA PRÁTICA', 'CLOUD SEM ENROLAÇÃO', 'GENTE QUE COMPARTILHA', 'PROJETOS QUE SAEM DO PAPEL']} />

        <section id="eventos" className="events section-block">
          <div className="events-heading">
            <div>
              <span className="section-kicker section-kicker--light">AGENDA_ CLOUD CLUB</span>
              <h2 className="display-title display-title--light">EVENTOS NÃO<br />SÃO PLATEIA.</h2>
            </div>
            <p>São pontos de encontro para experimentar, perguntar, errar rápido e sair com novas conexões.</p>
          </div>

          <div className="events-list">
            {events.map((event) => (
              <article className={`event-card event-card--${event.accent}`} key={event.id}>
                <div className="event-date"><strong>{event.day}</strong><span>{event.month}</span></div>
                <div className="event-main">
                  <span className="event-edition">{event.edition}</span>
                  <h3>{event.title}</h3>
                  <div className="event-facts">
                    <span>📍 {event.location}</span>
                    <span>◷ {event.time}</span>
                    <span>✦ {event.price}</span>
                  </div>
                </div>
                <div className="event-actions">
                  <button type="button" onClick={() => setActiveEvent(event)}>DETALHES</button>
                  <ExternalLink href={event.link}>PÁGINA DO EVENTO ↗</ExternalLink>
                </div>
              </article>
            ))}
          </div>

          <div className="events-bottom">
            <p>O próximo encontro pode começar com você.</p>
            <ExternalLink className="button button--yellow" href={meetupUrl}>ACOMPANHAR A AGENDA →</ExternalLink>
          </div>
        </section>

        <section className="manifesto section-block dotted-bg">
          <span className="section-kicker">ESCOLHA SEU CAMINHO</span>
          <h2 className="display-title">NÓS SOMOS<br /><em>A NUVEM.</em></h2>
          <p className="manifesto-intro">Uma comunidade funciona quando todo mundo encontra espaço para aprender e algo para compartilhar.</p>

          <div className="manifesto-grid">
            <article className="manifesto-card manifesto-card--purple">
              <span>01</span><b>100% CURIOSIDADE</b><h3>Aprender</h3><p>Para quem está dando os primeiros passos em AWS e quer um caminho possível.</p>
            </article>
            <article className="manifesto-card manifesto-card--yellow">
              <span>02</span><b>100% PRÁTICA</b><h3>Construir</h3><p>Para quem aprende melhor abrindo o console, testando serviços e criando projetos.</p>
            </article>
            <article className="manifesto-card manifesto-card--mint">
              <span>03</span><b>100% COMUNIDADE</b><h3>Conectar</h3><p>Para quem acredita que tecnologia cresce mais rápido quando o conhecimento circula.</p>
            </article>
          </div>
        </section>

        <Marquee className="section-marquee section-marquee--black" items={['QUEM FAZ ACONTECER', 'DIRETO DA COMUNIDADE', 'TIME GO', 'PESSOAS ANTES DE SERVIÇOS']} />

        <section id="time" className="team section-block">
          <div className="team-heading">
            <div>
              <span className="section-kicker">POR TRÁS DO CLUB</span>
              <h2 className="display-title">TIME<br />GO.</h2>
            </div>
            <p>Gente que organiza, comunica, cria, grava, conecta parceiros e mantém a comunidade no ar.</p>
          </div>

          <div className="team-track" aria-label="Integrantes do time GO">
            {team.map((member, index) => (
              <article className="team-window" key={member.name}>
                <div className="window-bar">
                  <span>{member.name.toUpperCase().replaceAll(' ', '_')}_V1.EXE</span>
                  <b>− &nbsp; ×</b>
                </div>
                <div className="team-photo"><img src={member.img} alt={member.name} loading="lazy" /></div>
                <div className="team-content">
                  <span className="sys-sync">&gt; SYS_SYNC_{String(index + 1).padStart(2, '0')}</span>
                  {member.captain && <span className="captain-badge">★ CAPITANIA</span>}
                  <h3>{member.name}</h3>
                  <strong>{member.role}</strong>
                  <p>{member.work}</p>
                  {member.linkedin ? (
                    <ExternalLink href={member.linkedin}>LINKEDIN ↗</ExternalLink>
                  ) : (
                    <span className="profile-link profile-link--muted">PERFIL EM BREVE</span>
                  )}
                </div>
              </article>
            ))}
          </div>
          <p className="drag-hint">← ARRASTE PARA CONHECER TODO O TIME →</p>
        </section>

        <section id="certificados" className="community-grid">
          <div className="certificate-panel">
            <span className="section-kicker section-kicker--light">SEU HISTÓRICO NA NUVEM</span>
            <h2>Certificados<br />dos encontros.</h2>
            <p>Participou de uma edição? Encontre e baixe o seu certificado.</p>
            <div className="certificate-links">
              <ExternalLink href="https://drive.google.com/drive/folders/1VoI089mon6JDo6cI0BKNT30Vh2RVYAgw?usp=drive_link">EDIÇÃO_01 <span>↗</span></ExternalLink>
              <ExternalLink href="https://drive.google.com/drive/folders/14SOI66NCVs5CLUh0bKmQuQwRz75ywhjs?usp=drive_link">EDIÇÃO_02 <span>↗</span></ExternalLink>
            </div>
          </div>
          <div className="community-panel dotted-bg">
            <span className="community-emoji" aria-hidden="true">☁</span>
            <span className="section-kicker">COMUNIDADE EXCLUSIVA</span>
            <h2>Entre para<br />o grupo.</h2>
            <p>Receba avisos, oportunidades e converse com quem também está construindo na nuvem.</p>
            <ExternalLink className="button button--white" href="https://chat.whatsapp.com/DgJZowP8HH0LmxLgYQT0Pk?mode=gi_t">ENTRAR NO WHATSAPP →</ExternalLink>
          </div>
        </section>

        <section id="faq" className="faq section-block dotted-bg">
          <div className="faq-heading">
            <span className="section-kicker">SEM LETRAS MIÚDAS</span>
            <h2 className="display-title">PERGUNTAS<br /><em>DIFÍCEIS.</em></h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <article className={isOpen ? 'faq-item faq-item--open' : 'faq-item'} key={faq.question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    <span>{String(index + 1).padStart(2, '0')}.</span>
                    <strong>{faq.question}</strong>
                    <b aria-hidden="true">{isOpen ? '−' : '+'}</b>
                  </button>
                  <div id={`faq-answer-${index}`} className="faq-answer" aria-hidden={!isOpen}>
                    <div className="faq-answer-inner">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="final-cta">
          <div>
            <span className="section-kicker">PRÓXIMO PASSO_</span>
            <h2>A NUVEM É GRANDE.<br />COMECE EM COMUNIDADE.</h2>
          </div>
          <ExternalLink className="button button--black" href={meetupUrl}>QUERO PARTICIPAR ↗</ExternalLink>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand-block">
          <span className="brand-mark brand-mark--footer" aria-hidden="true">☁</span>
          <h2>AWS CLOUD<br />CLUB GO.</h2>
          <p>APRENDA. CONECTE. CONSTRUA.</p>
        </div>
        <div className="footer-column">
          <b>NAVEGAÇÃO</b>
          <a href="#inicio">Início</a><a href="#eventos">Eventos</a><a href="#time">Time GO</a><a href="#faq">FAQ</a>
        </div>
        <div className="footer-column">
          <b>COMUNIDADE</b>
          {socialLinks.map((social) => <ExternalLink key={social.label} href={social.href}>{social.label} ↗</ExternalLink>)}
        </div>
        <div className="footer-column footer-column--contact">
          <b>CONTATO</b>
          <a href="mailto:cloudclubs.sa@gmail.com">cloudclubs.sa@gmail.com</a>
          <small>Goiás, Brasil<br />Online + presencial</small>
        </div>
        <div className="footer-bottom">
          <span>RICARDO NERES & PEDRO CARDOSO</span>
        </div>
      </footer>

      {activeEvent && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setActiveEvent(null)}>
          <div className="event-modal" role="dialog" aria-modal="true" aria-labelledby="event-modal-title" onMouseDown={(event) => event.stopPropagation()}>
            <div className="window-bar">
              <span>EVENT_DETAILS_{activeEvent.id}.EXE</span>
              <button type="button" onClick={() => setActiveEvent(null)} aria-label="Fechar detalhes">×</button>
            </div>
            <div className="event-modal-body">
              <span className="event-edition">{activeEvent.edition}</span>
              <h2 id="event-modal-title">{activeEvent.title}</h2>
              <p>{activeEvent.description}</p>
              <ul>
                <li><b>LOCAL</b><span>{activeEvent.location}</span></li>
                <li><b>HORÁRIO</b><span>{activeEvent.time}</span></li>
                <li><b>ACESSO</b><span>{activeEvent.price}</span></li>
              </ul>
              <ExternalLink className="button button--primary" href={activeEvent.link}>ABRIR PÁGINA DO EVENTO ↗</ExternalLink>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
