import ricardoImg from '../assets/Ricardo.png'
import mariaImg from '../assets/Maria.jpg'
import thaysaImg from '../assets/Thaysa.jpg'
import lucasImg from '../assets/Lucas.jpg'
import allinnyImg from '../assets/Allinny.jpg'
import marcoImg from '../assets/Marco.jpg'
import janineImg from '../assets/janine.jpg'
import joaoImg from '../assets/joao.jpg'
import juliaImg from '../assets/Julia.jpeg'
import './Team.css'

const linkedInIcon = 'https://static.licdn.com/aero-v1/sc/h/akt4ae504epesldzj74dzred8'

const team = [
  {
    name: 'Ricardo Neres',
    roleClub: 'Capitão / Líder',
    rolePro: 'Desenvolvedor @ AUVP',
    img: ricardoImg,
    linkedin: 'https://www.linkedin.com/in/9neres/',
    linkedinLabel: '9Neres',
    isCaptain: true,
  },
  {
    name: 'Maria Clara',
    roleClub: 'Capitã / Líder',
    rolePro: 'Supervisora de TI @ VIASOFT',
    img: mariaImg,
    linkedin: 'https://www.linkedin.com/in/mariapaulacr',
    linkedinLabel: 'Maria Clara',
    isCaptain: true,
  },
  {
    name: 'Pedro Cardoso da Mata',
    roleClub: 'Desenvolvedor',
    rolePro: 'Software Engineer @Decisão Sistemas',
    img: 'https://github.com/Printf-PedroCardoso.png',
    linkedin: 'https://www.linkedin.com/in/printf-pedro-c/',
    linkedinLabel: 'Printf-Pedro-C',
  },
  {
    name: 'Jéssica Beatriz Canuto',
    roleClub: 'Marketing',
    rolePro: 'Estagiária em infraestrutura @Sanax',
    img: 'https://avatars.githubusercontent.com/u/108158611?v=4',
    linkedin: 'https://www.linkedin.com/in/j%C3%A9ssica-canuto-637a7a263/',
    linkedinLabel: 'Jéssica Canuto',
  },
  {
    name: 'Thaysa Larissa',
    roleClub: 'Captação de recursos',
    rolePro: 'Supervisora de TI @ VIASOFT',
    img: thaysaImg,
    linkedin: '#',
    linkedinLabel: 'Thaysa Estanislau',
  },
  {
    name: 'Lucas Téofilo',
    roleClub: 'Vice Líder',
    rolePro: 'Estagiário CyberSegurança @Aic Soluções',
    img: lucasImg,
    linkedin: 'https://www.linkedin.com/in/lucas-teófilo-monteiro-finotti-941bb0197',
    linkedinLabel: 'Lucas Téofilo',
  },
  {
    name: 'Allinny',
    roleClub: 'Planejamento',
    rolePro: 'Engenheira de Software',
    img: allinnyImg,
    linkedin: 'https://www.linkedin.com/in/alinny-gomes-damascena-070871332',
    linkedinLabel: 'Allinny',
  },
  {
    name: 'Marco',
    roleClub: 'Áudio e Vídeo',
    rolePro: 'Engenheiro de Software',
    img: marcoImg,
    linkedin: 'https://www.linkedin.com/in/marco-antonio-oliveira-cavaco-9b3b24325',
    linkedinLabel: 'Marco',
  },
  {
    name: 'Janine',
    roleClub: 'Vice Líder',
    rolePro: 'Engenheira de Software',
    img: janineImg,
    linkedin: 'https://www.linkedin.com/in/janine-ferreira-leal-b95339265',
    linkedinLabel: 'Janine',
  },
  {
    name: 'João Silva',
    roleClub: 'Áudio e Vídeo',
    rolePro: 'Engenheiro de Software @ Triunfo Concebra',
    img: joaoImg,
    linkedin: 'https://www.linkedin.com/in/joaoplssilva',
    linkedinLabel: 'João',
  },
  {
    name: 'Júlia Almeida',
    roleClub: 'Designer',
    rolePro: 'Engenheira de Software',
    img: juliaImg,
    linkedin: '#',
    linkedinLabel: 'Júlia Almeida',
  },
]

export default function Team() {
  return (
    <section id="organizadores" className="section team-section">
      <div className="container">
        <h2 className="section-title">🏴‍☠️ TIME GO</h2>

        <div className="team-carousel-container">
          <div className="team-carousel">
            {[...team, ...team].map((member, i) => (
              <article
                key={i}
                className={`team-card ${member.isCaptain ? 'team-card--captain' : ''}`}
              >
                <div className="team-avatar">
                  <img src={member.img} alt={member.name} loading="lazy" />
                </div>

                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <span className="team-role-club">{member.roleClub}</span>
                  <span className="team-role-pro">{member.rolePro}</span>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-linkedin"
                  >
                    <img src={linkedInIcon} alt="LinkedIn" className="linkedin-icon" />
                    <span>{member.linkedinLabel}</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
