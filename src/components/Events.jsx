import { useState } from 'react'
import './Events.css'

const events = [
  {
    id: 2,
    day: '4',
    month: 'ABR',
    title: 'Conhecendo AWS #2',
    location: 'Hub Goiás — Auditório Principal',
    time: '19h às 21h45 · Presencial + Transmissão ao vivo',
    price: 'Evento gratuito (Vagas Limitadas)',
    link: 'https://www.sympla.com.br/evento/conhecendo-aws-2-aws-cloud-club/3362325',
    description:
      'Segunda edição do meetup do AWS Student Club GO! Uma noite de aprendizado sobre serviços AWS, networking e oportunidades na nuvem.',
  },
  {
    id: 1,
    day: '19',
    month: 'JAN',
    title: 'Conhecendo AWS Student Club #1',
    location: 'Hub Goiás — Miniauditório (2º andar)',
    time: '19h30 às 22h · Presencial',
    price: 'Evento gratuito (Vagas Limitadas)',
    link: 'https://www.sympla.com.br/evento/aws-cloud-club-sa-conhecendo-aws-cloud-club-1/3276397?share_id=copiarlink',
    description:
      'Nosso primeiro encontro! Uma introdução ao mundo AWS, com palestras, networking e muita troca de conhecimento.',
  },
]

export default function Events() {
  const [activeModal, setActiveModal] = useState(null)
  const [showAllEvents, setShowAllEvents] = useState(false)

  const openModal = (event) => setActiveModal(event)
  const closeModal = () => setActiveModal(null)

  return (
    <section id="eventos" className="section events-section">
      <div className="container">
        <h2 className="section-title"> Eventos</h2>

        <div className="events-grid">
          {(showAllEvents ? events : events.slice(0, 1)).map((event) => (
            <article key={event.id} className="event-card">
              <div className="event-date-badge">
                <span className="event-day">{event.day}</span>
                <span className="event-month">{event.month}</span>
              </div>

              <div className="event-info">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-location">📍 {event.location}</p>
                <p className="event-time">🕐 {event.time}</p>
                <p className="event-price">🎫 {event.price}</p>

                <div className="event-actions">
                  <button
                    className="btn-event-details"
                    onClick={() => openModal(event)}
                  >
                    Detalhes
                  </button>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-event-cta"
                  >
                    Inscrever-se →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {events.length > 1 && (
          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-lg)' }}>
            <button
              className="btn btn-primary"
              onClick={() => setShowAllEvents(!showAllEvents)}
            >
              {showAllEvents ? 'Ocultar outros eventos' : 'Ver outros eventos'}
            </button>
          </div>
        )}
      </div>

      {/* Event Modal */}
      {activeModal && (
        <div className="event-modal-overlay" onClick={closeModal}>
          <div className="event-modal" onClick={(e) => e.stopPropagation()}>
            <button className="event-modal-close" onClick={closeModal} aria-label="Fechar">
              ×
            </button>

            <div className="event-modal-header">
              <div className="event-modal-date">
                <span className="event-modal-day">{activeModal.day}</span>
                <span className="event-modal-month">{activeModal.month}</span>
              </div>
              <h2 className="event-modal-title">{activeModal.title}</h2>
            </div>

            <div className="event-modal-body">
              <div className="event-modal-info-item">
                <strong>📍 Local:</strong>
                <p>{activeModal.location}</p>
              </div>
              <div className="event-modal-info-item">
                <strong>🕐 Horário:</strong>
                <p>{activeModal.time}</p>
              </div>
              <div className="event-modal-info-item">
                <strong>ℹ️ Descrição:</strong>
                <p>{activeModal.description}</p>
              </div>
            </div>

            <div className="event-modal-footer">
              <a
                href={activeModal.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Inscrever-se →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
