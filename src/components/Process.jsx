import React from 'react';

function ProcessComponent() {
    return (
        <section className="process">
            <div className="container">
                <h2>Proceso Personal de Desarrollo</h2>
                <div className="process-content">
                    <div className="process-steps">
                        <h3>Fases del Proceso de Desarrollo</h3>
                        <div className="steps-container">
                            <div className="step">
                                <div className="step-number">1</div>
                                <h4>Análisis</h4>
                                <p>
                                    Comprensión profunda de los requerimientos y definición de objetivos de
                                    calidad.
                                </p>
                            </div>
                            <div className="step">
                                <div className="step-number">2</div>
                                <h4>Diseño</h4>
                                <p>
                                    Creación de la arquitectura considerando estándares de codificación y
                                    mejores prácticas.
                                </p>
                            </div>
                            <div className="step">
                                <div className="step-number">3</div>
                                <h4>Desarrollo</h4>
                                <p>
                                    Implementación del código aplicando revisiones continuas y control de
                                    versiones.
                                </p>
                            </div>
                            <div className="step">
                                <div className="step-number">4</div>
                                <h4>Pruebas</h4>
                                <p>
                                    Ejecución de pruebas unitarias, integración y casos de prueba
                                    documentados.
                                </p>
                            </div>
                            <div className="step">
                                <div className="step-number">5</div>
                                <h4>Documentación</h4>
                                <p>
                                    Registro completo de procesos, decisiones técnicas y guías de uso del
                                    software.
                                </p>
                            </div>
                            <div className="step">
                                <div className="step-number">6</div>
                                <h4>Validación</h4>
                                <p>
                                    Verificación final de que se cumplen todos los instrumentos de calidad y
                                    estándares.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="process-description">
                        <h3>Aplicación de Instrumentos</h3>
                        <p>
                            En el proceso personal de desarrollo, se aplicaron de forma integrada los
                            instrumentos de calidad en cada fase:
                        </p>
                        <ul className="process-list">
                            <li>
                                <strong>Durante el análisis:</strong> Se utilizó el formato de revisión de
                                requerimientos para validar cada necesidad del proyecto.
                            </li>
                            <li>
                                <strong>En el desarrollo:</strong> Se aplicaron estándares de codificación y
                                se realizaron revisiones de código para asegurar la calidad del código.
                            </li>
                            <li>
                                <strong>En pruebas:</strong> Se ejecutaron casos de prueba documentados y se
                                registraron defectos encontrados.
                            </li>
                            <li>
                                <strong>En validación:</strong> Se aplicó la lista de chequeo de calidad
                                para confirmar el cumplimiento de estándares.
                            </li>
                            <li>
                                <strong>Continuamente:</strong> Se mantuvo control de versiones en Git para
                                rastrear todos los cambios realizados.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ProcessComponent;