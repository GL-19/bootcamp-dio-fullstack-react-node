import { useState } from "react";
import { Button, ClearButton, ResultButton } from "../Buttons";
import Display from "../Display";
import { GridLayout, Main } from "./styles";
import { calculate } from "../../utils/calculations";

export default function Calculator() {
	const [expression, setExpression] = useState("");
	const [result, setResult] = useState("");
	const [error, setError] = useState(false);

	function handleClick(value) {
		if (error) {
			setError(false);
		}
		if (expression.length > 0) {
			let previous = expression[expression.length - 1];
			if (isNaN(value)) {
				if (!isNaN(previous) && value !== ".") {
					setExpression(expression + " " + value);
				} else if (!isNaN(previous) && value === ".") {
					setExpression(expression + value);
				}
			} else {
				if (isNaN(previous) && previous !== ".") {
					setExpression(expression + " " + value);
				} else {
					setExpression(expression + value);
				}
			}
		} else if (!isNaN(value)) {
			setExpression(expression + value);
		}
	}

	//A string de cálculo deve ter 1 espaço entre cada número/operador
	function handleCalculate() {
		if (error) {
			setError(false);
		}
		try {
			let newResult = calculate(expression);
			newResult = String(newResult);
			if (newResult === "Infinity" || isNaN(newResult)) {
				setError(true);
			} else {
				setExpression(newResult);
				setResult(newResult);
			}
		} catch (error) {
			setError(true);
		}
	}

	function handleClear() {
		setExpression("");
		if (error) {
			setError(false);
		}
	}

	function handleDelete() {
		if (error) {
			setError(false);
		}
		let length = expression.length;
		let newExpression = expression.slice(0, length - 1);
		setExpression(newExpression);
	}

	return (
		<Main>
			<Display>{error ? "Error" : expression}</Display>
			<GridLayout>
				<Button area="one" onClick={() => handleClick("1")}>
					1
				</Button>
				<Button area="two" onClick={() => handleClick("2")}>
					2
				</Button>
				<Button area="three" onClick={() => handleClick("3")}>
					3
				</Button>
				<Button area="add" onClick={() => handleClick("+")}>
					+
				</Button>
				<Button area="four" onClick={() => handleClick("4")}>
					4
				</Button>
				<Button area="five" onClick={() => handleClick("5")}>
					5
				</Button>
				<Button area="six" onClick={() => handleClick("6")}>
					6
				</Button>
				<Button area="sub" onClick={() => handleClick("-")}>
					-
				</Button>
				<Button area="seven" onClick={() => handleClick("7")}>
					7
				</Button>
				<Button area="eight" onClick={() => handleClick("8")}>
					8
				</Button>
				<Button area="nine" onClick={() => handleClick("9")}>
					9
				</Button>
				<Button area="mul" onClick={() => handleClick("*")}>
					*
				</Button>
				<Button area="zero" onClick={() => handleClick("0")}>
					0
				</Button>
				<Button area="dot" onClick={() => handleClick(".")}>
					.
				</Button>
				<Button area="div" onClick={() => handleClick("/")}>
					/
				</Button>
				<ResultButton area="calculate" onClick={() => handleCalculate()}>
					=
				</ResultButton>
				<ClearButton area="clear" onClick={() => handleClear()}>
					C
				</ClearButton>
				<ClearButton area="delete" onClick={() => handleDelete()}>
					Del
				</ClearButton>
				<ClearButton area="result" onClick={() => handleClick(result)}>
					Res
				</ClearButton>
			</GridLayout>
		</Main>
	);
}
