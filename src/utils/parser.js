function postFixTransformation(inputString) {
	let input = inputString.split(" ");
	console.log(input);
	const precedence = {
		"+": 1,
		"-": 1,
		"*": 2,
		"/": 2,
	};
	const output = [];
	const operatorStack = [];
	for (const value of input) {
		if (!isNaN(value)) {
			output.push(value);
		} else {
			if (operatorStack.length > 0) {
				let previousOperator = operatorStack[operatorStack.length - 1];
				if (precedence[value] <= precedence[previousOperator]) {
					let operator = operatorStack.pop();
					output.push(operator);
					operatorStack.push(value);
				} else {
					operatorStack.push(value);
				}
			} else {
				operatorStack.push(value);
			}
		}
		console.log("output", output);
		console.log("operator", operatorStack);
	}
	while (operatorStack.length > 0) {
		let operator = operatorStack.pop();
		output.push(operator);
	}
	return output;
}

function postFixCalculation(input) {
	const stack = [];
	for (let value of input) {
		if (!isNaN(value)) {
			stack.push(value);
		} else if (stack.length >= 2) {
			let num2 = Number(stack.pop());
			let num1 = Number(stack.pop());
			switch (value) {
				case "+":
					stack.push(num1 + num2);
					break;
				case "-":
					stack.push(num1 - num2);
					break;
				case "/":
					stack.push(num1 / num2);
					break;
				case "*":
					stack.push(num1 * num2);
					break;
				default:
					console.log("Operador inválido");
					break;
			}
		} else if (stack.length < 2) {
			throw new Error("Números faltando");
		}
	}
	if (stack.length > 1) {
		throw new Error("Operadores faltando");
	}
	console.log("final postfix stack", stack);
	const result = stack[0];
	return result;
}

function calculate(input) {
	let postFixArray = postFixTransformation(input);
	let result = postFixCalculation(postFixArray);
	return parseFloat(result.toFixed(3));
}

export { postFixTransformation, postFixCalculation, calculate };
