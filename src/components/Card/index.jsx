import React from "react";
import { CardContainer, Info, InfoDescription } from "./styles";

export default function Card({ name, createDate, lastUpdateDate, url }) {
  const path = 'https://github.com'
	return (
		<CardContainer>
			<Info>
				<InfoDescription>Nome Repositorio: </InfoDescription>{name}
			</Info>
			<Info>
				<InfoDescription>Data de criação: </InfoDescription>{createDate.split("T")[0]}
			</Info>
			<Info>
				<InfoDescription>Data do último commit: </InfoDescription>
				{lastUpdateDate.split("T")[0]}
			</Info>
			<Info>
				<InfoDescription>URL: </InfoDescription>
        <a href={url} target="_blank">{url}</a>
			</Info>
		</CardContainer>
	);
}
