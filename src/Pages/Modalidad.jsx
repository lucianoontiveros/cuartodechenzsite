import brunoPet from '../img/brunoPet.jpg'
import chenzPet from '../img/ChenzPet.jpg'
const Modalidad = () => {

  return (
    <>
      <div className="container bg-dark contenedor-modal">
        <div className="text-white text-hour">
          <h1 className="card-title text-center">⚡Horarios y actividades tentativas</h1>
          <p className="card-text mt-4">El stream cuenta con dos modos de emisión. Por la madrugada Argentina, el canal comienza a emitir automaticamente con el bot y una escena en particular, donde se exponen las tareas de los usuarios que interactúan en el chat, respetando los 60 minutos de actividad de estudio y/o trabajo, y al terminar la cuenta regresiva comienza el break. Así sucesivamente hasta el medio día - tarde.
            Luego comienza el directo normal con Chenz en su cuarto, bajo las características de siempre, adonde hay más interacción y la posibilidad que en los descansos podamos charlar con él.</p>
          <span>Estos son los horarios estimativos:</span>
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
            <p className="card-text mt-3">En este horario el protagonista es el bot de tareas y la posibilidad de marcar tus propios pomos personales. Si se encuentra presente algunas de las moderadoras, compartimos códigos de salita para plantar en Forest. Su funcionamiento está explicado en el apartado de TUTORIALES en el menú de este sitio web (el botón superior) para que puedas aprovechar el espacio al máximo. </p>
            <span>El tiempo de PRODUCTIVIDAD definido es de 60 minutos, luego cambiara automáticamente la escena al BREAK que durará 10. El espacio y este tipo de emisión surgió por el  regreso al trabajo presencial de Chenz, causa por la cual no puede estar con la carga horaria que realizaba en épocas de pandemia. Al trabajar fuera de casa y no poder realizar los directos matutinos, mucha gente solicitó dejar funcionando esta herramienta para seguir interactuando con las tareas fijadas. Es una muy buena oportunidad para encontrar el focus que estabas necesitando. Aun estando ausente, siempre habrá personas al pendiente de todo lo que sucede en el stream.</span>
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
            <p className="card-text"> En algunos momentos de productividad aprovecho para sacar pasear a mi compañero de cuarto: mi perro (Bruno). También suelo aprovechar para ir a comer o ir al baño, simplemente por algunos minutos dado que en los recreos me quedo conversando con ustedes y no puedo repostar o atender ciertas cuestiones como las que nombre anteriormente.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modalidad
