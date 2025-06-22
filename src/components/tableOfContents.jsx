import { useState } from 'react';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { slugify } from '../utils/slugify';

function NestedItem({
  node, maxDepth, currentDepth, collapsible, onNavigate, activeId
}) {
  const hasChildren = node.children && node.children.length > 0;
  const [collapsed, setCollapsed] = useState(true);
  const id = slugify(node.text);

  if (maxDepth && currentDepth > maxDepth) return null;

  const isActive = activeId === id;

  return (
    <li className="ml-1">
      <div className={`flex items-start gap-2 p-2 rounded-lg group transition
        ${isActive ? 'bg-blue-100/80 dark:bg-blue-900/60 border-l-4 border-blue-500 dark:border-blue-400' : 'hover:bg-blue-50/70 dark:hover:bg-zinc-700/70'}
      `}>
        {hasChildren && collapsible ? (
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="mt-0.5 text-blue-400 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-400 transition p-1 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label={collapsed ? 'Expand section' : 'Collapse section'}
            tabIndex={0}
          >
            {collapsed ? (
              <ChevronRightIcon className="w-4 h-4" />
            ) : (
              <ChevronDownIcon className="w-4 h-4" />
            )}
          </button>
        ) : (
          <span className="w-4 h-4" />
        )}

        <a
          href={`#${id}`}
          className={`flex-1 px-2 py-1 rounded-md font-medium transition-colors duration-150
            ${isActive
              ? 'text-blue-700 dark:text-blue-200 font-bold'
              : 'text-gray-800 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-300'
            }
            focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
            group-hover:bg-blue-100/60 dark:group-hover:bg-zinc-800/60`}
          onClick={e => {
            e.preventDefault();
            onNavigate && onNavigate(id);
          }}
        >
          {node.text}
        </a>
      </div>

      {hasChildren && (!collapsible || !collapsed) && (
        <ul className="ml-4 pl-2 mt-1 border-l-2 border-blue-100 dark:border-zinc-700 space-y-1 transition-all duration-200">
          {node.children.map((child, idx) => (
            <NestedItem
              key={idx}
              node={child}
              maxDepth={maxDepth}
              currentDepth={currentDepth + 1}
              collapsible={collapsible}
              onNavigate={onNavigate}
              activeId={activeId}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function TableOfContents({
  headings,
  maxDepth = 6,
  collapsible = true,
  onNavigate,
  activeId
}) {
  return (
    <nav aria-label="Table of Contents">
      <ul className="space-y-1 text-sm">
        {headings.map((node, idx) => (
          <NestedItem
            key={idx}
            node={node}
            maxDepth={maxDepth}
            currentDepth={1}
            collapsible={collapsible}
            onNavigate={onNavigate}
            activeId={activeId}
          />
        ))}
      </ul>
    </nav>
  );
}