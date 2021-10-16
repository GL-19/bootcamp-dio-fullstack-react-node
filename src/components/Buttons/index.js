import styled from "styled-components";

export const Button = styled.button`
	background-color: #000000;
	color: #ffffff;
	min-width: 50px;
	min-height: 50px;
	grid-area: ${(props) => props.area};
`;
