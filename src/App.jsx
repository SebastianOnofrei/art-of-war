import About from "./components/organisms/about/About"
import Battle_Requirements from "./components/organisms/battle-requirements/Battle_Requirements"
import Battles from "./components/organisms/battles/Battles"
import Hero from "./components/organisms/hero/Hero"
import Newsletter from "./components/organisms/newsletter/Newsletter"
import Testimonials from "./components/organisms/testimonials/Testimonials"

function App() {

  return (
    <>
      <Hero/>
      <About/>
      <Battles/>
      <Battle_Requirements/>
      <Testimonials/>
      <Newsletter/>
    </>
  )
}

export default App
