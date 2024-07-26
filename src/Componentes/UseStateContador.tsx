import { useState } from "react"

export const ContadorConUseState = () => {
  // Hook useState: cambiar el estado de un valor o un componente
  const [contador, setContador] = useState<number>(0); // Valor inicial

  // Función que se encarga de cambiar el contador
  const actualizarContador = (incremento: number) => {
    // Llamar a la función del useState
    setContador(contador + incremento);
  }

  return (
    <div>
      <h3>Contador: <small>{contador}</small></h3>
      <button 
        className="btn btn-primary"
        onClick={() => actualizarContador(5)}
      >
        +5
      </button>
      &nbsp;
      <button 
        className="btn btn-primary"
        onClick={() => actualizarContador(-5)}
      > 
        -5
      </button>
    </div>
  )
}

export default ContadorConUseState;
