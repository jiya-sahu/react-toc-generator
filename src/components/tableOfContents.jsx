import { useState } from 'react';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { slugify } from '../utils/slugify';

function NestedItem({ node }) {
  const hasChildren = node.children && node.children.length > 0;
  const [collapsed, setCollapsed] = useState(true);

  return (
    <li className="ml-1">
      <div className="flex items-start gap-1 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition">
        {hasChildren ? (
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-400 hover:text-blue-500  dark:hover:text-blue-400 transition p-0.5"
            aria-label={collapsed ? 'Expand section' : 'Collapse section'}
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
          href={`#${slugify(node.text)}`}
          className="hover:text-blue-600 dark:hover:text-blue-400 transition text-sm w-full text-gray-800 dark:text-gray-200  font-semibold focus:outline-none "
        >
          {node.text}
        </a>
      </div>

      {hasChildren && !collapsed && (
        <ul className="ml-4 pl-2 mt-1 border-l border-gray-200 dark:border-gray-700 space-y-1">
          {node.children.map((child, idx) => (
            <NestedItem key={idx} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function TableOfContents({ headings }) {
  return (
    <nav aria-label="Table of Contents">
      <ul className="space-y-1 text-sm">
        {headings.map((node, idx) => (
          <NestedItem key={idx} node={node} />
        ))}
      </ul>
    </nav>
  );
}
