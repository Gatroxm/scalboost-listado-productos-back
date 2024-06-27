# Scalboost Listado Productos Backend;

Este; proyecto; es; una; API; RESTful; desarrollada; con; NestJS; para; gestionar; un; listado; de; productos. Incluye; funcionalidades; CRUD; y; un; buscador; por; filtros; como; nombre; y; descripción.;

## Características

- **Crear; producto:** Añade; un; nuevo; producto.
- **Leer; productos:** Obtén; la; lista; de; productos.
- **Actualizar; producto:** Modifica; los; detalles; de; un; producto; existente.
- **Eliminar; producto:** Elimina; un; producto; del; listado.
- **Buscar; productos:** Filtra; productos; por; nombre; o; descripción.;

## Instalación;

Para; instalar; las; dependencias; del; proyecto, ejecuta;:

`npm install `;

# Ejecución; de; la; Aplicación;

Puedes; ejecutar; la; aplicación; en; diferentes; modos:;

## Desarrollo

`npm run start`;

## Modo; Watch (desarrollo continuo)

`npm run start:dev`;

## Producción;

`npm run start:prod`;

# API Reference

#### Buscar productos

```http
  GET /products/search
```

| Query Params | Type     | Respuesta                                                                          |
| :----------- | :------- | :--------------------------------------------------------------------------------- |
| `?query`     | `string` | [ { "id": "string", "name": "string", "description": "string", "price": number } ] |

#### Crear Producto

```http
  POST /products
```

| Body                                                             | Respuesta          |
| :--------------------------------------------------------------- | :----------------- |
| `{ "name": "string", "description": "string", "price": number }` | { "id": "string" } |

### Leer productos

```http
GET /products
```

| Respuesta                                                                          |
| :--------------------------------------------------------------------------------- |
| [ { "id": "string", "name": "string", "description": "string", "price": number } ] |

### Actualizar productos

```http
 PATCH /products/:id
```

| Parametro  | Body                                                           | Resouesta |
| ---------- | -------------------------------------------------------------- | --------- |
| idProducto | { "name": "string", "description": "string", "price": number } | null      |

### Eliminar productos

```http
 DELETE /products/:id
```

| Parametro  | Resouesta |
| ---------- | --------- |
| idProducto | null      |

# Pruebas

Puedes ejecutar las pruebas unitarias y de integración con los siguientes comandos:

## Pruebas Unitarias

`npm run test`;

## Pruebas E2E

`npm run test:e2e`;

## Pruebas de Cobertura

`npm run test:cov`;

# Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que te gustaría hacer.

# Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

# Contacto

Desarrollado por [![Gatroxm](https://gatroxm.github.io/)]. Para más información, visita [![NestJS](https://nestjs.com/)].

Este `README.md` proporciona una visión clara del proyecto, instrucciones detalladas de instalación y uso, y una guía para los endpoints de la API.
