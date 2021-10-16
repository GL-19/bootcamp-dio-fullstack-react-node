import { useState, useEffect } from "react";
import { Button, BlueButton, RedButton } from "../Buttons";
import Display from "../Display";
import { GridLayout, Main } from "./styles";
import { calculate } from "../../utils/parser";

export default function Calculator() {
	const [calc, setCalc] = useState("");
	const [error, setError] = useState(false);

	function handleClick(value) {
		console.log(calc);
		if (error) {
			setError(false);
		}
		if (calc.length > 0) {
			let previous = calc[calc.length - 1];
			if (isNaN(value)) {
				if (!isNaN(previous) && value !== ".") {
					setCalc(calc + " " + value);
				} else if (!isNaN(previous) && value === ".") {
					setCalc(calc + value);
				}
			} else {
				if (isNaN(previous) && previous !== ".") {
					setCalc(calc + " " + value);
				} else {
					setCalc(calc + value);
				}
			}
		} else if (!isNaN(value)) {
			setCalc(calc + value);
		}
	}

	function handleCalculate() {
		if (error) {
			setError(false);
		}
		try {
			let result = calculate(calc);
			if (result === "Infinity") {
				setError(true);
			} else {
				result = Number(result);
				result = parseFloat(result.toFixed(5));
				setCalc(result);
			}
		} catch (error) {
			setError(true);
		}
	}

	function clear() {
		setCalc("");
		if (error) {
			setError(false);
		}
	}

	function deleteLast() {
		if (error) {
			setError(false);
		}
		let length = calc.length;
		let newCalc = calc.slice(0, length - 1);
		setCalc(newCalc);
	}

	return (
		<Main>
			<Display>{error ? "Error" : calc}</Display>
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
				<RedButton area="calculate" onClick={() => handleCalculate()}>
					=
				</RedButton>
				<BlueButton area="clear" onClick={() => clear()}>
					C
				</BlueButton>
				<BlueButton area="delete" onClick={() => deleteLast()}>
					Del
				</BlueButton>
			</GridLayout>
		</Main>
	);
}
