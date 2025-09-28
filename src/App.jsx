import { Home } from './Components/Home/Home';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services'
import Work from './Components/Work.jsx/Work';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import ScrollToTopButton from './Components/ScrollToTopButton/ScrollToTopButton';
import './App.css'

function App() {

  return (
    <div className='container'>
     <Home />
     <Hero />
     <About />
     <Services />
     <Work />
     <Contact />
     <Footer />
     <ScrollToTopButton />
    </div>
  )
}

export default App
