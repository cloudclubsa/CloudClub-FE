import awsLogo from '../assets/AWS_BLK.png'
import aluraLogo from '../assets/Alura.webp'
import clubLogo from '../assets/CloudClub_Purple.png'
import fiapLogo from '../assets/Fiap-logo-novo-removebg-preview.png'
import rocketLogo from '../assets/RocketSeat.png'
import './Sponsors.css'

const sponsors = [
  { src: awsLogo, alt: 'AWS', title: 'AWS' },
  { src: aluraLogo, alt: 'Alura', title: 'Alura' },
  { src: clubLogo, alt: 'Student Club', title: 'Student Club', className: 'sponsors-club' },
  { src: fiapLogo, alt: 'FIAP', title: 'FIAP' },
  { src: rocketLogo, alt: 'RocketSeat', title: 'RocketSeat' },
]

export default function Sponsors() {
  // Duplicate for seamless loop
  const allSponsors = [...sponsors, ...sponsors]

  return (
    <section id="patrocinadores" className="sponsors-strip">
      <div className="marquee-container">
        <div className="marquee-content">
          {allSponsors.map((s, i) => (
            <img
              key={i}
              src={s.src}
              alt={s.alt}
              title={s.title}
              className={s.className || ''}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
