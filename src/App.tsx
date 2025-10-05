import './App.css'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Timetable } from './components/Timetable'
import { Organizers } from './components/Organizers'
import { InterestForm } from './components/InterestForm'
import { Information } from './components/Information'

function App() {

  return (
    <>
      <Hero />
      <About />
      <Information />
      <Timetable />
      <InterestForm />
      <Organizers />
      <Footer />
    </>
  )
}

export default App
