import { Link } from 'react-router-dom'
import Discordjpg from './img/discord.jpg'
import Instagramjpg from './img/instagram.jpg'
import Telegramjpg from './img/telegram.jpg'
import Twitchjpg from './img/twitch.jpg'
import Youtubejpg from './img/youtube.jpg'
import Comandosjpf from './img/comandos.jpg'
import Twitter from './img/twitter.jpg'

const NavBar = () => {
  return (
    <>
      <div className="contenedorNav12">
        <nav className="navbar navbar-dark bg-dark" id="barraNavBar">
          <div className="container-fluid" id="botonAndTitle">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <p className="text-white text-center h4">CUARTO DE CHENZ</p>
          </div>
        </nav>
        <div className="collapse itemsNav" id="navbarToggleExternalContent">
          <div className="navbar-toggler bg-dark p-4" id="navBarlista" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <   Link className="nav-link m-4 text-light" to="/">
              <h5> {`>`} INICIO </h5>
              <p> Visita nuestro apartado inicial</p>
            </Link>
            <Link className="nav-link m-4 text-light" to="/modalidad">
              <h5> {`>`} SOBRE EL CANAL</h5>
              <p>Entérate sobre el formato de Study With me que el cuarto de chenz brinda en sus directos. </p>
            </Link>
            <Link className="nav-link m-4 text-light" to="/tutoriales">
              <h5> {`>`} TUTORIAL BRUNITO PET</h5>
              <p>En este apartado podrás obtener información de como funciona el bot del canal de Twitch.</p>
            </Link>
            <Link className="nav-link m-4 text-light" to="/comandos">
              <h5> {`>`} COMANDOS</h5>
              <p>Todos los comandos que se emplean en el chat del canal.</p>
            </Link>
            { /*
                        <Link className="nav-link m-4 text-light" to="/eventos">
                            <h5> {`>`} EVENTOS</h5>
                            <p>Información sobre Eventos de la comunidad de discord</p>
                        </Link>
                    */}
          </div>
          <div className="redes">
            <div className='cardContenedor1'>
              <div className="card">
                <img src={Instagramjpg} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Enterate de horarios y novedades sobre el canal. Tenemos un grupo de Forest para enviar codigos de plantación</p>
                  <div className="d-grid gap-2">
                    <a className="btn btn-dark" Target="_blank" href='https://www.instagram.com/luciano.a.ontiveros/' type="a">INSTAGRAM</a>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src={Youtubejpg} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Contenido adicional y sesiones de estudio para encontrarnos fuera de los directos</p>
                  <div className="d-grid gap-2">
                    <a className="btn btn-dark" Target="_blank" href="https://www.youtube.com/channel/UC8PYcJ-18cCaujWdk37TaJg" type="a">YOUTUBE</a>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src={Telegramjpg} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Podrás unirte a nuestro grupo de plantación. Nos enviamos codigos Forest incluso fuera de stream</p>
                  <div className="d-grid gap-2">
                    <a className="btn btn-dark" Target="_blank" href='https://t.me/+ndxXXczILrk4MDBh' type="a">TELEGRAM</a>
                  </div>
                </div>
              </div>
            </div>
            <div className='cardContenedor2'>
              <div className="card">
                <img src={Twitchjpg} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Bienvenidxs a la experiencia de estudiar en compañía, a ser testigos de los logros de esta comunidad </p>
                  <div className="d-grid gap-2">
                    <a className="btn btn-dark" Target="_blank" href='https://www.twitch.tv/cuartodechenz' type="a">TWITCH</a>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src={Discordjpg} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Si quieres conocernos, vivir el día a día, lo mejor que puedes hacer es usar Discord. Te invitamos</p>
                  <div className="d-grid gap-2">
                    <a className="btn btn-dark" Target="_blank" href='https://discord.gg/UdU3wvpWu7' type="a">DISCORD</a>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src={Twitter} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Tambien podes seguir novedades a traves de Twitter.</p>
                  <div className="d-grid gap-2" >
                    <a className="btn btn-dark" Target="_blank" href='https://twitter.com/AgustnOntivero6'>TWITTER</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
