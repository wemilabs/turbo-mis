"use client";

import { useEffect, useRef } from "react";

type AnyFunction = (...args: any[]) => any;

/**
 * A hook that returns a debounced version of the provided function.
 * @param callback The function to debounce
 * @param delay The delay in milliseconds
 * @returns A debounced version of the callback
 */
export function useDebounce<T extends AnyFunction>(
  callback: T,
  delay: number
): (...args: Parameters<T>) => void {
  // Initialize with undefined as we don't have a timeout at first
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (...args: Parameters<T>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
