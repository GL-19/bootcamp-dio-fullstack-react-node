import { useState } from "react";
import { Button, ClearButton, ResultButton } from "../Buttons";
import Display from "../Display";
import { GridLayout, Main } from "./styles";
import { calculate } from "../../utils/parser";

export default function Calculator() {
	const [expression, setExpression] = useState("");
	const [previousResult, setPreviousResult] = useState("");
	const [error, setError] = useState(false);

	function handleClick(value) {
		console.log("expression", expression);
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

	function handleCalculate() {
		if (error) {
			setError(false);
		}
		try {
			let result = calculate(expression);
			result = String(result);
			if (result === "Infinity" || isNaN(result)) {
				setError(true);
			} else {
				setExpression(result);
				setPreviousResult(result);
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
		let newCalc = expression.slice(0, length - 1);
		setExpression(newCalc);
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
				<ClearButton area="result" onClick={() => handleClick(previousResult)}>
					Res
				</ClearButton>
			</GridLayout>
		</Main>
	);
}
