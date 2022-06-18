import React from 'react';
import ListadoNombres from './components/Listadonombres';
import Bienvenida from './components/Bienvenida';

function App() {
  return (
    <div className="container">
      <h1>Componentes y Crud</h1>

      <Bienvenida nombre="Liz"/>
      <Bienvenida nombre="Emma"/>
      <Bienvenida nombre="Nicolas"/>
      <Bienvenida nombre="Thor"/>

      <br/>
      <ListadoNombres/>
    </div>
  );
}

export default App;
