import React from 'react';

interface PropiedadesCuadrado {
  longitudLado: number;
}

export const CuadradoArea: React.FC<PropiedadesCuadrado> = ({ longitudLado }) => {
    
  const obtenerArea = (longitudLado: number): number => {
    return longitudLado * longitudLado;
  };

  const area = obtenerArea(longitudLado);

  return (
    <div>
      <h2>Área del Cuadrado</h2>
      <p>El lado del cuadrado es: {longitudLado}</p>
      <p>El área del cuadrado es: {area}</p>
    </div>
  );
};
