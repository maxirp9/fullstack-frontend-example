import React, { useState } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'

export default function Formulario() {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [salario, setSalario] = useState('')

    const registrar=async(e)=>{
        e.preventDefault();
        const NuevoEmpleado={nombre,apellido,salario}
        const respuesta=await Axios.post('http://localhost:4000/api', NuevoEmpleado)
        const mensaje = respuesta.data.mensaje;
        Swal.fire({            
            icon: 'success',
            title: mensaje,
            showConfirmButton: false,
            timer: 1500
          })
        limpiar()
    }
    const limpiar = () => {       
        setNombre('')
        setApellido('')
        setSalario('')
    }
    return (
        <div className="container col-md-3 mt-4">
            <form onSubmit={registrar}>
                <div className="mb-3">                    
                    <input type="text" className="form-control" required placeholder="Nombre" onChange={e=>setNombre(e.target.value)} value={nombre}/>                    
                </div>
                <div className="mb-3">                    
                    <input type="text" className="form-control" required placeholder="Apellido" onChange={e=>setApellido(e.target.value)} value={apellido}/>                    
                </div>
                <div className="mb-3">                    
                    <input type="text" className="form-control" required placeholder="Salario" onChange={e=>setSalario(e.target.value)} value={salario}/>                    
                </div>                
                <button type="submit" className="btn btn-primary">Guardar</button>
               
            </form>
            <button onClick={limpiar} className="btn btn-primary">Limpiar</button>
        </div>
    )
}
