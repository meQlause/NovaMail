import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import { Providers } from './app/providers'

const rootElement = document.getElementById('root')!

createRoot(rootElement).render(
  <StrictMode>
    <Providers />
  </StrictMode>,
)
