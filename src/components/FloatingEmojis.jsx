import './FloatingEmojis.css'

export default function FloatingEmojis() {
  // We can render a few cloud emojis that float around the background
  const clouds = ['☁️', '🌩️', '⛅', '☁️', '🌤️', '☁️']

  return (
    <div className="floating-emojis-container" aria-hidden="true">
      {clouds.map((cloud, index) => (
        <div 
          key={index} 
          className={`floating-emoji floating-emoji-${index + 1}`}
        >
          {cloud}
        </div>
      ))}
    </div>
  )
}
