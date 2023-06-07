import "./Formulario.css"
import CampoTexto from "../campoTexto"  //Cuando tiene de nombre index el archivo es por defecto y se puede omitir el nombre

const Formulario = () => {
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresa Nombre Completo" />
            <CampoTexto titulo="Puesto" placeholder="Ingresa Puesto" />
            <CampoTexto titulo="Foto" placeholder="Ingresa enlace de Foto" />
        </form>
    </section>
}

export default Formulario