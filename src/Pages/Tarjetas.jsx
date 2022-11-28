import Twichtjpg from '../img/twitch.jpg'
import Discordjpg from '../img/discord.jpg'
import Comandosjpf from '../img/comandos.jpg'
import Loopgif from '../img/loop.gif'
import { Link } from 'react-router-dom'

const Tarjetas = () => { 

    return(
        <>
            <div className="contenedor col-12">
                <div className="video container mt-2">
                    <img src={Loopgif} alt="" width="100%" />
                    <div className=" p-3 text-center videotext">
                        <h5> Acerca de Chenz </h5>
                        <p> Mi nombres es Luciano, vivo en Córdoba - Argentina, tengo 31. Cree este canal con la finalidad que te sientas acompañado en tus estudios, en tu día a día, y puedas sacarle provecho a tu productividad.</p>
                    </div>
                </div>
                <div className="contenedorTarjetas container col 12 p-3">
                    <div className="card mb-1">
                        <img src={Twichtjpg} className="card-img-top" alt="..."/>
                        <div className="card-body d-grid gap-2">
                            <a className="btn btn-dark" Target="_blank" href='https://www.twitch.tv/cuartodechenz' type="a">TWITCH</a>
                        </div>
                    </div>
                    <div className="card mb-1">
                        <img src={Discordjpg} className="card-img-top" alt="..."/>
                        <div className="card-body d-grid gap-2">
                            <a className="btn btn-dark" Target="_blank" href='https://discord.gg/UdU3wvpWu7' type="a">DISCORD</a>
                        </div>
                    </div>
                    <Link className="card mb-1" style={{ textDecoration: 'none' }} to="/comandos">
                        <img src={Comandosjpf} className="card-img-top" alt="..."/>
                        <div className='card-body d-grid gap-2'>
                           <button className="btn btn-dark" Target="_blank">COMANDOS</button>
                        </div> 
                    </Link>
                </div>
            </div>
            
        </>
    )
 }

 export default Tarjetas