function infixToPostfix(inputString) {
	let input = inputString.split(" ");
	const precedence = {
		"+": 1,
		"-": 1,
		"*": 2,
		"/": 2,
	};
	const postfixExpression = [];
	const operatorStack = [];
	for (const value of input) {
		if (!isNaN(value)) {
			postfixExpression.push(value);
		} else {
			while (
				operatorStack.length > 0 &&
				precedence[value] <= precedence[operatorStack[operatorStack.length - 1]]
			) {
				postfixExpression.push(operatorStack.pop());
			}
			operatorStack.push(value);
		}
	}
	while (operatorStack.length > 0) {
		let operator = operatorStack.pop();
		postfixExpression.push(operator);
	}

	return postfixExpression;
}

function calculatePostfix(input) {
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
					break;
			}
		} else if (stack.length < 2) {
			throw new Error("Números faltando");
		}
	}
	if (stack.length > 1) {
		throw new Error("Operadores faltando");
	}
	const result = stack[0];
	return result;
}

function calculate(input) {
	let postFixArray = infixToPostfix(input);
	let result = calculatePostfix(postFixArray);
	return parseFloat(result.toFixed(3));
}

export { infixToPostfix, calculatePostfix, calculate };
