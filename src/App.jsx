import React, { useState } from 'react';
import Header from './components/Header';
import Practices from './components/Practices';
import Instruments from './components/Instruments';
import Process from './components/Process';

// Componente principal de la aplicación
export default function App() {
    return (
        <div className="app">
            <Header/>
            <main>
                <section id="practices">
                    <Practices/>
                </section>
                <section id="instruments">
                    <Instruments/>
                </section>
                <section id="process">
                    <Process/>
                </section>
            </main>
        </div>
    );
}