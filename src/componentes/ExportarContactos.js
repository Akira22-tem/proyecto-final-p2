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

// Exportar a JSON 
const exportarJSON = () => {
    const datosExportar = {
        agenda_guerreros: contactos,
        total_guerreros: contactos.length,
        fecha_exportacion: new Date().toISOString(),
        version: '1.0',
    };

    const jsonContent = JSON.stringify(datosExportar, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute(
        'download',
        `agenda_guerreros_${new Date().toISOString().split('T')[0]}.json`
    );
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

}