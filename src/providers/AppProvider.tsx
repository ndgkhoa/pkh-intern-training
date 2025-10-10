import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { SearchContextProvider } from "@/contexts/SearchContext";
// import { AuthProvider } from "@/contexts/AuthContext";
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <AuthProvider>
        <SearchContextProvider> */}
      {children}
      <Toaster position="top-right" />
      {/* </SearchContextProvider>
      </AuthProvider> */}
    </QueryClientProvider>
  );
}
