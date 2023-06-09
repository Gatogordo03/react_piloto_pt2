import "./ListaOpciones.css"

const ListaOpciones = (props) => {


    const equipos = [
        "Programacion",
        "Front End",
        "Data Science",
        "DevOps",
        "UX y Diseño",
        "Movil",
        "Inovación y Gestión",
    ];

    const manejarCambio = (e) => {
        console.log("manejar cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="listaOpciones">
        <label>Equipo</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones