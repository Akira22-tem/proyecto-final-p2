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

// Función para validar el formulario
  const validarFormulario = () => {
    const nuevosErrores = {};

    // Validar nombre
    if (!datosFormulario.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio';
    } else if (datosFormulario.nombre.trim().length < 2) {
      nuevosErrores.nombre = 'El nombre debe tener al menos 2 caracteres';
    }

    // Validar email
    if (!datosFormulario.email.trim()) {
      nuevosErrores.email = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(datosFormulario.email)) {
      nuevosErrores.email = 'El formato del email no es válido';
    }

    // Validar teléfono
    if (!datosFormulario.telefono.trim()) {
      nuevosErrores.telefono = 'El teléfono es obligatorio';
    } else if (!/^\d{10}$/.test(datosFormulario.telefono.replace(/\D/g, ''))) {
      nuevosErrores.telefono = 'El teléfono debe tener exactamente 10 dígitos';
    }

export default FormularioContacto;