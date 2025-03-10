import { PiCaretDoubleDownBold } from "react-icons/pi"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Home } from './components/Home'
import { Projects } from "./components/Projects"
import { Services } from "./components/Services"
import { Stacks } from './components/Stacks'

const stackList = ['Git', 'Gitlab', 'Github', 'Html', 'CSS', 'Slack', 'SASS', 'Jira', 'JavaScript',
  'TypeScript', 'ReactJS', 'TailwindCSS', 'Figma', 'Swift']

export default function App() {
  return (
    <>
      <Home />
      <Stacks stackList={stackList} />
      <PiCaretDoubleDownBold size={32} color="c0c4ce" />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}