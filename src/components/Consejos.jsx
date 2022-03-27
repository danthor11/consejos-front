import react from "react"

export const Consejo = (props) => {

    return(
        <div className="
            flex flex-col p-5 border-2 border-solid  bg-slate-200 border-slate-600 rounded-md gap-3
            shadow-lg  hover:shadow-cyan-400 transition-shadow
            "
        >
            <h3>Nombre del consejo: <strong>{props.name}</strong></h3>
            <p>Pautado para el dia: <em>{props.meet_date}</em></p>
            <h6>Tipo de consejo: {props.type === "U" ?  "Universitario" : "Academico"}</h6>
        </div>
    )
}