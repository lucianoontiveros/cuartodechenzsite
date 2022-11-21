import LayoutPublic from './layaout/Layout'
import { Routes, Route } from 'react-router-dom'
import Tarjetas from './Pages/Tarjetas'
import Footer from './footer'

function App() {


  return (
      <>
        <Routes>
          <Route path="/" element={<LayoutPublic/>}>
            <Route  element={<Tarjetas />} path="/"></Route>
          </Route>
        </Routes>
        <Footer />
      </>
  )
}

export default App
