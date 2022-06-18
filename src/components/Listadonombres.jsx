import React, { useState } from "react";
import uniqid from "uniqid";

const ListadoNombres = () =>{

    const [nombre, setNombre] = useState('');
    const [listaNombres, setListaNombres] = useState([]);
    const [modoEdicion, setModoEdicion] = useState(false);
    const [id, setId] = useState('');
    const [error, setError] = useState (null);

    const addNombre= (e)=>{
        e.preventDefault();
        if(!nombre.trim()){
            setError('El campo está vacío');
            return;
        }
        const nuevoNombre={
            id:uniqid(),
            tituloNombre:nombre
        }
        setListaNombres([...listaNombres, nuevoNombre]);
        setNombre("");
        setError(null);
    };

    const deleteNombre = (id) => {
        const nuevaArray = listaNombres.filter( item => item.id !== id);
        setListaNombres(nuevaArray);
    };

    const editar = (item) => {
        setModoEdicion(true);
        setNombre(item.tituloNombre);
        setId(item.id);
    };

    const editarNombre = (e) => {
        e.preventDefault()
        const nuevoArray = listaNombres.map( item => item.id === id ? { id:id, tituloNombre:nombre}: item); 
        setListaNombres(nuevoArray); 
        setModoEdicion(false);   
        setNombre("");
    }


    return(
        <div>
            <h2>Aplicacion CRUD BASICO</h2>
            <div className="row">
                <div className="col mt-2">
                    <h2>Listado de nombres</h2>
                    <ul className="list-group">
                        {
                            listaNombres.map( item =>
                                
                                <li key="{item.id}" className="list-group-item">
                                    {item.tituloNombre}

                                    <div className="btn-group">
                                    <button 
                                    className="btn btn-danger btn-sm float right"
                                    onClick={ () => {deleteNombre(item.id)}}>
                                        Borrar
                                    </button>
                                    <button 
                                    className="btn btn-info btn-sm float-rigth"
                                    onClick={ () => {editar(item)}}>
                                        Editar
                                    </button>
                                   </div>
                                
                                </li>
                                )
                        }
                    </ul>
                </div>
                <div className="col">
                    <h2>Formulario para agregar nombres</h2>

                    <form onSubmit={modoEdicion ? editarNombre : addNombre} className="form-group">
                        
                        <input onChange={(e)=>{setNombre(e.target.value)}}
                               className="form-control mb-3" 
                               type="text" 
                               placeholder="Introduce el nombre"
                               value={nombre}/>

                        <input className="btn btn-primary btn-sm btn-block"
                               type="submit" 
                               value={modoEdicion ? 'Editar nombre' : 'Registrar nombre'}
                               />
                    </form>
                    {
                        error!= null ? (
                            <div className="alert alert-danger mt-1">
                                {error}
                            </div>
                        ):
                        (
                            <div></div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ListadoNombres;