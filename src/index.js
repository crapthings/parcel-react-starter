import './global'

import { render } from 'react-dom'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import Router from './router'

const container = document.querySelector('#app')

const root = createRoot(container)

root.render(<Router />)
