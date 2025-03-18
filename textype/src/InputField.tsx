// Input field, takes a challenge to render and handles user input
import { useState } from 'react'
import './App.css'
import './index.css'
import Katex from './Katex'
import Temml from 'temml'

interface InputFieldProps {
  expression: string
  onMatch: () => void
}

function InputField({ expression, onMatch }: InputFieldProps) {
  // State to hold the user input
  const [userInput, setUserInput] = useState("")
  const [showPopup, setShowPopup] = useState(false);

  // Function to check if the user input matches the expression
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setUserInput(input);
    if (compareExpressions(expression, input)) {
      // if (input.replace(/\s/g, "") === expression.replace(/\s/g, "")) {
      // If the input matches the expression, call the onMatch function
      onMatch();
      console.log("Matched");
      setUserInput("");
      setShowPopup(true);
    } else if (showPopup) {
      setShowPopup(false);
    }
  }

  // Function to convert expressions to MathML using temml then compare
  function compareExpressions(expression: string, userInput: string) {
    // Some manual cleaning to remove spaces and newlines
    expression = expression.replace(/\s/g, "");
    userInput = userInput.replace(/\s/g, "");
    // Convert \to to \rightarrow
    expression = expression.replace(/\\to/g, "\\rightarrow");
    userInput = userInput.replace(/\\to/g, "\\rightarrow");
    // TODO: Need to make some kind of conversion to make ^{\infty} and ^\infty cross-compatible
    // userInput = userInput.replace(/\^{\\infty}/g, "^\\infty");
    const expressionMathML = Temml.renderToString(expression);
    const userInputMathML = Temml.renderToString(userInput);
    return expressionMathML === userInputMathML;
  }


  return (
    <>
      <input
        className="input"
        type="text"
        value={userInput}
        onChange={handleChange}
        placeholder="Type the expression above"
      />
      {showPopup && (
        <div className="neon-text">
          <p>Correct!</p>
        </div>
      )}
      <hr />
      <h3>Your input</h3>
      <Katex
        texExpression={userInput}
        className="katex"
      />

    </>
  )
}



export default InputField
