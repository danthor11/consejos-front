import react from "react"

export const Consejo = (props) => {
    return(
        <div className="
            flex flex-col p-5 border-2 border-solid  bg-slate-100 border-slate-600 rounded-md gap-3
            shadow-sm  hover:shadow-cyan-100 transition-shadow
            "
        >
            <h3 className="text-lg font-semibold text-slate-900">Nombre del consejo: <strong>{props.name}</strong></h3>
            <p className="text-lg text-slate-800">Pautado para el dia: <em>{props.meet_date}</em></p>
            <h6 className="text-lg text-slate-800">Tipo de consejo: {props.type === "U" ?  "Universitario" : "Academico"}</h6>
        </div>
    )
}