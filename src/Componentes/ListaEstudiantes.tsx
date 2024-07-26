import React, { useState } from 'react';

type Estudiante = {
  nombre: string;
  edad: number;
  nota: number;
};

const ListaEstudiantes = () => {
  const [estudiantes] = useState<Estudiante[]>([
    { nombre: 'Diego', edad: 19, nota: 10 },
    { nombre: 'Matias', edad: 20, nota: 8 },
    { nombre: 'Edgar', edad: 18, nota: 9 },
  ]);

  // Calcular el promedio
  const obtenerPromedio = (estudiantes: Estudiante[]): number => {
    const totalNotas = estudiantes.reduce((suma, estudiante) => suma + estudiante.nota, 0);
    return totalNotas / estudiantes.length;
  };

  const promedio = obtenerPromedio(estudiantes);

  return (
    <div>
      <h2>Lista de Estudiantes</h2>
      <ul>
        {estudiantes.map((estudiante) => (
          <li key={estudiante.nombre}>
            {estudiante.nombre} - Edad: {estudiante.edad} - Nota: {estudiante.nota}
          </li>
        ))}
      </ul>
      <p>Promedio de notas: {promedio}</p>
    </div>
  );
};

export default ListaEstudiantes;
