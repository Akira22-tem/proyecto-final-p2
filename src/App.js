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

  return (
    <div>
      <h1>agenda guerrera - contactos: {contactos.length}</h1>
      <button onClick={() => setMostrarFormulario(true)}>
        agregar guerrero
      </button>
      <button onClick={() => setModoOscuro(!modoOscuro)}>
        {modoOscuro ? 'modo claro' : 'modo oscuro'}
      </button>
    </div>
  );
}

export default App;
