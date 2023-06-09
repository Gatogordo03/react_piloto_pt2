import "./ListaOpciones.css"

const ListaOpciones = () => {


    const equipos = [
        "Programacion",
        "Front End",
        "Data Science",
        "DevOps",
        "UX y Diseño",
        "Movil",
        "Inovación y Gestión",
    ];


    return <div className="listaOpciones">
        <label>Equipo</label>
        <select>
            {equipos.map((equipo, index) => <option key={index}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones