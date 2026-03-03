import { ReactNode } from 'react';

interface TableProps {
  headers: string[];
  rows: (string | ReactNode)[][];
}

export function Table({ headers, rows }: TableProps) {
  return (
    <div className="overflow-x-auto my-6 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-sm">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-zinc-500 uppercase bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
          <tr>
            {headers.map((header, i) => (
              <th key={i} className="px-6 py-3 font-medium whitespace-nowrap">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 bg-white dark:bg-zinc-950">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-6 py-4 text-zinc-600 dark:text-zinc-400">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
