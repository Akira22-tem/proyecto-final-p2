import React, { useState, useEffect } from 'react';

function FormularioContacto({
  contactoEditando,
  onGuardarContacto,
  onCancelar,
  modoOscuro,
}){
  // Estados del formulario
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    foto: null,
    fotoUrl: '',
  });



export default FormularioContacto;