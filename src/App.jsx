import Header from './components/Header'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import FloatingEmojis from './components/FloatingEmojis'
import Events from './components/Events'
import Sponsors from './components/Sponsors'
import Team from './components/Team'
import Certificates from './components/Certificates'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <div className="pattern-bg"></div>
      <FloatingEmojis />
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Events />
        <Sponsors />
        <Team />
        <Certificates />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

export default App
