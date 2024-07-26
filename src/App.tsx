import React from 'react';
import { CuadradoArea } from './Componentes/Area';
import { SumarArreglo } from './Componentes/ArregloSumado';
import { ArregloDividido } from './Componentes/ArregloDividido';
import ContadorConUseState from './Componentes/UseStateContador';
import ListaEstudiantes from './Componentes/ListaEstudiantes';

const App: React.FC = () => {
  const longitudLado = 5;

  return (
    <div className="mt-2">
      <h1>Actividad Autónoma</h1>
      <CuadradoArea longitudLado={longitudLado} />
      <SumarArreglo />
      <ArregloDividido />
      <ContadorConUseState />
      <ListaEstudiantes />
    </div>
  );
};

export default App;
