import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const element = (
    <a href="https://google.com" target="_blank">Visit google</a>
)

const username = "Sonu Poudel"
const newElement = React.createElement(
    'a',
    {
        href: "https://google.com",  target: "_blank"
    },
    "Visit me to open Google",
    username
)

createRoot(document.getElementById('root')).render(
  newElement
)
