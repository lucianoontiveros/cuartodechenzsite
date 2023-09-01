import { Link } from "react-router-dom"
import BotonesCategoria from "../components/BotonesCategorias"
import BotonesCopiar from "../components/BotonesCopiar"

const Comandos = () => {


  return (
    <>

      <div className="container pt-5 contenedorComandos" id="comandos">
        <div className="titulo">
          <h1 className="text-center"> COMANDOS PARA TWITCH</h1>
        </div>
        <BotonesCategoria />
        <div className="container contenedorFuncionalidades">
          <h1 className="text-center funcionalidadesTitulo" id="funcionalidades"> {`>`} FUNCIONALIDADES DE BRUNITO</h1>

          <Link className="nav-link m-4 text-light" to="/tutoriales">
            <h5> {`>`} TUTORIAL BRUNITO PET</h5>
            <span className="text-aling-center">Recordar ver este tutorial antes de usar este tipo de comandos:</span>
            <p>En este apartado podrás obtener información de como funciona el bot del canal de Twitch.</p>
          </Link>
          <ul className="list-group lista-grupo funcionalidades">
            <BotonesCopiar text="!tarea" />
            <BotonesCopiar text="!lista" />
            <BotonesCopiar text="!clear" />
            <BotonesCopiar text="!marcar" />
            <BotonesCopiar text="!eliminar" />
            <BotonesCopiar text="!pickup " />
            <BotonesCopiar text="!focus 25" />
          </ul>
          <BotonesCategoria />
          <h1 className="text-center funcionalidadesTitulo" id="informativos"> {`>`} INFORMATIVOS </h1>
          <ul className="list-group lista-grupo funcionalidades">
            <BotonesCopiar text="!info" />
            <BotonesCopiar text="!chenz" />
            <BotonesCopiar text="!horario" />
            <BotonesCopiar text="!discord" />
            <BotonesCopiar text="!estudio" />
            <BotonesCopiar text="!eneatipo" />
            <BotonesCopiar text="!estudioe" />
            <BotonesCopiar text="!infoe" />
            <BotonesCopiar text="!forest" />
            <BotonesCopiar text="!onlyfans" />
            <BotonesCopiar text="!paseo" />
            <BotonesCopiar text="!patricia" />
            <BotonesCopiar text="!raid" />
            <BotonesCopiar text="!reclamos" />
            <BotonesCopiar text="!recomendados" />
            <BotonesCopiar text="!redes" />
            <BotonesCopiar text="!reglas" />
            <BotonesCopiar text="!sentarse" />
            <BotonesCopiar text="!yaesta" />
            <BotonesCopiar text="!puntitos" />
            <BotonesCopiar text="!eltimer" />
            <BotonesCopiar text="!lapala" />
            <BotonesCopiar text="!error" />
          </ul>re
          <BotonesCategoria />
          <h1 className="text-center funcionalidadesTitulo" id="sonidos"> {`>`} SONIDOS E IMÁGENES </h1>
          <ul className="list-group lista-grupo funcionalidades">
            <BotonesCopiar text="!abrachetada" />
            <BotonesCopiar text="!abuscarla" />
            <BotonesCopiar text="!anda" />
            <BotonesCopiar text="!asiestamos" />
            <BotonesCopiar text="!ayudame" />
            <BotonesCopiar text="!any" />
            <BotonesCopiar text="!belleza" />
            <BotonesCopiar text="!buenasnoches" />
            <BotonesCopiar text="!buenastardes" />
            <BotonesCopiar text="!buendia" />
            <BotonesCopiar text="!cande" />
            <BotonesCopiar text="!chingona" />
            <BotonesCopiar text="!comerla" />
            <BotonesCopiar text="!correPerra" />
            <BotonesCopiar text="!donando" />
            <BotonesCopiar text="!dormir" />
            <BotonesCopiar text="!transmiti" />
            <BotonesCopiar text="!dulzura" />
            <BotonesCopiar text="!elpecho" />
            <BotonesCopiar text="!eltimer" />
            <BotonesCopiar text="!empalmo" />
            <BotonesCopiar text="!yaesta" />
            <BotonesCopiar text="!ese" />
            <BotonesCopiar text="!estas" />
            <BotonesCopiar text="!fin" />
            <BotonesCopiar text="!friend" />
            <BotonesCopiar text="!forro" />
            <BotonesCopiar text="!grash" />
            <BotonesCopiar text="!hicistes" />
            <BotonesCopiar text="!hacelo" />
            <BotonesCopiar text="!ilegal" />
            <BotonesCopiar text="!lapala" />
            <BotonesCopiar text="!lapava" />
            <BotonesCopiar text="!lapaloma" />
            <BotonesCopiar text="!pantallita" />
            <BotonesCopiar text="!lapastillita" />
            <BotonesCopiar text="!lautaro" />
            <BotonesCopiar text="!licuado" />
            <BotonesCopiar text="!llorar" />
            <BotonesCopiar text="!luooz" />
            <BotonesCopiar text="!mate" />
            <BotonesCopiar text="!magui" />
            <BotonesCopiar text="!menor" />
            <BotonesCopiar text="!mami" />
            <BotonesCopiar text="!meter" />
            <BotonesCopiar text="!micho" />
            <BotonesCopiar text="!mira" />
            <BotonesCopiar text="!nojuego" />
            <BotonesCopiar text="!nose" />
            <BotonesCopiar text="!note" />
            <BotonesCopiar text="!optimo" />
            <BotonesCopiar text="!papi" />
            <BotonesCopiar text="!pelotudismo" />
            <BotonesCopiar text="!pongo" />
            <BotonesCopiar text="!pqno" />
            <BotonesCopiar text="!puntitos" />
            <BotonesCopiar text="!quienes" />
            <BotonesCopiar text="!rechazo" />
            <BotonesCopiar text="!risa" />
            <BotonesCopiar text="!regalar" />
            <BotonesCopiar text="!jojo" />
            <BotonesCopiar text="!jugar" />
            <BotonesCopiar text="!rodilla" />
            <BotonesCopiar text="!rojo" />
            <BotonesCopiar text="!sexo" />
            <BotonesCopiar text="!sorete" />
            <BotonesCopiar text="!temazo" />
            <BotonesCopiar text="!temazo1" />
            <BotonesCopiar text="!tercermundista" />
            <BotonesCopiar text="!tere1" />
            <BotonesCopiar text="!tere2" />
            <BotonesCopiar text="!tere3" />
            <BotonesCopiar text="!tere4" />
            <BotonesCopiar text="!tuki" />
            <BotonesCopiar text="!tuki1" />
            <BotonesCopiar text="!tuki2" />
            <BotonesCopiar text="!verde" />
            <BotonesCopiar text="!var" />
            <BotonesCopiar text="!usted" />
            <BotonesCopiar text="!unite" />
            <BotonesCopiar text="!unite2" />
            <BotonesCopiar text="!viernes" />
            <BotonesCopiar text="!volví" />
            <BotonesCopiar text="!misamores" />
            <BotonesCopiar text="!qpesado" />
            <BotonesCopiar text="!juancarlos" />
            <BotonesCopiar text="!avisaron" />
            <BotonesCopiar text="!chisme" />
            <BotonesCopiar text="!acomerla" />
            <BotonesCopiar text="!empanada" />
            <BotonesCopiar text="!fenomenal" />
            <BotonesCopiar text="!haytiempo" />
            <BotonesCopiar text="!hijo" />
            <BotonesCopiar text="!marcho" />
            <BotonesCopiar text="!precoz" />
            <BotonesCopiar text="!sangre" />

          </ul>
          <BotonesCategoria />
          <h1 className="text-center funcionalidadesTitulo" id="interaccion"> {`>`} INTERACCIONES </h1>
          <ul className="list-group lista-grupo funcionalidades">
            <BotonesCopiar text="!amor" />
            <BotonesCopiar text="!bye" />
            <BotonesCopiar text="!abrachetada" />
            <BotonesCopiar text="!pin" />
            <BotonesCopiar text="!dance" />
            <BotonesCopiar text="!derecho" />
            <BotonesCopiar text="!kiss" />
            <BotonesCopiar text="!hug" />
            <BotonesCopiar text="!notelapuedocreer" />
            <BotonesCopiar text="!wisky" />
            <BotonesCopiar text="!playlist" />
            <BotonesCopiar text="!fin" />
            <BotonesCopiar text="!ese" />
            <BotonesCopiar text="!usted" />
            <BotonesCopiar text="!nojuego" />
            <BotonesCopiar text="!chipapi" />
          </ul>
          <BotonesCategoria />
          <h1 className="text-center funcionalidadesTitulo" id="acciones"> {`>`} ACCIONES </h1>
          <ul className="list-group lista-grupo funcionalidades">
            <BotonesCopiar text="!baño" />
            <BotonesCopiar text="!calentar" />
            <BotonesCopiar text="!cenar" />
            <BotonesCopiar text="!almorzar" />
            <BotonesCopiar text="!desayunar" />
            <BotonesCopiar text="!merendar" />
            <BotonesCopiar text="!dientes" />
            <BotonesCopiar text="!ducha" />
            <BotonesCopiar text="!entrenar" />
            <BotonesCopiar text="!siesta" />
            <BotonesCopiar text="!unlurk" />
            <BotonesCopiar text="!cocina" />
            <BotonesCopiar text="!lavadora" />
            <BotonesCopiar text="!trabajar" />
            <BotonesCopiar text="!estudiar" />
            <BotonesCopiar text="!meditar" />
            <BotonesCopiar text="!organizar" />
            <BotonesCopiar text="!compras" />
            <BotonesCopiar text="!estirar" />
          </ul>
          <BotonesCategoria />
          <h1 className="text-center funcionalidadesTitulo" id="bebidas"> {`>`} BEBIDAS O INFUSIONES </h1>
          <ul className="list-group lista-grupo funcionalidades">
            <BotonesCopiar text="!mate" />
            <BotonesCopiar text="!té" />
            <BotonesCopiar text="!techai" />
            <BotonesCopiar text="!agua" />
            <BotonesCopiar text="!café" />
            <BotonesCopiar text="!matec" />
            <BotonesCopiar text="!tereré" />
          </ul>
          <BotonesCategoria />
        </div>
      </div >

    </>
  )
}

export default Comandos
