import './index.css'
import TableOfContents from './components/tableOfContents.jsx'
import { slugify } from './utils/slugify'

const headings = [
  {
    level: 1,
    text: "Overview",
  },
  {
    level: 1,
    text: "Getting Started",
    children: [
      { level: 2, text: "Installation" },
      { level: 2, text: "Project Structure" },
      { level: 2, text: "Environment Setup" },
    ],
  },
  {
    level: 1,
    text: "Core Features",
    children: [
      {
        level: 2,
        text: "Task Management",
        children: [
          { level: 3, text: "Creating Tasks" },
          { level: 3, text: "Tagging and Filtering" },
        ],
      },
      {
        level: 2,
        text: "Collaboration Tools",
        children: [
          { level: 3, text: "Real-time Comments" },
          { level: 3, text: "User Roles & Permissions" },
        ],
      },
      { level: 2, text: "Calendar Integration" },
    ],
  },
  {
    level: 1,
    text: "API Reference",
    children: [
      { level: 2, text: "Authentication API" },
      { level: 2, text: "Tasks API" },
      { level: 2, text: "Webhooks" },
    ],
  },
  {
    level: 1,
    text: "Deployment",
    children: [
      { level: 2, text: "Using Vercel" },
      { level: 2, text: "Custom Domain Setup" },
    ],
  },
  {
    level: 1,
    text: "FAQs",
  },
  {
    level: 1,
    text: "Contact & Support",
  },
]

function renderHeadings(headings) {
  return headings.map((heading, idx) => {
    const Tag = `h${heading.level}`
    return (
      <div key={idx} id={slugify(heading.text)} className="scroll-mt-24 mb-8">
        <>
          <Tag className="font-semibold mb-2">
            {heading.text}
          </Tag>
          <p className="text-base text-gray-600 dark:text-gray-300 mb-2">
            This section covers <strong>{heading.text}</strong> in detail. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          {heading.children && renderHeadings(heading.children)}
        </>
      </div>
    )
  })
}

export default function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 dark:bg-zinc-900 text-gray-800 dark:text-gray-100">
      {/* Sidebar */}
      <aside className="md:w-1/4 p-4 sticky top-0 h-screen overflow-auto bg-white dark:bg-zinc-800 border-r border-gray-200 dark:border-zinc-700 shadow-sm">
        <h2 className="text-lg font-bold mb-4 border-b border-gray-300 dark:border-zinc-600 pb-2">
          📚 Table of Contents
        </h2>
        <TableOfContents headings={headings} />
      </aside>

      {/* Main Content */}
      <main className="md:w-3/4 p-6">
        {renderHeadings(headings)}
      </main>
    </div>
  )
}
