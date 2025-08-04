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

    // Estado para errores de validación
  const [errores, setErrores] = useState({});

  // Cargar datos del contacto si está editando
  useEffect(() => {
    if (contactoEditando) {
      setDatosFormulario({
        nombre: contactoEditando.nombre,
        email: contactoEditando.email,
        telefono: contactoEditando.telefono,
        direccion: contactoEditando.direccion,
        foto: contactoEditando.foto || null,
        fotoUrl: contactoEditando.fotoUrl || '',
      });
    } else {
      setDatosFormulario({
        nombre: '',
        email: '',
        telefono: '',
        direccion: '',
        foto: null,
        fotoUrl: '',
      });
    }
    setErrores({});
  }, [contactoEditando]);



export default FormularioContacto;