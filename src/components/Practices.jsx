import React from 'react';

function PracticesComponent() {
    const practices = [
        {
            id: 1,
            title: 'Revisión de Código',
            description:
                'Análisis sistemático del código escrito por otros desarrolladores para detectar errores, mejorar la calidad y compartir conocimiento.',
        },
        {
            id: 2,
            icon: '✔️',
            title: 'Pruebas Unitarias',
            description:
                'Validación de componentes individuales del código para asegurar que cada unidad funciona correctamente de forma aislada.',
        },
        {
            id: 3,
            title: 'Control de Versiones',
            description:
                'Uso de Git para rastrear cambios en el código, colaborar en equipo y mantener un historial completo del proyecto.',
        },
        {
            id: 4,
            title: 'Documentación Técnica',
            description:
                'Registro claro y estructurado de la arquitectura, funcionalidades y procesos del software para facilitar el mantenimiento.',
        },
        {
            id: 5,
            title: 'Estándares de Codificación',
            description:
                'Aplicación de normas consistentes en la escritura del código para mejorar legibilidad, mantenibilidad y colaboración.',
        },
        {
            id: 6,
            title: 'Análisis Estático',
            description:
                'Herramientas automáticas que evalúan el código sin ejecutarlo para detectar vulnerabilidades y problemas potenciales.',
        },
    ];

    return (
        <section className="practices">
            <div className="container">
                <h2>Buenas Prácticas de Calidad</h2>
                <p className="section-description">
                    Las buenas prácticas de calidad son metodologías y procesos probados que se
                    aplican en el desarrollo de software para garantizar que el producto sea confiable,
                    mantenible y seguro. Estas prácticas reducen defectos, mejoran la experiencia del
                    usuario y facilitan el trabajo en equipo.
                </p>
                <div className="practices-grid">
                    {practices.map((practice) => (
                        <div key={practice.id} className="practice-card">
                            <h3>{practice.title}</h3>
                            <p>{practice.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default PracticesComponent;