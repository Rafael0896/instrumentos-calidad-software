import React, { useState } from 'react';
import Header from './components/Header';
import Practices from './components/Practices';

// Componente principal de la aplicación
export default function App() {
    return (
        <div className="app">
            <Header/>
            <main>
                <section id="practices">
                    <Practices/>
                </section>
            </main>
        </div>
);
}