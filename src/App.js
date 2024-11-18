
import './App.css'
import Header from "./components/Header.js"
import Section from "./components/Section.js"
import MemeImage from "./components/MemeImage.js"

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Section />
        <MemeImage />
      </main>
    </>
  )
}

export default App
