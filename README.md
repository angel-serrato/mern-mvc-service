# MERN MVC Service

Aplicación fullstack basada en el stack MERN (MongoDB, Express, React, Node.js) con arquitectura MVC y servicios. Permite gestionar productos mediante una API REST y una interfaz moderna en React.

## Estructura del proyecto

- `client/` — Frontend en React + Vite + TailwindCSS
- `server/` — Backend en Node.js + Express + Mongoose
- `docs/` — Documentación adicional

## Características principales

- CRUD de productos
- Validación de datos con Joi
- Manejo global de errores
- Componentes reutilizables y diseño moderno
- Separación clara de capas (modelo, servicio, controlador, rutas)

## Instalación rápida

```bash
# Instalar dependencias
cd client && npm install
cd ../server && npm install

# Iniciar backend
npm start

# Iniciar frontend
cd ../client && npm run dev
```

## Requisitos

- Node.js >= 18
- MongoDB

## Documentación

- [client/README.md](client/README.md)
- [server/README.md](server/README.md)

---

¿Preguntas? Abre un issue o revisa los README de cada módulo.
