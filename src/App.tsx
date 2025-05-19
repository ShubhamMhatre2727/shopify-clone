import { useState } from "react"
import NavBar from "./components/NavBar"
import SideBar from "./components/SideBar"
import Hero from "./components/Hero"

function App() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative bg-black text-white h-screen ">
      <NavBar setIsOpen={setIsOpen}/>
      <SideBar isOpen={isOpen}/>
      <Hero/>
    </div>
  )
}

export default App
