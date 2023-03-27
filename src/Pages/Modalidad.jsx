import brunoPet from '../img/brunoPet.jpg'
import chenzPet from '../img/ChenzPet.jpg'
const Modalidad = () => {

  return (
    <>
      <div className="container bg-dark contenedor-modal">
        <div className="text-white text-hour">
          <h1 className="card-title text-center">⚡Horarios y actividades tentativas</h1>
          <p className="card-text mt-4">El stream cuenta con dos modos de emisión. Una primera parte donde estoy ausente al que llamamos BRUNITOpet, y una segunda instancia en la que vas a encontrarme participando de los breaks y de cada momento productivo.</p>
          <span>A continuación te comento cuales son los horarios:</span>
        </div>
        <h1 className="card-title text-center text-white mb-3">La mascosta del cuarto</h1>
        <div className="card-flex">
          <div className="card-body">
            <div className="card cardDark">
              <div className="card-body">
                <div className="card-horarios">
                  <h5 className="card-title">BRUNITOpet HORARIO:</h5>
                  <span>Lunes a Jueves:</span>
                  <h6 className="card-subtitle mb-2 text-muted">04:00 A 13:00 HS ARG</h6>
                  <h6 className="card-subtitle mb-2 text-muted">09:00 A 17:00 HS ESP</h6>
                  <h6 className="card-subtitle mb-2 text-muted">01:00 A 10:00 HS MEX DF</h6>
                </div>
              </div>
              <img src={brunoPet} class="card-img" alt="..." />
            </div>
          </div>
          <div className="text-white text-hour">
            <p className="card-text mt-3">En este horario dejamos activo el bot del canal, el cual apunta tareas, marca pomos personales y si se encuentra presente algunas de las mods, compartimos códigos de salita para plantar en Forest. Su funcionamiento esta explicado en una página web cuyo link puede solicitarlo en el chat ingresado !comandos.</p>
            <span>El tiempo de PRODUCTIVIDAD definido es de 60 minutos, luego cambiara automáticamente la escena al BREAK que durará 10 minutos.Esta modalidad surgió al regreso del trabajo presencial. Al trabajar fuera de casa y no poder realizar los directos matutinos, mucha gente me pidió si podía dejar funcionando esta herramienta para seguir interactuando con las tareas fijadas y autoadministrarse hasta mi regreso. Es una muy buena oportunidad para encontrar el focus que estabas necesitando. Aun estando ausente estoy al pendiente de todo lo que sucede en el stream.</span>
            <h6 className="card-title mt-3">¿Cuál es el objetivo de este canal?</h6>
            <p className="card-text"> Los directos se realizan con la finalidad de compartir nuestros tiempos de estudios y/o trabajo en compañía de una excelente comunidad que en numerosas ocasiones prestan su apoyo para empujarnos a lograr nuestros objetivos.</p>
          </div>
        </div>
      </div>
      <div className="container bg-dark contenedor-modal">
        <h1 className="card-title text-center text-white mb-3">Rigoberto: Chenz</h1>
        <div className="card-flex">
          <div className="card-body">
            <div className="card cardDark">
              <div className="card-body">
                <div className="card-horarios">
                  <h5 className="card-title">Cuarto de Chenz HORARIO:</h5>
                  <span>Lunes a Viernes:</span>
                  <h6 className="card-subtitle mb-2 text-muted">13:00 A 21:00 HS ARG</h6>
                  <h6 className="card-subtitle mb-2 text-muted">17:00 A 01:00 HS ESP</h6>
                  <h6 className="card-subtitle mb-2 text-muted">10:00 A 18:00 HS MEX DF</h6>
                </div>
              </div>
              <img src={chenzPet} class="card-img" alt="..." />
            </div>
          </div>
          <div className="text-white text-hour">
            <p className="card-text mt-3">En este momento es cuando participo de cada uno de los breaks y momentos producticos, donde la comunidad está más activa. Nos divertimos jugando y charlando. No te olvides que por visualizarme hay puntos de canal que puedes intercambiar para una mejor interacción. Te animo a que participes y que puedas encontrar tu lugar.</p>
            <span>Te pido paciencia y respeto hacia mí, a la gente que está en el chat, la cual en su mayoría me acompañan hace mucho tiempo. No asumas confianza de más y aprende a medir tus comentarios. Los tiempos que determinamos se respetan, no insistas con otras cuestiones a causa que aquí estamos todos por lo mismo TRABAJAR Y/O ESTUDIAR con la finalidad que a cada uno lo motiva, lo cual, debe ser tu prioridad y la de todas en este espacio. Respeta lo que el chat decida en cuanto a votaciones y actividades a realizar.</span>
            <h6 className="card-title mt-3">¿Qué más tengo que saber?</h6>
            <p className="card-text"> En algunos momentos de productividad aprovecho para sacar pasear a mi compañero de cuarto: mi perro (bruno). También suelo aprovechar para ir a comer o ir al baño, simplemente por algunos minutos dado que en los recreos me quedo conversando con ustedes y no puedo repostar o atender ciertas cuestiones como las que nombre anteriormente.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modalidad
