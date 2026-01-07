# Backend — server/

API RESTful para la gestión de productos usando Node.js, Express y MongoDB (Mongoose). Implementa arquitectura MVC y servicios.

## Estructura

- `src/models/` — Definición del modelo de producto
- `src/services/` — Lógica de negocio y acceso a datos
- `src/controllers/` — Controladores para las rutas
- `src/routes/` — Endpoints RESTful
- `src/middlewares/` — Validación y manejo de errores
- `src/config/` — Configuración de la base de datos
- `src/index.js` — Punto de entrada del servidor

## Scripts

```bash
npm install   # Instala dependencias
npm start     # Inicia el servidor
```

## Endpoints principales

- `GET /api/products` — Listar productos
- `POST /api/products` — Crear producto
- `PUT /api/products/:id` — Editar producto
- `DELETE /api/products/:id` — Eliminar producto

## Características

- Validación de datos con Joi
- Manejo global de errores
- Separación de capas (MVC + servicios)

## Requisitos

- Node.js >= 18
- MongoDB

---

Consulta el README principal para instrucciones de instalación y uso.
