# Mi primera app: Ionic + Angular

Proyecto educativo pequeño para practicar el ciclo completo: ejecutar localmente,
generar archivos de producción, subir el repositorio a GitHub y publicar el frontend
en Railway.

## 1. Requisitos

- Node.js (versión LTS recomendada) y npm
- Visual Studio Code
- Cuenta de GitHub
- Cuenta de Railway

Comprueba Node y npm desde la terminal:

```bash
node -v
npm -v
```

## 2. Abrir y ejecutar

Abre esta carpeta en Visual Studio Code. En la terminal integrada ejecuta:

```bash
npm install
npm run start:dev
```

Abre la dirección local que indique Angular (normalmente http://localhost:4200).

## 3. Generar archivos de producción

```bash
npm run build
```

También se incluye el comando Ionic:

```bash
npm run ionic:build
```

El build de Angular se genera en `dist/mi-primera-app/browser`.
Esos archivos estáticos son el frontend listo para publicar.

## 4. Rutas

Las rutas están en `src/app/app.routes.ts`:

- `/` muestra la página de inicio.
- `/acerca` muestra información del proyecto.
- Las rutas desconocidas redirigen a `/`.

El servidor Express (`server.cjs`) devuelve `index.html` para las rutas
de la aplicación. Esto evita errores 404 al refrescar una ruta como `/acerca`.

## 5. Probar el servidor de producción

Después de ejecutar el build:

```bash
npm start
```

Abre http://localhost:3000.

## 6. Subir el proyecto a GitHub

Crea un repositorio vacío en GitHub. Luego, desde esta carpeta:

```bash
git init
git add .
git commit -m "Primera versión Ionic Angular"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
git push -u origin main
```

Sustituye la URL de ejemplo por la URL real de tu repositorio.

## 7. Publicar en Railway

1. Entra a Railway y selecciona **New Project**.
2. Elige **Deploy from GitHub repo**.
3. Autoriza GitHub y selecciona este repositorio.
4. Railway instalará dependencias y ejecutará el build.
5. Configura, si Railway no los detecta automáticamente:
   - Build Command: `npm run build`
   - Start Command: `npm start`
6. En la configuración de Networking genera un dominio público.

El servidor escucha el puerto que Railway proporciona mediante `PORT`.

## 8. Diferencia entre publicar frontend y backend

- **Frontend:** se compila a HTML, CSS y JavaScript. En este proyecto, Express
  sirve esos archivos y entrega `index.html` para las rutas.
- **Backend:** es la parte que ejecuta lógica del servidor, APIs, autenticación
  o acceso a bases de datos. Normalmente se despliega como un servicio separado.
- Este proyecto publica el frontend; Express solo funciona como servidor estático
  con fallback de rutas. No incluye una API ni una base de datos.

## Estructura principal

```text
src/
  app/
    home/home.page.ts
    about/about.page.ts
    app.component.ts
    app.routes.ts
  main.ts
  styles.css
server.cjs
angular.json
package.json
```
