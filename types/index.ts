import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
}

export interface DashboardProps {
  items: Item[];
}

export interface Item {
  id: string;
  name: string;
  description: string;
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
}

export interface ErrorState {
  message: string;
}

export interface LoadingState {
  isLoading: boolean;
}