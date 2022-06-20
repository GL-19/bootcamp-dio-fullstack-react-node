import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Card, Profile } from "../../components";
import { getRepos, getUser } from "../../services/api";
import {
	PageWrapper,
	CardsWrapper,
	SearchWrapper,
	Logo,
	Button,
	Warning,
} from "./styles";
import githubLogo from "../../assets/images/GitHub_Logo.png";

export default function SearchResult() {
	const [searchValue, setSearchValue] = useState("");
	const [user, setUser] = useState({});
	const [repos, setRepos] = useState([]);
	const [failedSearch, setFailedSearch] = useState(false);
	const history = useHistory();

	useEffect(() => {
		if (localStorage.getItem("user")) {
			let repositories = localStorage.getItem("repositories");
			let user = localStorage.getItem("user");

			repositories = JSON.parse(repositories);

			user = JSON.parse(user);

			setRepos(repositories);
			setUser(user);
			setSearchValue(user?.login);

			localStorage.clear();
		} else if (!failedSearch) {
			history.push("/");
		}
	}, []);

	function handleSearch() {
		getRepos(searchValue)
			.then((response) => {
				setRepos(response.data);
				console.log(response.data);
				setFailedSearch(false);
			})
			.catch(() => {
				setRepos([]);
				setFailedSearch(true);
			});
		getUser(searchValue)
			.then((response) => {
				setUser(response.data);
				console.log(response.data);
				setFailedSearch(false);
			})
			.catch(() => {
				setUser({});
				setFailedSearch(true);
			});
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
			{failedSearch && <Warning>Usuário não encontrado</Warning>}
			{user.login && <Profile userData={user} />}
			<CardsWrapper>
				{repos.map((repo) => (
					<Card
						name={repo.name}
						description={repo.description}
						createDate={repo.created_at}
						lastUpdateDate={repo.pushed_at}
						url={repo.clone_url}
						forks={repo.forks_count}
						stars={repo.stargazers_count}
					/>
				))}
			</CardsWrapper>
		</PageWrapper>
	);
}
