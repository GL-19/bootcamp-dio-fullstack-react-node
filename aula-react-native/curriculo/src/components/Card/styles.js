import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
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
