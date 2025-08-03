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
  }; 

  // Estilos temática guerrera
  const estilosGuerreros = {
    contenedorPrincipal: {
        background: modoOscuro
        ? 'linear-gradient(135deg, #1f2937 0%, #111827 100%)'
        : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        borderRadius: '18px',
        padding: '25px',
        border: '3px solid #dc2626',
        boxShadow: modoOscuro
        ? '0 8px 30px rgba(220, 38, 38, 0.4)'
        : '0 8px 30px rgba(220, 38, 38, 0.2)',
      marginBottom: '30px',
    },
    botonOrden: {
      background: ordenAscendente
        ? 'linear-gradient(135deg, #dc2626 0%, #991b1c 100%)'
        : 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
        border: '3px solid #fbbf24',
        color: ordenAscendente ? '#ffffff' : '#1f2937',
        fontWeight: 'bold',
        borderRadius: '12px',
        padding: '15px 20px',
        fontSize: '16px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        boxShadow: ordenAscendente
        ? '0 6px 20px rgba(220, 38, 38, 0.5)'
        : '0 6px 20px rgba(251, 191, 36, 0.5)',
        transition: 'all 0.3s ease',
        width: '100%',
    },
    selectFiltro: {
        border: '3px solid #374151',
        borderRadius: '12px',
        padding: '15px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        background: modoOscuro
        ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
        : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        color: modoOscuro ? '#f9fafb' : '#1f2937',
        transition: 'all 0.3s ease',
        width: '100%',
    },
    botonLimpiar: {
        background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
        border: '3px solid #9ca3af',
        color: '#ffffff',
        fontWeight: 'bold',
        borderRadius: '12px',
        padding: '15px 20px',
        fontSize: '14px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        boxShadow: '0 4px 15px rgba(107, 114, 128, 0.4)',
        transition: 'all 0.3s ease',
        width: '100%',
    },
    alertaResultados: {
        background: modoOscuro
        ? 'linear-gradient(135deg, #374151 0%, #1f2937 100%)'
        : 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
        border: '3px solid #dc2626',
        borderRadius: '15px',
        color: modoOscuro ? '#fbbf24' : '#1f2937',
        fontWeight: 'bold',
        fontSize: '16px',
        textAlign: 'center',
        padding: '15px',
        boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
    },
    titulo: {
        background: 'linear-gradient(135deg, #dc2626, #fbbf24)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 'bold',
        fontSize: '18px',
        textAlign: 'center',
        marginBottom: '20px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
    },
    };
        

}