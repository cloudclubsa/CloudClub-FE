import './Certificates.css'

const certificates = [
  {
    label: 'Student Club #1',
    href: 'https://drive.google.com/drive/folders/1VoI089mon6JDo6cI0BKNT30Vh2RVYAgw?usp=drive_link',
    color: 'purple',
  },
  {
    label: 'Student Club #2',
    href: 'https://drive.google.com/drive/folders/14SOI66NCVs5CLUh0bKmQuQwRz75ywhjs?usp=drive_link',
    color: 'magenta',
  },
]

export default function Certificates() {
  return (
    <section id="certificados" className="section certificates-section">
      <div className="container certificates-container">
        <h2 className="section-title">🎓 Certificados</h2>
        <p className="certificates-subtitle">
          Selecione a edição do evento para visualizar e baixar seu certificado:
        </p>

        <div className="certificates-grid">
          {certificates.map((cert, i) => (
            <a
              key={i}
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`certificate-card certificate-card--${cert.color}`}
            >
              <span className="certificate-emoji">📜</span>
              <span className="certificate-label">{cert.label}</span>
              <span className="certificate-arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
