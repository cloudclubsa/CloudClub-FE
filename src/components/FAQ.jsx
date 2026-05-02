import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    question: 'O que é o AWS Student Club?',
    answer:
      'O AWS Student Club GO é uma comunidade oficial apoiada pela AWS, feita para estudantes e profissionais que querem aprender e se desenvolver em Cloud Computing. Apesar de termos "GO" no nome em referência a Goiás, nossas portas estão abertas para todos que quiserem colar!',
  },
  {
    question: 'Como posso participar dos eventos?',
    answer:
      'É super simples! Todas as inscrições são feitas pela nossa página no Meetup. Recomendamos que você fique de olho na agenda aqui do site e nas nossas redes sociais para garantir sua vaga assim que os eventos forem anunciados.',
    links: [
      {
        text: 'Meetup',
        href: 'https://www.meetup.com/aws-cloud-club-at-faculdade-sul-americana/',
      },
    ],
  },
  {
    question: 'Os eventos são pagos?',
    answer:
      'Somos uma comunidade sem fins lucrativos. A maioria das nossas atividades busca ser acessível, mas cobramos um valor simbólico nos ingressos de meetups e workshops. Esse valor é revertido integralmente para custear o coffee break e garantir a melhor infraestrutura e experiência para você.',
  },
  {
    question: 'Como entro em contato com a organização?',
    answer:
      'Você pode nos chamar através das redes sociais (Instagram e LinkedIn). Para um papo mais direto com a galera e com os organizadores, entre no nosso servidor do Discord ou no grupo da comunidade no WhatsApp!',
    links: [
      { text: 'Instagram', href: 'https://www.instagram.com/cloudclub.go' },
      { text: 'LinkedIn', href: 'https://www.linkedin.com/company/110336050' },
      { text: 'Discord', href: 'https://discord.gg/w7AxM4AbhE' },
      { text: 'WhatsApp', href: 'https://chat.whatsapp.com/Bb5hnDZgdnyELxs7XF3iP2' },
    ],
  },
  {
    question: 'Como minha empresa pode patrocinar o clube?',
    answer:
      'Ficamos felizes com o interesse em apoiar a tecnologia local! Envie sua proposta para o e-mail cloudclubs.sa@gmail.com. Vamos analisar com carinho como sua marca pode contribuir para o crescimento da nossa comunidade.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <h2 className="section-title">❓ Perguntas Frequentes</h2>

        <div className="faq-grid">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === i ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  <p>
                    {faq.answer}
                    {faq.links && (
                      <>
                        {' '}
                        {faq.links.map((link, j) => (
                          <span key={j}>
                            <a href={link.href} target="_blank" rel="noopener noreferrer" className="faq-link">
                              {link.text}
                            </a>
                            {j < faq.links.length - 1 && ' · '}
                          </span>
                        ))}
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
