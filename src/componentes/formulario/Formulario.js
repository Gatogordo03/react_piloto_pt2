import "./Formulario.css"
import CampoTexto from "../campoTexto"  //Cuando tiene de nombre index el archivo es por defecto y se puede omitir el nombre
import ListaOpciones from "../listaOpciones"
import Boton from "../boton"

const Formulario = () => {

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("Manejar Envio", e);
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresa Nombre Completo" />
            <CampoTexto titulo="Puesto" placeholder="Ingresa Puesto" />
            <CampoTexto titulo="Foto" placeholder="Ingresa enlace de Foto" />
            <ListaOpciones />
            <Boton>Crear</Boton>
        </form>
    </section>
}

export default Formulario