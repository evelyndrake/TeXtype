import { useState } from 'react'
import './App.css'
import Katex from './Katex'
import InputField from './InputField'

function App() {

  // State to hold the current expression
  const [expression, setExpression] = useState("\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}")

  // Function to generate a challenge expression
  function generateChallengeExpression() {
    const expressions = [
      "\\int_{0}^{\\infty} e^{-x} dx = 1",
      "\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}",
      "\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1",
      "\\frac{d}{dx} (e^x) = e^x",
      "\\int_{a}^{b} f(x) dx"
    ]
    setExpression(expressions[Math.floor(Math.random() * expressions.length)]);
  }

  return (
    <>
      <h1>TeXtype</h1>
      <Katex
        texExpression={expression}
        className="katex"
      />
      <InputField
        expression={expression} onMatch={generateChallengeExpression}
      />
    </>
  )
}

export default App
