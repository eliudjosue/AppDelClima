# 🚀 Despliegue de una app React (Vite) en Cloud Run

Este proyecto contiene una aplicación React construida con Vite. A continuación, se detallan los pasos necesarios para construir y desplegar la imagen en **Cloud Run** utilizando Google Cloud Build y Container Registry.

---

## 📦 Requisitos previos

Antes de comenzar, asegurate de tener:

- Una cuenta de Google Cloud con permisos de administración.
- Un proyecto habilitado en Google Cloud Platform (GCP).
- Facturación habilitada en el proyecto.
- La [Google Cloud CLI](https://cloud.google.com/sdk/docs/install) instalada.
- Docker instalado y funcionando (opcional si usás Cloud Build).

---

## 🔑 Autenticación

Iniciá sesión en tu cuenta de Google Cloud:

```bash
gcloud auth login
```

Seleccioná el proyecto adecuado:

```bash
gcloud config set project adadad
```

---

## 🛠️ Build de la imagen con Cloud Build

Para compilar y subir la imagen Docker a Container Registry:

```bash
gcloud builds submit --tag gcr.io/adadad/react-app-test-v3-azure-search
```

Esto:

- Lee el `Dockerfile`.
- Construye la imagen.
- La sube a: `gcr.io/adadad/react-app-test-v3-azure-search`.

---

## 🚀 Despliegue en Cloud Run

Una vez construida la imagen, desplegala en Cloud Run:

```bash
gcloud run deploy react-app-test \
  --image=gcr.io/dadadad/react-app-test-v3-azure-search \
  --region=us-central1 \
  --platform=managed \
  --set-env-vars="VITE_API_BASE_URL=https://dadadadd-be-694002979142.us-central1.run.app" \
  --service-account=adadaadad.gserviceaccount.com \
  --allow-unauthenticated
```

### Parámetros explicados:

- `react-app-test`: nombre del servicio en Cloud Run.
- `--image`: imagen previamente subida a Container Registry.
- `--region`: región para desplegar (ej: `us-central1`).
- `--platform=managed`: utiliza Cloud Run totalmente gestionado.
- `--set-env-vars`: variables de entorno necesarias.
- `--service-account`: cuenta de servicio con permisos.
- `--allow-unauthenticated`: permite acceso público.

---

## 🌍 Acceder a la aplicación

Después del despliegue, Cloud Run mostrará una URL similar a:

```
https://react-app-test-abc123-uc.a.run.app
```

Podés acceder a la aplicación desde esa dirección.

---

## 🧪 Pruebas locales (opcional)

Para probar la app con Docker antes de desplegar:

```bash
docker build -t landingchat \
  --build-arg VITE_API_BASE_URL=https://elisa-api-be-694002979142.us-central1.run.app \
  .

docker run -p 8080:8080 landingchat
```

Visitá: [http://localhost:8080](http://localhost:8080)

---

## 📂 Archivos clave

- `Dockerfile`: define cómo construir y servir la app.
- `vite.config.js`: configuración de Vite.
- `.dockerignore`: evita copiar archivos innecesarios al contenedor.

---

## ✅ Notas adicionales

- `VITE_API_BASE_URL` es una variable de entorno usada en **tiempo de build**. Asegurate de pasarla en el `docker build` si necesitás que se inyecte en el frontend.
- Para despliegues automáticos, considerá configurar GitHub Actions o Cloud Build triggers.

---

## 🧹 Limpieza

Para eliminar el servicio de Cloud Run:

```bash
gcloud run services delete react-app-test --region=us-central1
```




# 🚀 Despliegue de una app React (Vite) en Cloud Run

Este proyecto contiene una aplicación React construida con Vite. A continuación, se detallan los pasos necesarios para construir y desplegar la imagen en **Cloud Run** utilizando Google Cloud Build y Container Registry.

---

## 📦 Requisitos previos

Antes de comenzar, asegurate de tener:

- Una cuenta de Google Cloud con permisos de administración.
- Un proyecto habilitado en Google Cloud Platform (GCP).
- Facturación habilitada en el proyecto.
- La [Google Cloud CLI](https://cloud.google.com/sdk/docs/install) instalada.
- Docker instalado y funcionando (opcional si usás Cloud Build).

---

## 🔑 Autenticación

Iniciá sesión en tu cuenta de Google Cloud:

```bash
gcloud auth login
```

Seleccioná el proyecto adecuado:

```bash
gcloud config set project coa-elisa
```

---

## 🛠️ Build de la imagen con Cloud Build

Para compilar y subir la imagen Docker a Container Registry:

```bash
gcloud builds submit --tag gcr.io/coa-elisa/react-app-test-v3-azure-search
```

Esto:

- Lee el `Dockerfile`.
- Construye la imagen.
- La sube a: `gcr.io/coa-elisa/react-app-test-v3-azure-search`.

---

## 🚀 Despliegue en Cloud Run

Una vez construida la imagen, desplegala en Cloud Run:

```bash
gcloud run deploy react-app-test \
  --image=gcr.io/addaaada/react-app-test-v3-azure-search \
  --region=us-central1 \
  --platform=managed \
  --set-env-vars="VITE_API_BASE_URL=https://adadadad.us-central1.run.app" \
  --service-account=daada-elisa@appspot.gserviceaccount.com \
  --allow-unauthenticated
```

### Parámetros explicados:

- `react-app-test`: nombre del servicio en Cloud Run.
- `--image`: imagen previamente subida a Container Registry.
- `--region`: región para desplegar (ej: `us-central1`).
- `--platform=managed`: utiliza Cloud Run totalmente gestionado.
- `--set-env-vars`: variables de entorno necesarias.
- `--service-account`: cuenta de servicio con permisos.
- `--allow-unauthenticated`: permite acceso público.

---

## 🌍 Acceder a la aplicación

Después del despliegue, Cloud Run mostrará una URL similar a:

```
https://react-app-test-abc123-uc.a.run.app
```

Podés acceder a la aplicación desde esa dirección.

---

## 🧪 Pruebas locales (opcional)

Para probar la app con Docker antes de desplegar:

```bash
docker build -t landingchat \
  --build-arg VITE_API_BASE_URL=https://adadaad694002979142.us-central1.run.app \
  .

docker run -p 8080:8080 landingchat
```

Visitá: [http://localhost:8080](http://localhost:8080)

---

## 📂 Archivos clave

- `Dockerfile`: define cómo construir y servir la app.
- `vite.config.js`: configuración de Vite.
- `.dockerignore`: evita copiar archivos innecesarios al contenedor.

---

## ✅ Notas adicionales

- `VITE_API_BASE_URL` es una variable de entorno usada en **tiempo de build**. Asegurate de pasarla en el `docker build` si necesitás que se inyecte en el frontend.
- Para despliegues automáticos, considerá configurar GitHub Actions o Cloud Build triggers.

---

## 🧹 Limpieza

Para eliminar el servicio de Cloud Run:

```bash
gcloud run services delete react-app-test --region=us-central1
```
