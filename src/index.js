import './global'

import { createRoot } from 'react-dom/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import Router from './router'

const container = document.querySelector('#app')

const root = createRoot(container)

const queryClient = new QueryClient()

root.render(
  <QueryClientProvider client={queryClient}>
    <Router />
  </QueryClientProvider>
)
