import './App.css'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Timetable } from './components/Timetable'
import { Organizers } from './components/Organizers'
import { InterestForm } from './components/InterestForm'

function App() {

  return (
    <>
      <Hero />
      <About />
      <Timetable />
      <InterestForm />
      <Organizers />
      <Footer />
    </>
  )
}

export default App
