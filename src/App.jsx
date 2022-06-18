import React from 'react';
import ListadoNombres from './components/Listadonombres';
import Bienvenida from './components/Bienvenida';
import Cards from './components/Cards';

function App() {
  return (
    <div className="container">
      <h1>Componentes y Crud</h1>

      <Bienvenida nombre="Liz"/>
      <Bienvenida nombre="Emma"/>
      <Bienvenida nombre="Nicolas"/>
      <Bienvenida nombre="Thor"/>
      <hr/>
      <br/>
      <ListadoNombres/>
      <hr/>

      <h3> Propiedades de Componentes</h3>
      <br/>
      <div className='row'>
        <div className='col'>
          <Cards/>

        </div>

      </div>





    </div>
  );
}

export default App;
