const BotonesCategoria = () => { 

    return(
        <>
            <div className="container comandosBotones"> 
                <a type="button" className="btn comandosBtn btn-primary" href="#funcionalidades">Funcionalidades</a>
                <a type="button" className="btn comandosBtn btn-warning" href="#informativos">Informativos </a>
                <a type="button" className="btn comandosBtn btn-secondary" href="#sonidos">Sonidos - imágenes </a>
                <a type="button" className="btn comandosBtn btn-success" href="#interaccion"> Interacción</a>
                <a type="button" className="btn comandosBtn btn-danger" href="#acciones">Acciones</a>
                <a type="button" className="btn comandosBtn btn-info" href="#bebidas">Bebidas </a>    
            </div>
        </>
    )
 }

 export default BotonesCategoria