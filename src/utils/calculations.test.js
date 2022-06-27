import { calculate } from "./calculations";

describe("Testes da função calculate", () => {
	test("Soma de 1 + 2 deve retornar  3", () => {
		const result = calculate("1 + 2");
		expect(result).toEqual(3);
	});

	test("Multiplicação de 2 * 4 deve retornar 8", () => {
		const result = calculate("2 * 4");
		expect(result).toEqual(8);
	});

	test("Divisão de 2 / 5 deve retornar 0.4", () => {
		const result = calculate("2 / 5");
		expect(result).toEqual(0.4);
	});

	test("Subtração de 5 - 7 deve retornar -2", () => {
		const result = calculate("5 - 7");
		expect(result).toEqual(-2);
	});

	test("A operação de 5 - 7 * 2 / 45 + 4 * 27 deve retornar 112.689", () => {
		const result = calculate("5 - 7 * 2 / 45 + 4 * 27");
		expect(result).toEqual(112.689);
	});

	test("A operação de 1 + 2 - 3 + 4 - 5 deve retornar -1", () => {
		const result = calculate("1 + 2 - 3 + 4 - 5");
		expect(result).toEqual(-1);
	});
	test("A operação de 1 * 2 - 3 * 4 deve retornar -10", () => {
		const result = calculate("1 * 2 - 3 * 4 - 5");
		expect(result).toEqual(-15);
	});
});
