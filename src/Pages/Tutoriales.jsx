const Tutoriales = () => { 
    return(
    <>
        <div className="container bg-dark contenedor-modal">
            <div className="text-white text-hour">
                <h1 className="card-title text-center">🐑BrunitoPet el bot de nuestro canal</h1>
            </div>
            <div className="card-flex"> 
                <div className="text-white text-hour">
                    <h1 className="card-title text-white mb-3">COMANDO TAREA</h1>
                    <p className="card-text mt-4">Brunito cuenta con un registro de tareas las cuales se almacenan de emisión a emisión, este registro de tareas es como un TODOLIST, sin embargo a diferencia de otros directos de Study With Me este listado de tareas no se muestra en pantalla, más bien, se gestiona todo directamente desde el chat para no ser invasivos con distracciones en pantalla. Para poder registrar estas tareas debemos ingresar el comando <b>!tareas</b> + las descripción de la tarea. Por ejemplo: !tarea Estudiar unida 1 de derecho privado.</p>
                    <span className="card-text text-warning"> <b>Importante:</b> En el registro de tareas puedes cargar la cantidad que desees, las mismas no se borraran hasta el día que el streamer anuncie que el bot se reseteara, lo cual no será seguido, para que puedas tener tus tareas registradas bastante tiempo. Sin embargo, lo importante aquí es ser productivo y que puedas ir mermando tu lista de pendientes al ritmo de tus horas de trabajo. </span>
                </div>
            </div>
            <div className="card-flex"> 
                <div className="text-white text-hour">
                    <h1 className="card-title text-white mb-3">REVISAR TAREAS</h1>
                    <p className="card-text mt-4">Una vez cargadas tus tareas seguro querrás consultarlas, por lo cual, ingresando en el chat <b>!lista</b> se desplegarán todas tus tareas pendientes para revisarlas, eliminarlas y/o marcar. Es importante que sepas que al eliminar o marcar una tarea debes volver a tirar la lista, para verificar si el número de orden de tus tareas cambió.</p>
                    <p className="card-text"> Al desplegar las tareas, en el chat se mostrará el nombre del bot seguido entre dos iconos de Twitch tu nombre de usuario, con la descripción de la tarea y por cada una de ellas entre barras las palabras eliminar y marcar con un numero de orden (| !eliminar 27 | !marcar 27 |) estos números de orden te sirven para marcar y eliminar la tarea en cuestión a la que están asignadas. Pero no te preocupes que en el siguiente apartado te explicaremos como se hacen estas gestiones para ambos casos, marcar o eliminar. </p>
                </div>
            </div>
            <div className="card-flex"> 
                <div className="text-white text-hour">
                    <h1 className="card-title text-white mb-3">BORRAR UNA TAREA</h1>
                    <p className="card-text mt-4">Para borrar una tarea debe ingresar en el chat el comando <b>!lista</b> para tener en detalle las tareas registradas, y cada una de ellas tendrá una opción para eliminar con un número. Para eliminarla solo resta ingresar en el chat <b>!eliminar</b> + el número de orden. Ejemplo: !eliminar 3.</p>
                <span className="card-text text-danger"> <b>Importante:</b> En el registro de tareas puedes cargar la cantidad que desees, las mismas no se borraran hasta el día que el streamer anuncie que el bot se reseteara, lo cual no será seguido, para que puedas tener tus tareas registradas bastante tiempo. Sin embargo, lo importante aquí es ser productivo y que puedas ir mermando tu lista de pendientes al ritmo de tus horas de trabajo. </span>
                </div>
            </div>
            <div className="card-flex"> 
                <div className="text-white text-hour">
                    <h1 className="card-title text-white mb-3">MARCAR UN TAREA</h1>
                    <p className="card-text mt-4">Para marcar una tarea realizada debe ingresar en el chat el comando <b>!lista</b> para tener en detalle las tareas registradas, y cada una de ella tendrá una opción para marcar con un número. Para eliminarla ingresar en el chat <b>!eliminar</b> + el número de orden. Ejemplo: !marcar 3.</p>
                </div>
            </div>
            <div className="videoTutoriales">
                <h1 className="text-center text-white mt-2">VIDEOS TUTORIALES</h1>
                <div className="videoscontenedor">
                    <h3>Para aprendera  usar discord</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLztuO1lwZVJAZB9fNeJoTNQSuyl7_Ek8j" title="Para aprendera  usar discord" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    <h3>Para aprendera  usar BrunitoPet</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/qi24YyPXmo0" title="Para aprendera  usar BrunitoPet" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            </div>

        </div>

        
            
        
    </>
    )
 }

 export default Tutoriales