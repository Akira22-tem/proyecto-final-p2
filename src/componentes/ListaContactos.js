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

  



  const estilosGuerreros = {
    tarjetaContacto: {
      background: modoOscuro
        ? 'linear-gradient(145deg, #1f2937 0%, #111827 50%, #1f2937 100%)'
        : 'linear-gradient(145deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)',
      border: '3px solid',
      borderColor: modoOscuro ? '#374151' : '#e5e7eb',
      borderRadius: '20px',
      boxShadow: modoOscuro
        ? '0 10px 30px rgba(0, 0, 0, 0.5)'
        : '0 10px 30px rgba(0, 0, 0, 0.15)',
      transition: 'all 0.4s ease',
      position: 'relative',
      overflow: 'hidden',
    },
    avatarGuerrero: {
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #dc2626 0%, #991b1c 100%)',
      border: '4px solid #fbbf24',
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#ffffff',
      textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
      boxShadow: '0 6px 20px rgba(220, 38, 38, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fotoGuerrero: {
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      border: '4px solid #fbbf24',
      objectFit: 'cover',
      boxShadow: '0 6px 20px rgba(220, 38, 38, 0.5)',
    },
    nombreGuerrero: {
      background: 'linear-gradient(135deg, #dc2626, #fbbf24)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: 'bold',
      fontSize: '1.3rem',
      textShadow: modoOscuro
        ? '1px 1px 2px rgba(255,255,255,0.1)'
        : '1px 1px 2px rgba(0,0,0,0.1)',
    },
    botonEditar: {
      background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
      border: '3px solid #dc2626',
      color: '#1f2937',
      fontWeight: 'bold',
      borderRadius: '10px',
      padding: '10px 14px',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(251, 191, 36, 0.4)',
    },
    botonEliminar: {
      background: 'linear-gradient(135deg, #dc2626 0%, #991b1c 100%)',
      border: '3px solid #fbbf24',
      color: '#ffffff',
      fontWeight: 'bold',
      borderRadius: '10px',
      padding: '10px 14px',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(220, 38, 38, 0.4)',
    },
    footerTarjeta: {
      background: modoOscuro
        ? 'linear-gradient(135deg, #374151 0%, #1f2937 100%)'
        : 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
      borderTop: '3px solid #fbbf24',
      padding: '15px',
    },
    etiquetaCampo: {
      color: modoOscuro ? '#fbbf24' : '#dc2626',
      fontWeight: 'bold',
      fontSize: '14px',
    },
    contenedorInfo: {
      background: modoOscuro
        ? 'rgba(220, 38, 38, 0.1)'
        : 'rgba(220, 38, 38, 0.05)',
      borderRadius: '10px',
      border: '2px solid rgba(220, 38, 38, 0.2)',
      padding: '12px',
      marginBottom: '12px',
      transition: 'all 0.3s ease',
    },
  };


}