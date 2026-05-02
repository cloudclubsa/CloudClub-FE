import './Ticker.css'

const items = [
  'Cloud Computing',
  'AWS Student Club GO',
  'Networking',
  'Workshops',
  'Comunidade',
  'Certificações',
  'Meetups',
  'Open Source',
  'Cloud Computing',
  'AWS Student Club GO',
  'Networking',
  'Workshops',
  'Comunidade',
  'Certificações',
  'Meetups',
  'Open Source',
]

export default function Ticker() {
  return (
    <div className="ticker-bar">
      <div className="ticker-bar-content">
        {items.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}
