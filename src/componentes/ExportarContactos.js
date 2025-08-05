import React from 'react';

function ExportarContactos({ contactos, modoOscuro }) {
  // Exportar a CSV
    const exportarCSV = () => {
    const headers = [
        'Nombre',
        'Email',
        'Telefono',
        'Direccion',
        'Fecha_Creacion',
    ];
    const csvContent = [
        headers.join(','),
        ...contactos.map((contacto) =>
        [
            `"${contacto.nombre}"`,
            `"${contacto.email}"`,
            `"${contacto.telefono}"`,
            `"${contacto.direccion}"`,
            `"${new Date(contacto.fechaCreacion).toLocaleDateString()}"`,
        ].join(',')
        ),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute(
        'download',
        `agenda_guerreros_${new Date().toISOString().split('T')[0]}.csv`
    );
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    };
}