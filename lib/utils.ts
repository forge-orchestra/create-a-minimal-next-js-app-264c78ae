// lib/utils.ts

import { LucideIcon } from 'lucide-react';

/**
 * Type representing an item in the application.
 */
export type Item = {
  id: string;
  name: string;
  description: string;
};

/**
 * Fetches data from a given API endpoint.
 * @param url - The API endpoint URL.
 * @returns A promise that resolves to the fetched data.
 * @throws Will throw an error if the fetch operation fails.
 */
export async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    return response.json() as Promise<T>;
  } catch (error) {
    console.error('Fetch error:', error);
    throw new Error('Failed to fetch data');
  }
}

/**
 * Formats a date string into a more readable format.
 * @param dateStr - The date string to format.
 * @returns A formatted date string.
 */
export function formatDate(dateStr: string): string {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString(undefined, options);
}

/**
 * Calculates the total number of items.
 * @param items - An array of items.
 * @returns The total count of items.
 */
export function calculateTotalItems(items: Item[]): number {
  return items.length;
}

/**
 * Renders a Lucide icon.
 * @param icon - The Lucide icon component.
 * @param className - Additional class names for styling.
 * @returns The icon component.
 */
export function renderIcon(icon: LucideIcon, className: string = ''): JSX.Element {
  return <icon className={`h-6 w-6 ${className}`} />;
}

export { fetchData, formatDate, calculateTotalItems, renderIcon };