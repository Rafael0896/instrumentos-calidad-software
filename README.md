# 🧾 Instrumentos de Calidad de Software

## 📘 Descripción general
Este proyecto es una **landing page educativa e informativa** desarrollada con **React** que presenta los **instrumentos y buenas prácticas de calidad de software**.  
El objetivo principal es promover la aplicación de prácticas de calidad en el desarrollo de software a través de una interfaz moderna, ordenada y completamente responsive.

---

## 🧩 Estructura general del proyecto

```
instrumentos-calidad-software-main/
├── public/
│   ├── calidad-de-sotfware.png
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Practices.jsx
│   │   ├── Instruments.jsx
│   │   ├── Process.jsx
│   │   ├── Conclusions.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── counter.js
├── .gitignore
├── index.html
├── package.json
└── package-lock.json
```

---

## ⚙️ Requisitos técnicos

- **Framework:** React  
- **Estilos:** CSS puro (sin Tailwind, sin frameworks externos)  
- **Estructura modular:** Cada componente posee su propio archivo `.css`  
- **Diseño responsive:** Adaptable a pantallas móviles, tabletas y escritorio  
- **Tipografía:** Sans-serif limpia  
- **Paleta de colores:** Tonos azul, blanco y gris  

---

## 🏗️ Componentes principales

### 🏠 Header.jsx
Contiene el **encabezado principal** de la página con:
- Título: *Instrumentos de Calidad de Software*  
- Subtítulo: *Buenas prácticas aplicadas al desarrollo de software con enfoque en calidad*  
- Menú de navegación con enlaces ancla a las secciones principales (Inicio, Buenas Prácticas, Instrumentos, Proceso Personal, Conclusiones)

### 💡 Practices.jsx
Expone las **buenas prácticas de calidad** mediante tarjetas:
- Revisión de código  
- Pruebas unitarias  
- Uso de control de versiones (Git)  
- Documentación técnica clara  
- Estándares de codificación  
Cada tarjeta incluye ícono, título y descripción.

### 🧰 Instruments.jsx
Presenta ejemplos visuales de **instrumentos de calidad**:
- Lista de chequeo  
- Revisión de requerimientos  
- Registro de defectos  
- Plantilla de casos de prueba  
Cada instrumento aparece en formato de tarjeta con botón “Ver Ejemplo”, que puede abrir un modal o mostrar información adicional.

### 👨‍💻 Process.jsx
Describe el **proceso personal de desarrollo**, incluyendo:
- Fases: análisis, desarrollo, pruebas y documentación  
- Imagen ilustrativa (`diagram.png` o similar) dentro de `/assets`

### 🧾 Conclusions.jsx
Incluye reflexiones finales sobre:
- Importancia de las buenas prácticas  
- Contribución de los instrumentos a la calidad  
- Beneficios en reducción de errores y mejora continua  

### 📞 Footer.jsx
Pie de página con:
- Nombre del estudiante  
- Programa de formación  
- Año y versión del documento  

---

## 🎨 Diseño y estilo (CSS puro)
- Tarjetas con bordes redondeados y sombras suaves.  
- Colores azules y grises con fondo blanco.  
- Transiciones suaves (`transition`) y `hover effects`.  
- Uso de `flexbox` y `grid` para estructura responsiva.  
- `scroll-behavior: smooth` para desplazamiento suave.

---

## 🚀 Ejecución del proyecto

### 1️⃣ Clonar el repositorio
```bash
https://github.com/Rafael0896/instrumentos-calidad-software.git
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Iniciar el entorno de desarrollo
```bash
npm run dev
```

### 4️⃣ Compilar para producción
```bash
npm run build
```

---

## 📦 Dependencias principales
- **React** — Framework base del proyecto  
- **React DOM** — Renderizado de componentes  
- **Vite** — Herramienta de desarrollo rápida y ligera  

---

## 🌐 Secciones navegables
| Sección | Descripción |
|----------|--------------|
| 🏠 Inicio | Encabezado con título, subtítulo y menú |
| 💡 Buenas prácticas | Tarjetas con ejemplos de prácticas de calidad |
| 🧰 Instrumentos | Ejemplos visuales y descripción de instrumentos |
| 👨‍💻 Proceso personal | Diagrama e interpretación del proceso aplicado |
| 🧾 Conclusiones | Reflexión sobre la calidad y sus beneficios |

---

## 📱 Responsividad
El diseño se adapta automáticamente a diferentes tamaños de pantalla mediante **media queries** en los archivos CSS individuales.

---

## 👤 Autor
**Nombre:** *Rafael Álvarez*  
**Programa:** *Análisis y Desarrollo de Software – SENA*  
**Versión:** *2025.1*
