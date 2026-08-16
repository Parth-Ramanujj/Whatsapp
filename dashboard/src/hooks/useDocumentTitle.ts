import { useEffect } from 'react';

/**
 * Custom hook to set document title dynamically.
 * Automatically appends " | Artha" suffix.
 */
export function useDocumentTitle(title: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} | Artha`;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}
