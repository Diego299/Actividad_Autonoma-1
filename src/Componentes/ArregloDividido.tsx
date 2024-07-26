import React from 'react';

const dividirNumerosPorCinco = (valores: number[]): number[] => {
  return valores.map(valor => valor / 5);
};

// Función de división
export const ArregloDividido: React.FC = () => {
  const valoresOriginales = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  const valoresDivididos = dividirNumerosPorCinco(valoresOriginales);

  return (
    <div>
      <h2>Arreglo Original</h2>
      <p>{valoresOriginales.join(', ')}</p>
      <h2>Arreglo Dividido por 5</h2>
      <p>{valoresDivididos.join(', ')}</p>
    </div>
  );
};

export default ArregloDividido;
