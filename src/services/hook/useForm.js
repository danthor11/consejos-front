

import React, { useState} from "react";


export const useForm = ( ) => {
    const [user, setUser] = useState("");
    const [consejo, setConsejo] = useState(null);
    const [ocupation, setOcupation] = useState("");

    const [consejero, setConsejero] = useState("");

    const [description, setDescription] = useState("")

    const [punto, setPunto] = useState("");
    const [decision, setDecision] = useState("");
    const [acuerdo, setAcuerdo] = useState("");

    
    const [instruccion, setInstruccion] = useState("");
    const [puntoSeleccionado, setPuntoSeleccionado] = useState("");

    return {
        user, setUser,
        consejo, setConsejo,
        ocupation,setOcupation,
        consejero, setConsejero,
        description, setDescription,
        punto, setPunto,
        decision, setDecision,
        acuerdo, setAcuerdo,
        instruccion, setInstruccion,
        puntoSeleccionado, setPuntoSeleccionado
    }
}