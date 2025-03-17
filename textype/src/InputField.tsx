// Input field, takes a challenge to render and handles user input
import { useState } from 'react'
import './App.css'
import './index.css'
import Katex from './Katex'

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
		if (input.replace(/\s/g, "") === expression.replace(/\s/g, "")) {
			// If the input matches the expression, call the onMatch function
			onMatch();
			console.log("Matched");
			setUserInput("");
			setShowPopup(true);
		} else if (showPopup) {
			setShowPopup(false);
		}
	}
	return (
		<>
			<h2>Type the expression above</h2>
			<input
				type="text"
				value={userInput}
				onChange={handleChange}
				placeholder="Type your expression here"
			/>
			{showPopup && (
				<div className="neon-text">
					<p>Correct!</p>
				</div>
			)}
			<h2>Your input</h2>
			<Katex
				texExpression={userInput}
				className="katex"
			/>

		</>
	)
}



export default InputField
