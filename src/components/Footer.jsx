import React from 'react';

function FooterComponent() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-info">
                        <h4>Información del Proyecto</h4>
                        <p>
                            <strong>Estudiante:</strong> Rafael Álvarez
                        </p>
                        <p>
                            <strong>Programa:</strong> Analisis y Desarrollo de Software ADSO
                        </p>
                        <p>
                            <strong>Institución:</strong> Servicio Nacional de Aprendizaje (SENA)
                        </p>
                    </div>
                    <div className="footer-meta">
                        <h4>Documento</h4>
                        <p>
                            <strong>Año:</strong> {currentYear}
                        </p>
                        <p>
                            <strong>Versión:</strong> 1.0
                        </p>
                        <p>
                            <strong>Estado:</strong> Completo
                        </p>
                    </div>
                    <div className="footer-tech">
                        <h4>Tecnologías Utilizadas</h4>
                        <p>React • CSS Puro • JavaScript ES6+</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>
                        &copy; {currentYear} Instrumentos de Calidad de Software. Todos los derechos
                        reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
export default FooterComponent;