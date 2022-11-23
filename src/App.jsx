import LayoutPublic from './layaout/Layout'
import { Routes, Route } from 'react-router-dom'
import Tarjetas from './Pages/Tarjetas'
import Comandos from './Pages/Comandos'
import Eventos from './Pages/Eventos'
import Modalidad from './Pages/Modalidad'
import Staff from './Pages/Staff'
import Tutoriales from './Pages/Tutoriales'
import NavBar from './NavBar'
import Footer from './Footer'


function App() {

  return (
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<LayoutPublic/>}>
            <Route  element={<Tarjetas />} path="/"></Route>
            <Route  element={<Modalidad />} path="/modalidad"></Route>
            <Route  element={<Staff />} path="/staff"></Route>
            <Route  element={<Tutoriales />} path="/tutoriales"></Route>
            <Route  element={<Comandos />} path="/comandos"></Route>
            <Route  element={<Eventos />} path="/eventos"></Route>
          </Route>
        </Routes>
        <Footer />
      </>
  )
}

export default App
