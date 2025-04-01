# LandingPage

## Instrucciones para levantar la aplicación con React y Vite

Este proyecto está desarrollado con React y utiliza Vite como herramienta de construcción. A continuación, se describen los pasos necesarios para clonar el repositorio y levantar la aplicación localmente.

---

### 📦 Requisitos previos

Asegúrate de tener instalado lo siguiente en tu máquina:

- **Node.js** (versión 14 o superior)
- **npm** o **yarn** como gestor de paquetes

---

### ▶️ Pasos para levantar la aplicación

1. **Clonar el repositorio**:

   ```bash
   git clone https://gitlab.com/coa-sa/software/cva/ai-landingpage/frontend/landingpage.git
   ```

2. **Entrar en el directorio del proyecto**:

   ```bash
   cd landingpage
   ```

3. **Instalar las dependencias**:

   ```bash
   npm install
   # o con yarn
   yarn install
   ```

4. **Iniciar la aplicación en modo desarrollo**:

   ```bash
   npm run dev
   # o con yarn
   yarn dev
   ```

   Esto iniciará el servidor de desarrollo de Vite en `http://localhost:5173`.

5. **Abrir la aplicación en el navegador**:

   Ir a `http://localhost:5173`.

---

### ⚙️ Scripts adicionales

- **Construir la aplicación para producción**:

   ```bash
   npm run build
   # o con yarn
   yarn build
   ```

- **Previsualizar la aplicación construida**:

   ```bash
   npm run preview
   # o con yarn
   yarn preview
   ```

---

### 📝 Notas adicionales

- Asegúrate de que las variables de entorno necesarias estén configuradas en un archivo `.env`.
- Revisa la documentación oficial de Vite: [https://vitejs.dev/](https://vitejs.dev/)

---

# 🚀 Despliegue en Cloud Run

Este proyecto puede desplegarse en Google Cloud Run. A continuación, se describen los pasos necesarios para construir y desplegar la imagen.

---

## 📦 Requisitos previos

- Cuenta de Google Cloud con permisos
- Proyecto con facturación activa
- Google Cloud CLI
- Docker

---

## 🔐 Autenticación

```bash
gcloud auth login
gcloud config set project coa-elisa
```

---

## 🏗️ Construcción de la imagen con Cloud Build

```bash
gcloud builds submit --tag gcr.io/coa-elisa/react-app-test-v3-azure-search
```

---

## 🚀 Despliegue en Cloud Run

```bash
gcloud run deploy react-app-test \
  --image=gcr.io/coa-elisa/react-app-test-v3-azure-search \
  --region=us-central1 \
  --platform=managed \
  --set-env-vars="VITE_API_BASE_URL=https://elisa-api-be-694002979142.us-central1.run.app" \
  --service-account=coa-elisa@appspot.gserviceaccount.com \
  --allow-unauthenticated
```

---

## 🌐 Acceder a la aplicación

Después del despliegue, se mostrará una URL como:

```
https://react-app-test-abc123-uc.a.run.app
```

---

## 🧪 Pruebas locales (opcional)

```bash
docker build -t landingchat \
  --build-arg VITE_API_BASE_URL=https://elisa-api-be-694002979142.us-central1.run.app \
  .

docker run -p 8080:8080 landingchat
```

Ir a: [http://localhost:8080](http://localhost:8080)

---

## 📂 Archivos clave

- `Dockerfile`
- `vite.config.js`
- `.dockerignore`

---

## ✅ Notas adicionales

- `VITE_API_BASE_URL` se usa en tiempo de build.
- Para CI/CD usar GitHub Actions o Cloud Build triggers.

---

## 🧹 Limpieza

```bash
gcloud run services delete react-app-test --region=us-central1
```
