import { useState, useEffect } from "react";
import { Button } from "../Buttons";
import { GridLayout, Main } from "./styles";

export default function Calculator() {
	const [calc, setCalc] = useState("");
	const [result, setResult] = useState("");

	function handleClick(value) {
		setCalc(calc + value);
	}

	function calculate() {
		console.log(eval(calc));
		setResult(eval(calc));
		setCalc(eval(calc));
	}

	function clear() {
		setCalc("");
	}

	function deleteLast() {
		let lenght = calc.length;
		let newCalc = calc.substring(0, lenght - 1);
		setCalc(newCalc);
	}

	return (
		<Main>
			<h1>{calc}</h1>
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
				<Button area="calculate" onClick={() => calculate()}>
					=
				</Button>
				<Button area="clear" onClick={() => clear()}>
					C
				</Button>
				<Button area="delete" onClick={() => deleteLast()}>
					Del
				</Button>
				<Button area="result" onClick={() => handleClick(result)}>
					Res
				</Button>
			</GridLayout>
		</Main>
	);
}
