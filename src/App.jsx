import { useEffect, useState } from 'react';
import './index.css';
import TableOfContents from './components/tableOfContents.jsx';
import { slugify } from './utils/slugify';
import { contentHeadings } from './content.js';

function renderHeadings(headings) {
  const getHeadingClass = (level) => {
    switch (level) {
      case 1: return 'text-3xl';
      case 2: return 'text-2xl';
      case 3: return 'text-xl';
      case 4: return 'text-lg';
      case 5: return 'text-base';
      case 6: return 'text-sm';
      default: return 'text-base';
    }
  };

  return headings.map((heading, idx) => {
    const Tag = `h${heading.level}`;
    return (
      <div key={idx} id={slugify(heading.text)} className="scroll-mt-24 mb-8">
        <>
          <Tag className={`${getHeadingClass(heading.level)} font-semibold text-zinc-800 dark:text-zinc-100 mb-2`}>
            {heading.text}
          </Tag>
          {heading.description && (
            <p className="text-gray-600 dark:text-gray-300 mb-2 text-base mt-2.5">
              {heading.description}
            </p>
          )}
          {heading.children && renderHeadings(heading.children)}
        </>
      </div>
    );
  });
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark'); // Don't add 'light', just remove 'dark'
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-gray-800 dark:bg-zinc-900 dark:text-gray-100">
      <aside className="md:w-1/4 p-4 sticky top-0 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 dark:scrollbar-thumb-zinc-900 scrollbar-track-transparent dark:scrollbar-track-transparent bg-white dark:bg-zinc-800 border-r border-gray-200 dark:border-zinc-700 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold border-b border-gray-300 dark:border-zinc-600 pb-2">
            📚 Table of Contents
          </h2>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-sm px-2 py-1 border border-gray-300 dark:border-zinc-600 rounded hover:bg-gray-100 dark:hover:bg-zinc-700 transition"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
        <TableOfContents headings={contentHeadings} />
      </aside>

      <main className="md:w-3/4 p-6">
        {renderHeadings(contentHeadings)}
      </main>
    </div>
  );
}
