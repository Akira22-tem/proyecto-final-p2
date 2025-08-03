import React from 'react';

function BarraNavegacion({
  modoOscuro,
  alternarModoOscuro,
  mostrarFormulario,
}) {
  // Manejar clic en nuevo contacto
  const manejarNuevoContacto = () => {
    mostrarFormulario();
  };

  // Manejar alternancia de modo oscuro
  const manejarCambioModo = () => {
    alternarModoOscuro();
  };




  

}
export default BarraNavegacion;