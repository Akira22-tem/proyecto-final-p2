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



  
  if (totalContactosOriginales === 0) {
    return (
      <div className="text-center py-5">
        <div className="mb-4">
          <svg width="150" height="150" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L3 7L12 12L21 7L12 2Z"
              fill={modoOscuro ? '#374151' : '#9ca3af'}
              stroke="#dc2626"
              strokeWidth="3"
            />
            <path
              d="M3 7V17C3 19 12 22 12 22S21 19 21 17V7"
              stroke="#dc2626"
              strokeWidth="3"
              fill="none"
            />
            <circle cx="12" cy="14" r="2" fill="#fbbf24" />
          </svg>
        </div>
        <h2
          style={{
            color: '#dc2626',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(220, 38, 38, 0.3)',
            marginBottom: '20px',
          }}
        >
          🏰 NO HAY GUERREROS RECLUTADOS
        </h2>
        <p
          style={{
            fontSize: '18px',
            color: modoOscuro ? '#fbbf24' : '#dc2626',
            fontWeight: 'bold',
          }}
        >
          ⚔️ Comienza tu ejército reclutando tu primer guerrero de élite
        </p>
      </div>
    );
  }
  


  if (contactos.length === 0) {
    return (
      <div className="text-center py-5">
        <div className="mb-4">
          <svg width="150" height="150" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke="#dc2626" strokeWidth="4" />
            <path d="m21 21-4.35-4.35" stroke="#fbbf24" strokeWidth="4" />
            <line
              x1="11"
              y1="8"
              x2="11"
              y2="14"
              stroke="#dc2626"
              strokeWidth="3"
            />
            <line
              x1="8"
              y1="11"
              x2="14"
              y2="11"
              stroke="#dc2626"
              strokeWidth="3"
            />
          </svg>
        </div>
        <h2
          style={{
            color: '#dc2626',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(220, 38, 38, 0.3)',
            marginBottom: '20px',
          }}
        >
          🔍 GUERREROS NO ENCONTRADOS
        </h2>
        <p
          style={{
            fontSize: '18px',
            color: modoOscuro ? '#fbbf24' : '#dc2626',
            fontWeight: 'bold',
          }}
        >
          ⚡ Ajusta los filtros de búsqueda para encontrar a tus guerreros
        </p>
      </div>
    );
  }



   if (contactos.length === 0) {
    return (
      <div className="text-center py-5">
        <div className="mb-4">
          <svg width="150" height="150" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke="#dc2626" strokeWidth="4" />
            <path d="m21 21-4.35-4.35" stroke="#fbbf24" strokeWidth="4" />
            <line
              x1="11"
              y1="8"
              x2="11"
              y2="14"
              stroke="#dc2626"
              strokeWidth="3"
            />
            <line
              x1="8"
              y1="11"
              x2="14"
              y2="11"
              stroke="#dc2626"
              strokeWidth="3"
            />
          </svg>
        </div>
        <h2
          style={{
            color: '#dc2626',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(220, 38, 38, 0.3)',
            marginBottom: '20px',
          }}
        >
          🔍 GUERREROS NO ENCONTRADOS
        </h2>
        <p
          style={{
            fontSize: '18px',
            color: modoOscuro ? '#fbbf24' : '#dc2626',
            fontWeight: 'bold',
          }}
        >
          ⚡ Ajusta los filtros de búsqueda para encontrar a tus guerreros
        </p>
      </div>
    );
  }

}

export default ListaContactos;