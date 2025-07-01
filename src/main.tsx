import { MantineProvider } from '@mantine/core'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouter } from './router'

import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <AppRouter />
    </MantineProvider>
  </StrictMode>,
)
