import React from 'react';

function FiltrosOrdenacion({
  ordenAscendente,
  onCambiarOrden,
  letraFiltro,
  onCambiarLetraFiltro,
  letrasDisponibles,
  totalContactos,
  modoOscuro,
}) {
  // Alternar orden alfabético
  const alternarOrden = () => {
    onCambiarOrden(!ordenAscendente);
  };

  // Manejar cambio de filtro por letra
  const manejarCambioLetra = (e) => {
    onCambiarLetraFiltro(e.target.value);
  };

  // Limpiar filtro de letra
  const limpiarFiltroLetra = () => {
    onCambiarLetraFiltro('');
  }; }