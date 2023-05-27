import { useState } from "react"
import Swal from 'sweetalert2'//alertas 

export function Formulario() {

    const [inputNombre, setInputNombre] = useState(null)
    const [inputCorreo, setInputCorreo] = useState(null)
    const [inputHora, setInputHora] = useState(null)
    const [errores, setErrores] = useState({})

    function validarFormulario(evento) {
        evento.preventDefault()
        let listaErrores={}
        if(!inputNombre){
            listaErrores.errorNombre="El nombre es obligatorio"
        }
        if(!inputCorreo){
            listaErrores.errorCorreo="El correo es obligatorio"
        }
        if(!inputHora){
            listaErrores.errorHora="Debe seleccionar una hora"
        }
        setErrores(listaErrores)
        console.log(errores)

        // Swal.fire(
        //     'Good job!',
        //     'You clicked the button!',
        //     'success'
        // )
    }

    return (
        <>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <form onSubmit={validarFormulario}>
                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <i className="bi bi-person-circle"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nombre"
                                    onChange={function (evento) { setInputNombre(evento.target.value) }}
                                    placeholder="Username" />
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <i className="bi bi-envelope-open-heart"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="correo"
                                    onChange={function (evento) { setInputCorreo(evento.target.value) }}
                                    placeholder="Email" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">
                                    <i className="bi bi-hourglass-split"></i>
                                </span>
                                <select
                                    defaultValue={"DEFAULT"}
                                    className="form-select"
                                    id="hora"
                                    onChange={function (evento) { setInputHora(evento.target.value) }}
                                >


                                    <option vaue="DEFAULT">Selecciona una hora: </option>
                                    <option value="1">8:00 am</option>
                                    <option value="2">9:00 am</option>
                                    <option value="3">10:00 am</option>
                                </select>
                                <br />
                                <button type="submit" className="btn btn-primary w-100 mt-3" >AGENDAR</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}