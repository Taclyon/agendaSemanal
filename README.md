# 📅 Agenda Semanal App

Aplicação web moderna desenvolvida com **React** para gerenciar tarefas semanais por funcionários, setores e níveis de prioridade, com exportação para PDF profissional.

---

## 🚀 Demo (opcional)

> Adicione aqui o link quando publicar o projeto (Vercel, Netlify, etc.)

---

## 🧠 Descrição

Esta aplicação permite criar, visualizar, editar e excluir tarefas organizadas por dias da semana.
Inclui persistência local e geração de relatórios em PDF com design profissional.

---

## ✨ Funcionalidades

* ✅ Criar tarefas por dia
* ✏️ Editar tarefas existentes
* 🗑️ Excluir tarefas
* 🔴🟡🟢 Prioridade visual (alta, média, baixa)
* 📱 Design responsivo (mobile / tablet / desktop)
* 💾 Persistência com `localStorage`
* 📄 Exportação para PDF profissional
* 📅 Seleção manual da semana
* ♻️ Limpar toda a agenda

---

## 🧱 Tecnologias utilizadas

* ⚛️ React
* 🎨 CSS Modules
* 📅 date-fns
* 📄 jsPDF
* 💡 JavaScript (ES6+)

---

## 📂 Estrutura do projeto

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

## ⚙️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/agenda-semanal.git
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto:

```bash
npm run dev
```

---

## 🧾 Exportação para PDF

O PDF inclui:

* Semana atual ou selecionada
* Intervalo de datas
* Tarefas organizadas por dia
* Indicadores de prioridade
* Design limpo e profissional

---

## 📱 Design Responsivo

A aplicação está otimizada para:

* 📱 Mobile
* 📲 Tablet
* 💻 Desktop

---

## 🔮 Melhorias futuras

* 🔐 Autenticação de usuários
* ☁️ Backend (Supabase / Firebase)
* 📊 Dashboard com estatísticas
* 🌙 Modo escuro
* 🔄 Drag & Drop (estilo Trello)
* 🏢 Personalização com logo da empresa

---

## 👨‍💻 Autor

Desenvolvido por **Tomas Antonio Cartaya Lyon**

---

## 📄 Licença

Este projeto está sob a licença MIT.
