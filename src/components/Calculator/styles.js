import styled from "styled-components";

export const GridLayout = styled.div`
	width: 100%;
	height: 500px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(5, 1fr);
	grid-template-areas:
		"one two three delete"
		"four five six add"
		"seven eight nine sub"
		" dot zero  div mul"
		"clear clear calculate calculate";
	gap: 10px;
	background-color: gray;
	border: 5px gray solid;
`;

export const Main = styled.main`
	width: 400px;
	height: 500px;
	padding: 40px;
	border: 5px gray solid;
	border-radius: 10%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 25px;
	background-color: gray;
`;
