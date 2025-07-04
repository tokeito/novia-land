import { MantineProvider } from '@mantine/core'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouter } from './router'

import './styles/index.css'

import theme from './styles/theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <AppRouter />
    </MantineProvider>
  </StrictMode>,
)
