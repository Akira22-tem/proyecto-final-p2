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

  return (
    <div>
      <h1>agenda guerrera cargando... contactos: {contactos.length}</h1>
    </div>
  );
}

export default App;
