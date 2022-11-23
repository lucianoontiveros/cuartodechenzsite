import BotonesCategoria from "../components/BotonesCategorias"
import BotonesCopiar from "../components/BotonesCopiar"

const Comandos = () => { 


    return(
        <>  
            
            <div className="container pt-5 contenedorComandos">
                <div className="titulo">
                    <h1 className="text-center"> COMANDOS PARA TWITCH</h1>
                </div>
                <BotonesCategoria />    
                <div className="container contenedorFuncionalidades">
                    <h1 className="text-center funcionalidadesTitulo" id="funcionalidades"> > FUNCIONALIDADES DE BRUNITO</h1>
                    <ul className="list-group lista-grupo funcionalidades">
                         <BotonesCopiar text ="!tarea"/>
                         <BotonesCopiar text ="!lista"/>
                         <BotonesCopiar text ="!delete"/>
                         <BotonesCopiar text ="!pickup "/>
                         <BotonesCopiar text ="!estado"/>
                         <BotonesCopiar text ="!focus 25"/>
                         <BotonesCopiar text ="!actividad"/>
                         <BotonesCopiar text ="!signo"/>
                         <BotonesCopiar text ="!instagram"/>                        
                    </ul>
                    <BotonesCategoria />    
                    <h1 className="text-center funcionalidadesTitulo" id="informativos"> > INFORMATIVOS </h1>
                    <ul className="list-group lista-grupo funcionalidades">
                         <BotonesCopiar text ="!info"/>
                         <BotonesCopiar text ="!chenz"/>
                         <BotonesCopiar text ="!horario"/>
                         <BotonesCopiar text ="!discord"/>
                         <BotonesCopiar text ="!estudio"/>
                         <BotonesCopiar text ="!eneatipo"/>
                         <BotonesCopiar text ="!estudioe"/>
                         <BotonesCopiar text ="!infoe"/>
                         <BotonesCopiar text ="!forest"/>
                         <BotonesCopiar text ="!onlyfans"/>
                         <BotonesCopiar text ="!paseo"/>
                         <BotonesCopiar text ="!patricia"/>
                         <BotonesCopiar text ="!raid"/>
                         <BotonesCopiar text ="!reclamos"/>
                         <BotonesCopiar text ="!recomendados"/>
                         <BotonesCopiar text ="!redes"/>
                         <BotonesCopiar text ="!reglas"/>
                         <BotonesCopiar text ="!sentarse"/>                             
                    </ul>
                    <BotonesCategoria />
                    <h1 className="text-center funcionalidadesTitulo" id="sonidos"> > Sonidos e imagenes </h1>
                    <ul className="list-group lista-grupo funcionalidades">
                         <BotonesCopiar text ="!derecho"/>
                         <BotonesCopiar text ="!tastiste"/>
                         <BotonesCopiar text ="!pin"/>
                         <BotonesCopiar text ="!lee"/>
                         <BotonesCopiar text ="!aplausos"/>
                         <BotonesCopiar text ="!lasalita"/>
                         <BotonesCopiar text ="!estudioe"/>
                         <BotonesCopiar text ="!lachancla"/>
                         <BotonesCopiar text ="!forest"/>
                         <BotonesCopiar text ="!zarpado"/>
                         <BotonesCopiar text ="!grash"/>
                         <BotonesCopiar text ="!khe"/>
                         <BotonesCopiar text ="!dancecat"/>
                         <BotonesCopiar text ="!ex"/>
                         <BotonesCopiar text ="!superar"/>
                         <BotonesCopiar text ="!ola"/>
                         <BotonesCopiar text ="!ponele"/>
                         <BotonesCopiar text ="!quete"/> 
                         <BotonesCopiar text ="!lobo"/>
                         <BotonesCopiar text ="!calmate"/>
                         <BotonesCopiar text ="!nonos"/>                            
                         <BotonesCopiar text ="!ayuda"/>
                         <BotonesCopiar text ="!tequiero"/>
                         <BotonesCopiar text ="!estirar"/>
                         <BotonesCopiar text ="!sahumerio"/>
                         <BotonesCopiar text ="!tecago"/>
                         <BotonesCopiar text ="!sali"/>
                         <BotonesCopiar text ="!besitos"/>
                         <BotonesCopiar text ="!plantitas"/>
                         <BotonesCopiar text ="!para"/>
                         <BotonesCopiar text ="!yaesta"/>
                         <BotonesCopiar text ="!belleza"/>
                         <BotonesCopiar text ="!donando"/>
                         <BotonesCopiar text ="!luooz"/>
                         <BotonesCopiar text ="!pqno"/>
                         <BotonesCopiar text ="!regalar"/>
                         <BotonesCopiar text ="!risa"/>
                         <BotonesCopiar text ="!rojo"/>
                         <BotonesCopiar text ="!sorete"/>
                         <BotonesCopiar text ="!mami"/>
                         <BotonesCopiar text ="!papi"/>
                         <BotonesCopiar text ="!pelotudismo"/>
                         <BotonesCopiar text ="!tercermundi"/>
                         <BotonesCopiar text ="!nojuego"/>
                         <BotonesCopiar text ="!ese"/>
                    </ul>
                    <BotonesCategoria />
                    <h1 className="text-center funcionalidadesTitulo" id="interaccion"> > Sonidos e imagenes </h1>
                    <ul className="list-group lista-grupo funcionalidades">
                         <BotonesCopiar text ="!amor"/>
                         <BotonesCopiar text ="!bye"/>
                         <BotonesCopiar text ="!pin"/>
                         <BotonesCopiar text ="!dance"/>
                         <BotonesCopiar text ="!derecho"/>
                         <BotonesCopiar text ="!kiss"/>
                         <BotonesCopiar text ="!hug"/>
                         <BotonesCopiar text ="!notelapuedocreer"/>
                         <BotonesCopiar text ="!wisky"/>
                         <BotonesCopiar text ="!playlist"/>
                    </ul> 
                    <BotonesCategoria />   
                </div> 
            </div>
                
        </>
    )
}

 export default Comandos