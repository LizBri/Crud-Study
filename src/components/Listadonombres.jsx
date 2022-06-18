import React, { useState } from "react";
import uniqid from "uniqid";

const ListadoNombres = () =>{

    const [nombre, setNombre] = useState('');
    const [listaNombres, setListaNombres] = useState([]);

    const addNombre= (e)=>{
        e.preventDefault();
        const nuevoNombre={
            id:uniqid(),
            tituloNombre:nombre
        }
        setListaNombres([...listaNombres, nuevoNombre]);
        setNombre("");
    }


    return(
        <div>
            <h2>Aplicacion CRUD BASICO</h2>
            <div className="row">
                <div className="col">
                    <h2>Listado de nombres</h2>
                    <ul className="list-group">
                        {
                            listaNombres.map( item =>
                                <li key="{item.id}" className="list-group-item">{item.tituloNombre}</li>
                                )
                        }
                    </ul>
                </div>
                <div className="col">
                    <h2>Formulario para agregar nombres</h2>
                    <form onSubmit={(e)=> addNombre(e)} className="form-group">
                        
                        <input onChange={(e)=>{setNombre(e.target.value)}}
                               className="form-control mb-3" 
                               type="text" 
                               placeholder="Introduce el nombre"
                               value={nombre}/>

                        <input className="btn btn-primary btn-block"
                               type="submit" 
                               value="Registrar nombre"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ListadoNombres;