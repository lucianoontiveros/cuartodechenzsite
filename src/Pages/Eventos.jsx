import valleEscondido from '../img/ValleOlvidado.jpg'
import Elencargado from '../img/El-Encargado.webp'
import Kukoro from '../img/Kukoro.jpg'
const Eventos = () => { 
    return (
        <>
            <div className="container contenedorEventos">
                <div className="card-grupos card-group">
                    <div className="card">
                        <img src={valleEscondido} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title text-white">EL VALLE OLVIDADO </h5>
                            <span className="card-text">Todos los domingos nos juntamos a ver EL VALLE OLVIDADO por DISCORD del canal a las 18:00hs ARG. </span>
                            <p className="card-text"> </p>
                            <p className="card-text text-white"><small><i>"Un grupo de jóvenes se pierde hanciendo senderismo en la selva y son repentinamente atacados. Heridos y con uno de los suyos desaparecido, se refugian en un misterioso pueblo cubierto por una niebla eterna, un lugar del que nadie puede escapar"</i></small></p>
                        </div>
                        <div class="d-grid gap-2">
                            <a class="btn" Target="_blank" href='https://discord.gg/UdU3wvpWu7' type="button">Discord</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Elencargado} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title text-white">EL ENCARGADO </h5>
                            <span className="card-text">Todos los domingos nos juntamos a ver EL ENCARGADO por el servidor de DISCORD a las 19:00hs ARG. </span>
                            <p className="card-text"> </p>
                            <p className="card-text text-white"><small><i>"Eliseo trabaja como encargado en un importante edificio y, cada vez que los dueños no están, aprovecha para disfrutar de las comodidades de sus apartamentos."</i></small></p>
                        </div>
                        <div class="d-grid gap-2">
                            <a class="btn" Target="_blank" href='https://discord.gg/UdU3wvpWu7' type="button">Discord</a>
                        </div>
                    </div>

                   <div className="card">
                        <img src={Kukoro} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title text-white">KUKORO TORNEO</h5>
                            <span className="card-text">Cada ULTIMO DOMINGO del mes a las 17:00hs ARG por TWITCH.</span>
                            <p className="card-text"> </p>
                            <p className="card-text text-white"><small><i>"A pedido de la comunidad hemos decidido brindar cada último Domingo del mes una hora seguida de kukoro jugando al apartado del "Jardín" conocido como plantitas. Es nuestro campeonato, donde dos teams se juegan a todo o nada: EL TEAM AZUL Y EL TEAM ROSA. "</i></small></p>
                        </div>
                        <div class="d-grid gap-2">
                            <a class="btn " Target="_blank" href='https://www.twitch.tv/cuartodechenz' type="button">Twitch</a>
                        </div>
                    </div>
                </div>        
            </div>
        </>
    )
}
export default Eventos