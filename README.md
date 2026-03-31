# 📅 Agenda Semanal App

Aplicación web moderna desarrollada con **React** para gestionar tareas semanales por funcionarios, sectores y niveles de prioridad, con exportación a PDF profesional.

---

## 🚀 Demo (opcional)

> Puedes agregar aquí el link cuando la subas (Vercel, Netlify, etc.)

---

## 🧠 Descripción

Esta aplicación permite crear, visualizar, editar y eliminar tareas organizadas por días de la semana.
Incluye persistencia local y generación de reportes en PDF con diseño profesional.

---

## ✨ Funcionalidades

* ✅ Crear tareas por día
* ✏️ Editar tareas existentes
* 🗑️ Eliminar tareas
* 🔴🟡🟢 Prioridad visual (alta, media, baja)
* 📱 Diseño responsive (mobile / tablet / desktop)
* 💾 Persistencia con `localStorage`
* 📄 Exportación a PDF profesional
* 📅 Selección manual de semana
* ♻️ Limpiar toda la agenda

---

## 🧱 Tecnologías utilizadas

* ⚛️ React
* 🎨 CSS Modules
* 📅 date-fns
* 📄 jsPDF
* 💡 JavaScript (ES6+)

---

## 📂 Estructura del proyecto

```
src/
│
├── components/
│   ├── Header.jsx
│   ├── WeekView.jsx
│   ├── TaskModal.jsx
│   ├── ExportPDFButton.jsx
│
├── hooks/
│   └── useTasks.js
│
├── pages/
│   └── Agenda.jsx
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/agenda-semanal.git
```

2. Instala dependencias:

```bash
npm install
```

3. Ejecuta el proyecto:

```bash
npm run dev
```

---

## 🧾 Exportación a PDF

El PDF incluye:

* Semana actual o seleccionada
* Rango de fechas
* Tareas agrupadas por día
* Indicadores de prioridad
* Diseño limpio y profesional

---

## 📱 Responsive Design

La aplicación está optimizada para:

* 📱 Mobile
* 📲 Tablet
* 💻 Desktop

---

## 🔮 Próximas mejoras

* 🔐 Autenticación de usuarios
* ☁️ Backend (Supabase / Firebase)
* 📊 Dashboard de estadísticas
* 🎨 Modo oscuro
* 🔄 Drag & Drop (tipo Trello)
* 🏢 Personalización con logo empresarial

---

## 👨‍💻 Autor

Desarrollado por **Tomas Antonio Cartaya Lyon**

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.
