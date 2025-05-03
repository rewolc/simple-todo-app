import React from 'react'
//component file
import TodoContainer from './components/TodoContainer'
import './App.css'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'))

root.render(<TodoContainer />)
