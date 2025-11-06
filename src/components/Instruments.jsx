import React, { useState } from 'react';

function InstrumentsComponent() {
    const [selectedInstrument, setSelectedInstrument] = useState(null);

    const instruments = [
        {
            id: 1,
            name: 'Lista de Chequeo de Calidad',
            description:
                'Herramienta que contiene criterios verificables para validar que el software cumple con los estándares de calidad establecidos.',
            example: [
                '✓ Código revisado y aprobado',
                '✓ Pruebas unitarias ejecutadas (cobertura > 80%)',
                '✓ Documentación actualizada',
                '✓ Sin errores críticos detectados',
                '✓ Performance validado',
                '✓ Accesibilidad verificada',
            ],
        },
        {
            id: 2,
            name: 'Formato de Revisión de Requerimientos',
            description:
                'Documento que permite revisar y validar que los requerimientos están completos, claros y son alcanzables técnicamente.',
            example: [
                'ID Requerimiento: REQ-001',
                'Descripción: Autenticación de usuario',
                'Prioridad: Alta',
                'Estado: Aprobado',
                'Criterios de Aceptación: ✓',
                'Riesgos: Bajo',
            ],
        },
        {
            id: 3,
            name: 'Registro de Defectos',
            description:
                'Base de datos centralizada que registra todos los errores encontrados, su severidad, estado y resolución durante el desarrollo.',
            example: [
                'ID: BUG-045',
                'Título: Error en validación de email',
                'Severidad: Media',
                'Estado: En Revisión',
                'Asignado a: Juan García',
                'Fecha: 2024-11-06',
            ],
        },
        {
            id: 4,
            name: 'Plantilla de Casos de Prueba',
            description:
                'Estructura estandarizada para documentar y ejecutar casos de prueba que validen todas las funcionalidades del software.',
            example: [
                'Caso: TC-012',
                'Módulo: Autenticación',
                'Entrada: Usuario: admin, Contraseña: 123456',
                'Resultado Esperado: Acceso concedido',
                'Resultado Real: Acceso concedido',
                'Estado: APROBADO',
            ],
        },
    ];

    return (
        <section className="instruments">
            <div className="container">
                <h2>Instrumentos de Calidad</h2>
                <p className="section-description">
                    Los instrumentos de calidad son herramientas y documentos que facilitan la
                    implementación y seguimiento de las buenas prácticas en todo el ciclo de desarrollo.
                </p>
                <div className="instruments-grid">
                    {instruments.map((instrument) => (
                        <div key={instrument.id} className="instrument-card">
                            <h3>{instrument.name}</h3>
                            <p>{instrument.description}</p>
                            <button
                                className="btn-example"
                                onClick={() => setSelectedInstrument(
                                    selectedInstrument?.id === instrument.id ? null : instrument
                                )}
                            >
                                {selectedInstrument?.id === instrument.id
                                    ? 'Ocultar Ejemplo'
                                    : 'Ver Ejemplo'}
                            </button>
                            {selectedInstrument?.id === instrument.id && (
                                <div className="instrument-example">
                                    <h4>Ejemplo:</h4>
                                    <ul>
                                        {instrument.example.map((line, idx) => (
                                            <li key={idx}>{line}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default InstrumentsComponent;