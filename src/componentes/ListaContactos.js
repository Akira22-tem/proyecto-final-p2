import React from 'react';

function ListaContactos({

  contactos,
  totalContactosOriginales,
  onEditarContacto,
  onEliminarContacto,
  modoOscuro,

}){

    const obtenerIniciales = (nombre) => {
    return nombre.charAt(0).toUpperCase();
  };

    const formatearFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);
    return fecha.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

}