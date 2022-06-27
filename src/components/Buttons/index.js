import styled from "styled-components";

export const Button = styled.button`
	background-color: #ffffff;
	color: #000000;
	min-width: 50px;
	min-height: 50px;
	border-radius: 20px;
	grid-area: ${(props) => props.area};
	font-family: "Times New Roman", Times, serif;
	font-weight: 700;
	font-size: 25px;
`;

export const ResultButton = styled(Button)`
	background-color: red;
	color: white;
`;

export const ClearButton = styled(Button)`
	background-color: blueviolet;
	color: white;
`;
