import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from "./data"


function App() {

  const newArray = data.map(data => {
    return <Card 
    // ADD UNIQUE VALUE WHEN YOU USNG LOCAL RAW DATA
    key = {data.id}
    {...data}    
    />
  })

  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <section className="cards-list">
        {newArray}
      </section>
    </div>
  )
}

export default App
