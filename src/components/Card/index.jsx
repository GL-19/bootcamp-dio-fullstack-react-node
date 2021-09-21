import React from "react";
import { CardContainer, Text, Title, Icon } from "./styles";
import starIcon from '../../assets/images/star.png'
import forkIcon from '../../assets/images/fork.png'

export default function Card({
	name,
	createDate,
	lastUpdateDate,
	url,
	forks,
	stars,
	description,
}) {
	return (
		<CardContainer>
      <Title href={url} target="_blank" rel="noreferrer" >
        {name}
			</Title>
			<Text>Criado em {createDate.split("T")[0]}</Text>
			<Text>Atualizado em {lastUpdateDate.split("T")[0]}</Text>
			<Text>
        <Icon src={forkIcon}/>
        : {forks}      |       
        <Icon src={starIcon}/>
        : {stars} 
      </Text>
		{/* 	{description && <Text>{description}</Text>} */}
		</CardContainer>
	);
}
