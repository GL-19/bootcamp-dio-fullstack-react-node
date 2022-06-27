import { screen, render, fireEvent } from "@testing-library/react";
import { toHaveStyle } from "@testing-library/jest-dom";
import { Button } from ".";

describe("Teste dos botoões", () => {
	test("Deve renderizar o texto corretamente", () => {
		render(<Button>+</Button>);
		expect(screen.queryByText("+")).toBeInTheDocument;
	});

	test("Deve receber a grid-area corretamente", () => {
		render(<Button area="teste">+</Button>);
		expect(screen.queryByText("+")).toHaveStyle("grid-area: teste");
	});

	test("Ao clicar, deve executar a função recebida", () => {
		const onClickMock = jest.fn();

		render(
			<Button area="teste" onClick={() => onClickMock("+")}>
				+
			</Button>
		);

		fireEvent.click(screen.queryByText("+"));

		expect(onClickMock).toHaveBeenCalled();
		expect(onClickMock).toHaveBeenCalledWith("+");
		expect(onClickMock).not.toHaveBeenCalledWith("-");
	});
});
