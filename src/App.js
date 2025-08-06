import React, { useState, useEffect } from 'react';
import FormularioContacto from './componentes/FormularioContacto';
import ListaContactos from './componentes/ListaContactos';
import BusquedaContactos from './componentes/BusquedaContactos';
import FiltrosOrdenacion from './componentes/FiltrosOrdenacion';
import ModalEliminacion from './componentes/ModalEliminacion';
import BarraNavegacion from './componentes/BarraNavegacion';
import ExportarContactos from './componentes/ExportarContactos';

function App() {
  // estados principales
  const [contactos, setContactos] = useState([]);
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [ordenAscendente, setOrdenAscendente] = useState(true);
  const [letraFiltro, setLetraFiltro] = useState('');
  const [modoOscuro, setModoOscuro] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [contactoEditando, setContactoEditando] = useState(null);
  const [mostrarModalEliminacion, setMostrarModalEliminacion] = useState(false);
  const [contactoAEliminar, setContactoAEliminar] = useState(null);

  // cargar datos cuando se abre la app
  useEffect(() => {
    const contactosGuardados = localStorage.getItem('agendaContactosGuerrera');
    const modoOscuroGuardado = localStorage.getItem('modoOscuroGuerrero');

    if (contactosGuardados) {
      setContactos(JSON.parse(contactosGuardados));
    }

    if (modoOscuroGuardado) {
      setModoOscuro(JSON.parse(modoOscuroGuardado));
    }
  }, []);

  // guardar contactos cada vez que cambien
  useEffect(() => {
    localStorage.setItem('agendaContactosGuerrera', JSON.stringify(contactos));
  }, [contactos]);

  // guardar tema oscuro cuando cambie
  useEffect(() => {
    localStorage.setItem('modoOscuroGuerrero', JSON.stringify(modoOscuro));
    if (modoOscuro) {
      document.body.setAttribute('data-bs-theme', 'dark');
      document.body.style.background =
        'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)';
    } else {
      document.body.removeAttribute('data-bs-theme');
      document.body.style.background =
        'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f8fafc 100%)';
    }
  }, [modoOscuro]);

  // añadir guerrero nuevo
  const agregarContacto = (nuevoContacto) => {
    const contactoCompleto = {
      ...nuevoContacto,
      id: Date.now(),
      fechaCreacion: new Date().toISOString(),
    };
    setContactos([...contactos, contactoCompleto]);
    setMostrarFormulario(false);
  };

  // actualizar guerrero existente
  const editarContacto = (contactoActualizado) => {
    const contactosActualizados = contactos.map((contacto) =>
      contacto.id === contactoActualizado.id
        ? { ...contactoActualizado, fechaCreacion: contacto.fechaCreacion }
        : contacto
    );
    setContactos(contactosActualizados);
    setContactoEditando(null);
    setMostrarFormulario(false);
  };

  // preparar guerrero para expulsar
  const iniciarEliminacion = (contacto) => {
    setContactoAEliminar(contacto);
    setMostrarModalEliminacion(true);
  };

  // confirmar expulsion del guerrero
  const confirmarEliminacion = () => {
    if (contactoAEliminar) {
      setContactos(
        contactos.filter((contacto) => contacto.id !== contactoAEliminar.id)
      );
      setMostrarModalEliminacion(false);
      setContactoAEliminar(null);
    }
  };

  // cancelar expulsion
  const cancelarEliminacion = () => {
    setMostrarModalEliminacion(false);
    setContactoAEliminar(null);
  };

  // preparar guerrero para editar
  const prepararEdicion = (contacto) => {
    setContactoEditando(contacto);
    setMostrarFormulario(true);
  };

  // cancelar formulario
  const cancelarFormulario = () => {
    setMostrarFormulario(false);
    setContactoEditando(null);
  };

  // buscar guerreros por nombre o email
  const contactosFiltradosBusqueda = contactos.filter(
    (contacto) =>
      contacto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
      contacto.email.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );

  // ordenar y filtrar por letra
  const contactosFinales = contactosFiltradosBusqueda
    .filter(
      (contacto) =>
        letraFiltro === '' ||
        contacto.nombre.toLowerCase().startsWith(letraFiltro.toLowerCase())
    )
    .sort((a, b) => {
      if (ordenAscendente) {
        return a.nombre.localeCompare(b.nombre);
      } else {
        return b.nombre.localeCompare(a.nombre);
      }
    });

  // letras disponibles para filtro
  const letrasDisponibles = [
    ...new Set(
      contactos.map((contacto) => contacto.nombre.charAt(0).toUpperCase())
    ),
  ].sort();

  // cambiar modo oscuro
  const alternarModoOscuro = () => {
    setModoOscuro(!modoOscuro);
  };

  return (
    <div
      className="min-vh-100"
      style={{
        background: modoOscuro
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f8fafc 100%)',
        minHeight: '100vh',
      }}
    >
      <BarraNavegacion
        modoOscuro={modoOscuro}
        alternarModoOscuro={alternarModoOscuro}
        mostrarFormulario={() => setMostrarFormulario(true)}
      />

      <div className="container py-4">
        {mostrarFormulario && (
          <FormularioContacto
            contactoEditando={contactoEditando}
            onGuardarContacto={
              contactoEditando ? editarContacto : agregarContacto
            }
            onCancelar={cancelarFormulario}
            modoOscuro={modoOscuro}
          />
        )}

        <BusquedaContactos
          terminoBusqueda={terminoBusqueda}
          onCambiarBusqueda={setTerminoBusqueda}
          modoOscuro={modoOscuro}
        />

        <FiltrosOrdenacion
          ordenAscendente={ordenAscendente}
          onCambiarOrden={setOrdenAscendente}
          letraFiltro={letraFiltro}
          onCambiarLetraFiltro={setLetraFiltro}
          letrasDisponibles={letrasDisponibles}
          totalContactos={contactosFinales.length}
          modoOscuro={modoOscuro}
        />

        {contactos.length > 0 && (
          <ExportarContactos contactos={contactos} modoOscuro={modoOscuro} />
        )}

        <ListaContactos
          contactos={contactosFinales}
          totalContactosOriginales={contactos.length}
          onEditarContacto={prepararEdicion}
          onEliminarContacto={iniciarEliminacion}
          modoOscuro={modoOscuro}
        />
      </div>

      <ModalEliminacion
        mostrar={mostrarModalEliminacion}
        contacto={contactoAEliminar}
        onConfirmar={confirmarEliminacion}
        onCancelar={cancelarEliminacion}
        modoOscuro={modoOscuro}
      />
    </div>
  );
}

export default App;
