import { useEffect, useState, useRef } from "react";
import "./index.css";
import TableOfContents from "./components/tableOfContents.jsx";
import { slugify } from "./utils/slugify";
import { contentHeadings } from "./content.js";

function renderHeadings(headings, activeId) {
  const getHeadingClass = (level, isActive) => {
    let base = "";
    switch (level) {
      case 1:
        base = "text-3xl md:text-4xl tracking-tight";
        break;
      case 2:
        base = "text-2xl md:text-3xl tracking-tight";
        break;
      case 3:
        base = "text-xl md:text-2xl";
        break;
      case 4:
        base = "text-lg md:text-xl";
        break;
      case 5:
        base = "text-base md:text-lg";
        break;
      case 6:
        base = "text-sm md:text-base";
        break;
      default:
        base = "text-base";
    }
    return `${base} font-bold ${
      isActive
        ? "text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/40 rounded px-2 py-1 shadow-sm"
        : "text-zinc-800 dark:text-zinc-100"
    } mb-2`;
  };

  return headings.map((heading, idx) => {
    const Tag = `h${heading.level}`;
    const id = slugify(heading.text);
    const isActive = activeId === id;
    return (
      <div key={idx} id={id} className="scroll-mt-24 mb-10">
        <>
          <Tag className={getHeadingClass(heading.level, isActive)}>
            {heading.text}
          </Tag>
          {heading.description && (
            <p className="text-gray-600 dark:text-gray-300 mb-2 text-base mt-2.5">
              {heading.description}
            </p>
          )}
          {heading.children && renderHeadings(heading.children, activeId)}
        </>
      </div>
    );
  });
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const contentRef = useRef();

  // Dark mode effect
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Prevent scrolling when sidebar is open on mobile
  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showSidebar]);

  // Handle sidebar link click: set activeId and scroll smoothly
  const handleNavigate = (id) => {
    setActiveId(id);
    setShowSidebar(false);
    // Smooth scroll to the section
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen min-h-screen bg-gradient-to-br from-blue-50 via-white to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 transition-colors duration-500">
      {/* Mobile TOC toggle button */}
      <button
        className="md:hidden fixed top-4 left-4 z-40 bg-white/80 dark:bg-zinc-800/80 border border-gray-200 dark:border-zinc-700 rounded-full p-2 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 backdrop-blur"
        onClick={() => setShowSidebar(true)}
        aria-label="Open Table of Contents"
      >
        <svg
          className="w-7 h-7 text-blue-600 dark:text-blue-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar Overlay for mobile */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden animate-fadeIn"
          onClick={() => setShowSidebar(false)}
          aria-label="Close sidebar overlay"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
    fixed z-40 top-0 left-0 h-full w-full
    md:static md:translate-x-0 md:h-full md:w-1/4
    bg-white/80 dark:bg-zinc-800/80 border-r border-gray-200 dark:border-zinc-700 shadow-xl
    backdrop-blur-lg ring-1 ring-black/5 dark:ring-white/10
    transform transition-transform duration-300
    ${showSidebar ? "translate-x-0" : "-translate-x-full"}
    p-0 md:p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-200 dark:scrollbar-thumb-zinc-900 scrollbar-track-transparent dark:scrollbar-track-transparent
  `}
        style={{ transitionProperty: "transform" }}
        aria-label="Table of Contents Sidebar"
      >
        {/* Sticky header for sidebar */}
        <div className="sticky top-0 z-10 bg-white/90 dark:bg-zinc-800/90 backdrop-blur px-4 py-3 border-b border-gray-200 dark:border-zinc-700 flex items-center justify-between">
          <h2 className="text-lg font-extrabold tracking-wide text-blue-900 dark:text-blue-300 flex items-center gap-2">
            <span role="img" aria-label="book">
              📚
            </span>{" "}
            Table of Contents
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-sm px-2 py-1 border border-gray-300 dark:border-zinc-600 rounded dark:text-white hover:bg-blue-50 dark:hover:bg-zinc-700 transition font-medium"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
            <button
              className="md:hidden ml-2 p-1 rounded-full hover:bg-blue-100 dark:hover:bg-zinc-700 transition"
              onClick={() => setShowSidebar(false)}
              aria-label="Close Table of Contents"
            >
              <svg
                className="w-5 h-5 text-blue-600 dark:text-blue-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="px-4 py-2 md:px-0 md:py-0">
          <TableOfContents
            headings={contentHeadings}
            onNavigate={handleNavigate}
            activeId={activeId}
          />
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 md:w-3/4 p-4 md:p-8 pt-20 md:pt-8 transition-all duration-300 h-full overflow-y-auto">
        <div className="max-w-3xl mx-auto" ref={contentRef}>
          {renderHeadings(contentHeadings, activeId)}
        </div>
      </main>
    </div>
  );
}
