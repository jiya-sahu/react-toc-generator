# TOC Project

A modern React-based documentation/table-of-contents (TOC) app with dark/light theme support, built using Vite and Tailwind CSS.

---

## ✨ Features

- **Dynamic Table of Contents:**  
  Automatically renders nested headings from structured data.

- **Dark/Light Theme Toggle:**  
  Switch between dark and light modes with a single click. Theme preference is saved.

- **Responsive Design:**  
  Works well on desktop and mobile devices.

- **Accessible UI:**  
  Keyboard navigation and focus styles for better accessibility.

- **Customizable Depth:**  
  Limit TOC nesting with a configurable `maxDepth` prop.

- **Smooth Styling:**  
  Uses Tailwind CSS for fast, utility-first styling and easy theme management.

---

## 📂 Project Structure

```
src/
│
├── components/
│   └── tableOfContents.jsx   # Renders nested ToC with collapsible items
│
├── utils/
│   └── slugify.js            # Converts headings to valid URL slugs
│
├── content.js                # Sample nested headings structure
├── App.jsx                   # Main application logic (dark mode, scrollspy)
├── index.css                 # Tailwind directives + custom scrollbar
└── main.jsx                  # Vite entry point
```

---

## 🚀 Setup & Run

### 1. Clone the repository

```sh
git clone <your-repo-url>
cd toc-project
```

### 2. Install dependencies

```sh
npm install
```

### 3. (Optional) Create Tailwind config

If not already present, create `tailwind.config.js` in the project root:

```js
export default {
  darkMode: 'class',
}
```

### 4. Start the development server

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Heroicons](https://heroicons.com/)

---

## 🤖 AI Disclosure

This project’s code and documentation were assisted and refined by GitHub Copilot (an AI tool powered by OpenAI’s GPT models) and ChatGPT-4o by OpenAI.

---
