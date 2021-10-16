import styled from "styled-components";

export const GridLayout = styled.div`
	width: 400px;
	height: 500px;
	display: grid;
	grid-template-columns: repeat(3, 1fr) 0.5fr 1fr;
	grid-template-rows: repeat(5, 1fr);
	grid-template-areas:
		"one two three . add"
		"four five six . sub"
		"seven eight nine . mul"
		"zero zero dot . div"
		"calculate  delete result . clear";
	background-color: gray;
	border: 5px gray solid;
`;

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 50px;
`;
