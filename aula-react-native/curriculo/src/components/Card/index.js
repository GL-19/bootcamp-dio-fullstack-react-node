import React from "react";
import { View, Text } from "react-native";
import { style } from "./styles";

export function Card({ title, content }) {
	return (
		<View style={style.cardContainer}>
			<View style={style.card}>
				<View style={style.cardHeader}>
					<Text>{title}</Text>
				</View>
				<View style={style.cardContent}>
					{content.map((text, index) => {
						return (
							<Text key={index} style={style.cardContentText}>
								{text}
							</Text>
						);
					})}
				</View>
			</View>
		</View>
	);
}
