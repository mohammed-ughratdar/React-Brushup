import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PublicHolidays from './public-holidays'
import './App.css'
import { useState } from 'react'

function App() {
  
  const [queryClient] = useState(() => new QueryClient())
  
  return (
    <QueryClientProvider client={queryClient}>
      <PublicHolidays />
    </QueryClientProvider>
  )
}

export default App
