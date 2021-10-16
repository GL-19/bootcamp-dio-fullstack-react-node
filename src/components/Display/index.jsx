import React from "react";
import { Container } from "./styles";

export default function Display(props) {
	return (
		<Container>
			<h1>{props.children}</h1>
		</Container>
	);
}
