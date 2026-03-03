import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface EndpointProps {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  className?: string;
}

const methodColors = {
  GET: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800',
  POST: 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800',
  PUT: 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800',
  DELETE: 'bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800',
  PATCH: 'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-800',
};

export function Endpoint({ method, path, className }: EndpointProps) {
  return (
    <div className={cn("flex items-center gap-3 p-3 rounded-lg border bg-white dark:bg-zinc-900 my-4 font-mono text-sm shadow-sm", className)}>
      <span className={cn("px-2.5 py-0.5 rounded-md text-xs font-bold border flex-shrink-0", methodColors[method])}>
        {method}
      </span>
      <span className="text-zinc-700 dark:text-zinc-300 break-all" dir="ltr">{path}</span>
    </div>
  );
}
