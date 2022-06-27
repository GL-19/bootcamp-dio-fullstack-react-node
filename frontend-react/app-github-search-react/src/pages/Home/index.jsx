import React, { useState } from "react";
import { useHistory } from "react-router";
import { getRepos, getUser } from "../../services/api";
import { PageWrapper, SearchWrapper, Logo, Button, Text, ErrorMsg } from "./styles";
import githubLogo from "../../assets/images/GitHub_Logo.png";

export default function Home() {
	const [searchValue, setSearchValue] = useState("");
	const [failedSearch, setFailedSearch] = useState(false);

	const history = useHistory();

	async function handleSearch() {
		try {
			let repoResponse = await getRepos(searchValue);

			let userResponse = await getUser(searchValue);

			localStorage.setItem("repositories", JSON.stringify(repoResponse.data));
			localStorage.setItem("user", JSON.stringify(userResponse.data));

			history.push("/search");
		} catch (e) {
			setFailedSearch(true);
		}
	}

	function handleKeyPress(e) {
		if (e.key === "Enter") {
			handleSearch();
		}
	}

	return (
		<PageWrapper>
			<Logo src={githubLogo} alt="Logo Github" />
			<SearchWrapper>
				<input
					type="text"
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
					onKeyPress={handleKeyPress}
				/>
				<Button type="submit" onClick={handleSearch}>
					Pesquisar
				</Button>
			</SearchWrapper>
			{!failedSearch ? (
				<Text>Pesquise um nome de usuário</Text>
			) : (
				<ErrorMsg>Usuário não encontrado</ErrorMsg>
			)}
		</PageWrapper>
	);
}
