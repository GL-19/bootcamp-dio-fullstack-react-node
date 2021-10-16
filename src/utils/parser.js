function postFix(inputString) {
	let input = inputString.split(" ");
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
				if (precedence[value] === precedence[previousOperator]) {
					let operator = operatorStack.pop();
					output.push(operator);
					operatorStack.push(value);
				} else if (precedence[value] < precedence[previousOperator]) {
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
