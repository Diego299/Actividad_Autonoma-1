
import React from 'react';

const sumarElementos = (numeros: number[]): number => {
  return numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
};

export const SumarArreglo: React.FC = () => {
  const numeros = [2, 2, 2, 2, 2];
  const suma = sumarElementos(numeros);

  return (
    <div>
      <h2>Suma de los Elementos del Arreglo</h2>
      <p>Arreglo: {numeros.join(', ')}</p>
      <p>Suma: {suma}</p>
    </div>
  );
};
