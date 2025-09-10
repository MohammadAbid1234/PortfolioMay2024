import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from './App.jsx'
import { SidebarProvider } from './context/SidebarProvider.jsx';
import { BrowserRouter } from 'react-router-dom';

// Initialize React Query Client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 10 minutes
      refetchOnWindowFocus: false, // optional
    },
  },
});


createRoot(document.getElementById('root')).render(
<QueryClientProvider client={queryClient}>
<SidebarProvider>
  <BrowserRouter>
    {/* <ThemeContextProvider> */}
      <App />
    {/* </ThemeContextProvider> */}
  </BrowserRouter>
</SidebarProvider>
</QueryClientProvider>
)
