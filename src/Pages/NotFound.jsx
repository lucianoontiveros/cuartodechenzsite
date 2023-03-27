import Twichtjpg from '../img/twitch.jpg'
import Discordjpg from '../img/discord.jpg'
import Comandosjpf from '../img/comandos.jpg'
import Loopgif from '../img/loop.gif'
import { Link } from 'react-router-dom'

const NotFound = () => {

  return (
    <>
      <div className="contenedor col-12">
        <div className="video container mt-2">
          <h1>LA SECCION QUE QUIERE INGRESAR NO PUDIMOS ENCONTRARLA</h1>
        </div>
        <div className="contenedorTarjetas container col 12 p-3">
          <div className="card mb-1">
            <img src={Twichtjpg} className="card-img-top" alt="..." />
            <div className="card-body d-grid gap-2">
              <a className="btn btn-dark" type="a">TWITCH</a>
            </div>
          </div>
          <div className="card mb-1">
            <img src={Discordjpg} className="card-img-top" alt="..." />
            <div className="card-body d-grid gap-2">
              <a className="btn btn-dark" type="a">DISCORD</a>
            </div>
          </div>
          <div className="card mb-1">
            <img src={Comandosjpf} className="card-img-top" alt="..." />
            <div >
              <Link className="card-body d-grid gap-2" to="/comandos"><a className="btn btn-dark" Target="_blank">COMANDOS</a></Link>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default NotFound
