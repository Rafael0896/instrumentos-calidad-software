import React, { useState } from 'react';

function HeaderComponent() {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo">
                    <h1>Instrumentos de Calidad de Software</h1>
                    <p className="subtitle">
                        Buenas prácticas aplicadas al desarrollo de software con enfoque en calidad
                    </p>
                </div>
                <nav className="nav">
                    <button
                        className="menu-toggle"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </button>
                    <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                        <li>
                            <button onClick={() => scrollToSection('header')}>Inicio</button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('practices')}>
                                Buenas Prácticas
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('instruments')}>
                                Instrumentos
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('process')}>
                                Proceso Personal
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('conclusions')}>
                                Conclusiones
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default HeaderComponent;