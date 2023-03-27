import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Tutoriales = () => {
  return (
    <>
      <div className="container bg-dark contenedor-modal">
        <div className="text-white text-hour">
          <h1 className="card-title text-center">🐑BrunitoPet el bot de nuestro canal</h1>
        </div>
        <div className="card-flex">
          <div className="text-white text-hour">
            <h2 className="card-title text-white mb-3">COMANDO TAREA</h2>
            <p className="card-text mt-4">Brunito cuenta con un registro de tareas las cuales se almacenan de emisión a emisión como un TODOLIST. El mismo es personal y registra tus tareas en base a ID's.  Sin embargo, a diferencia de otros directos de Study With Me, este listado de tareas no se muestra siempre en pantalla, solo en momentos donde chenz no está en su cuarto,  gestionándose las listas de pendientes directamente desde el chat para no ser invasivos con distracciones, total los usuarios puede ocultar el chat si lo creen necesario. Para poder registrar estas tareas debemos ingresar el comando <b>!tareas</b> + las descripción de la tarea. Por ejemplo: !tarea Estudiar unida 1 de derecho privado.</p>
            <span className="card-text text-warning"> <b>Importante:</b> En el registro de tareas puedes cargar la cantidad que desees, las mismas no se borraran hasta el día que el streamer anuncie que el bot se reseteara, lo cual no será seguido, para que puedas tener tus tareas registradas bastante tiempo. Sin embargo, lo importante aquí es ser productivo y que puedas ir mermando tu lista de pendientes al ritmo de tus horas de trabajo. </span>
          </div>
        </div>
        <Container>
          <h2 className="card-title text-white text-center mt-3 mb-3">VIDEO TUTORIAL BRUNITOPET</h2>
          <div className="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/qi24YyPXmo0" title="YouTube video" allowfullscreen></iframe>
          </div>

        </Container>
        <div className="card-flex">
          <div className="text-white text-hour">
            <h2 className="card-title text-white mb-3">REVISAR TAREAS</h2>
            <p className="card-text mt-4">Una vez cargadas tus tareas seguro querrás consultarlas, por lo cual, ingresando en el chat <b>!lista</b> se desplegarán todas tus tareas pendientes para revisar, eliminar o marcar. Aquí tendrás que tener en cuenta el ID de la tarea en cuestión a gestionar. </p>
            <p className="card-text"> Al desplegar las tareas en el chat se mostrará el nombre del bot seguido de  tu nombre de usuario entre dos iconos de Twitch, con la descripción de la tarea y por cada una de ellas el ID para marcar o eliminar: 🔖 !marcar f3b   🔖 !eliminar f3b.</p>
          </div>
        </div>
        <div className="card-flex">
          <div className="text-white text-hour">
            <h2 className="card-title text-white mb-3">MARCAR UN TAREA</h2>
            <p className="card-text mt-4">Si desea marcar una tarea realizada debe ingresar en el chat el comando <b>!lista</b> para tener en detalle las tareas registradas, y cada una de ella tendrá una opción a marcar con una combinación numérica / alfanumérica. De este modo lo que sigue es ingresar en el chat <b>!marcar</b>  + el ID correspondiente: !marcar 3ad</p>
          </div>
        </div>
        <div className="card-flex">
          <div className="text-white text-hour">
            <h2 className="card-title text-white mb-3">BORRAR UNA TAREA</h2>
            <p className="card-text mt-4">Si desea borrar una tarea debe ingresar en el chat el comando <b>!lista</b> para tener en detalle las tareas registradas, y cada una de ellas tendrá una opción a eliminar con una combinación númerica / alfanumérica. Para eliminarla solo resta ingresar en el chat <b>!eliminar</b> + el ID correspondiente. Ejemplo: !eliminar a3f.</p>
          </div>
        </div>
        <div className="card-flex">
          <div className="text-white text-hour">
            <h2 className="card-title text-white mb-3">BORRAR O MARCAR TODAS LAS TAREAS</h2>
            <p className="card-text mt-4">Ya si deseas marcar o eliminar todas las tareas lo unico que debes ingresar en el chat es el comando <b>!pickup</b>  (marcar todas como realizadas) o <b>!clear</b> (Para eliminar todas las tareas de tu lista). </p>
          </div>
        </div>
        <Container>
          <h2 className="card-title text-white text-center mt-3 mb-3">VIDEOS TUTORIALES DISCORD</h2>
          <div className="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/videoseries?list=PLztuO1lwZVJAZB9fNeJoTNQSuyl7_Ek8j" title="YouTube video" allowfullscreen></iframe>
          </div>
        </Container>
      </div>




    </>
  )
}

export default Tutoriales
