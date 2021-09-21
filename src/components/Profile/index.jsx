import React from "react";
import companyIcon from "../../assets/images/company.png";
import locationIcon from "../../assets/images/location.png";
import linkIcon from "../../assets/images/link.png";
import twitterIcon from "../../assets/images/twitter.png";
import emailIcon from "../../assets/images/email.png";
import {
	ProfileContainer,
	InfoContainer,
	PhotoContainer,
	Title,
	Text,
	Photo,
	Link,
	Icon,
} from "./styles";

export default function Profile(props) {
	const {
		avatar_url: profileImg,
		html_url: url,
		name,
		login,
		location,
		company,
		email,
		blog,
		twitter_username: twitter,
		public_repos: repos,
	} = props.userData;
  
	return (
		<ProfileContainer>
			<PhotoContainer>
				<Photo src={profileImg} alt="Foto usuário" />
				<Title>{name}</Title>
				<Link href={url} target="_blank" rel="noreferrer">
					{login}
				</Link>
			</PhotoContainer>
			<InfoContainer>
				{location && (
					<Text>
						<Icon src={locationIcon} />
						{location}
					</Text>
				)}
				{company && (
					<Text>
						<Icon src={companyIcon} />
						{company}
					</Text>
				)}
				{blog && (
					<Link href={blog} target="_blank" rel="noreferrer">
						<Icon src={linkIcon} />
						{blog}
					</Link>
				)}
				{email && (
					<Text>
						<Icon src={emailIcon} />
						{email}
					</Text>
				)}
				{twitter && (
					<Text>
						<Icon src={twitterIcon} />
						{twitter}
					</Text>
				)}
				{repos && <Text>Repos: {repos}</Text>}
			</InfoContainer>
		</ProfileContainer>
	);
}
