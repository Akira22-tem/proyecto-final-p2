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

     // Validar dirección
    if (!datosFormulario.direccion.trim()) {
      nuevosErrores.direccion = 'La dirección es obligatoria';
    } else if (datosFormulario.direccion.trim().length < 5) {
      nuevosErrores.direccion = 'La dirección debe tener al menos 5 caracteres';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  // Manejar cambios en los inputs
  const manejarCambioInput = (campo, valor) => {
    setDatosFormulario({
      ...datosFormulario,
      [campo]: valor,
    });

        // Limpiar error del campo cuando el usuario empiece a escribir
    if (errores[campo]) {
      setErrores({
        ...errores,
        [campo]: '',
      });
    }
  };

  // Manejar subida de foto
  const manejarCambioFoto = (e) => {
    const archivo = e.target.files[0];
    if (archivo) {
      // Verificar que sea una imagen
      if (!archivo.type.startsWith('image/')) {
        setErrores({
          ...errores,
          foto: 'Solo se permiten archivos de imagen',
        });
        return;
      }

      // Verificar tamaño (máximo 5MB)
      if (archivo.size > 5 * 1024 * 1024) {
        setErrores({
          ...errores,
          foto: 'La imagen debe ser menor a 5MB',
        });
        return;
      }

      // Convertir a base64 para almacenar en localStorage
      const reader = new FileReader();
      reader.onload = (e) => {
        setDatosFormulario({
          ...datosFormulario,
          foto: archivo,
          fotoUrl: e.target.result,
        });
        // Limpiar error de foto
        if (errores.foto) {
          setErrores({
            ...errores,
            foto: '',
          });
        }
      };
      reader.readAsDataURL(archivo);
    }
  };

  // Eliminar foto
  const eliminarFoto = () => {
    setDatosFormulario({
      ...datosFormulario,
      foto: null,
      fotoUrl: '',
    });
  };

  // Manejar envío del formulario
  const manejarEnvio = (e) => {
    e.preventDefault();

    if (validarFormulario()) {
      const contactoParaGuardar = contactoEditando
        ? { ...datosFormulario, id: contactoEditando.id }
        : datosFormulario;

      onGuardarContacto(contactoParaGuardar);

      // Limpiar formulario
      setDatosFormulario({
        nombre: '',
        email: '',
        telefono: '',
        direccion: '',
        foto: null,
        fotoUrl: '',
      });
      setErrores({});
    }
  };

  
export default FormularioContacto;