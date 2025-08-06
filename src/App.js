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

  return (
    <div>
      <h1>agenda guerrera cargando...</h1>
    </div>
  );
}

export default App;
