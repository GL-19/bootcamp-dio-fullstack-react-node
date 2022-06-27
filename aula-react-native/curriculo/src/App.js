import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Card } from "./components/Card";
import photo from "./assets/foto.jpeg";

export function App() {
	function handlePress(socialNetwork) {
		switch (socialNetwork) {
			case "linkedin":
				Alert.alert("Meu linkedin", "https://linkedin.com");
				break;
			case "facebook":
				Alert.alert("Meu facebook", "https://facebook.com");
				break;
			case "github":
				Alert.alert("Meu github", "https://github.com");
				break;
		}
	}

	return (
		<>
			<View style={style.page}>
				<View style={style.headerContainer}>
					<Image source={photo} style={style.photo} />
					<Text style={style.name}>ANA MARIA</Text>
					<Text style={style.job}>Desenvolvedora Mobile</Text>
					<View style={style.socialNetworks}>
						<TouchableOpacity onPress={() => handlePress("github")}>
							<Icon name="github" size={30} />
						</TouchableOpacity>
						<TouchableOpacity onPress={() => handlePress("facebook")}>
							<Icon name="facebook" size={30} />
						</TouchableOpacity>
						<TouchableOpacity onPress={() => handlePress("linkedin")}>
							<Icon name="linkedin" size={30} />
						</TouchableOpacity>
					</View>
				</View>
				<Card
					title="Experiência Profissional"
					content={["Disneylandia", "Lalala", "Outra empresa"]}
				/>

				<Card title="Formação Academica" content={["Ciências da Computação - UFMG"]} />
			</View>
		</>
	);
}

const style = StyleSheet.create({
	page: {
		backgroundColor: "#E7E7E7",
		flex: 1,
		alignItems: "center",
	},
	headerContainer: {
		alignItems: "center",
		marginTop: 25,
		flex: 5,
	},
	photo: {
		width: 180,
		height: 180,
		borderRadius: 125,
	},
	name: {
		fontSize: 26,
		fontWeight: "bold",
		marginTop: 10,
	},
	job: {
		color: "#939393",
		marginBottom: 10,
	},
	socialNetworks: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		width: "75%",
	},
	cardContainer: {
		width: "100%",
		marginTop: 20,
		flex: 2,
		justifyContent: "flex-start",
		alignItems: "center",
	},
	card: {
		width: "50%",
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "#939393",
		padding: 10,
		backgroundColor: "#fff",
	},
	cardHeader: {},
	cardContent: {
		marginTop: 10,
	},
	cardContentText: {
		color: "#939393",
		marginBottom: 5,
	},
});
