import { useState } from 'react'
import './App.css'
import Katex from './Katex'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Katex
        texExpression="\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}"
        className="katex"
      />
    </>
  )
}

export default App
