import { useEffect, useState } from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { slugify } from "../utils/slugify";

export default function TableOfContents({ headings }) {

 

  function NestedItem(heading, id) {
    const [expanded, setExpanded] = useState(false);

    
    return (
      <li>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-gray-400 hover:text-blue-500 transition p-0.5"
            aria-label={expanded ? "Collapse section" : "Expand section"}
          >
            {expanded ? (
              <ChevronDownIcon className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-blue-500 transition" />
            ) : (
              <ChevronRightIcon className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-blue-500 transition" />
            )}
          </button>

          <a
            href={`#${slugify(heading.text)}`}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition text-sm w-full p-3 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {heading.text}
          </a>
        
            
        </div>
      </li>
    );
  }

  return (
    <nav aria-label="Table of Contents">
      <ul>
        {headings.map((h, id) => (
          NestedItem( h, id)
        ))}
      </ul>
    </nav>
  );
}
