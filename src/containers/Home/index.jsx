import React, { memo, useState, useEffect } from "react";
import { Row, Col } from "antd";
import Api from "../../services/api";
import "./styles.css";

function Home() {
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(false);

	function handleNews(articles) {
		console.log("ar", articles);
	}

	useEffect(() => {
		setLoading(true);
		Promise.allSettled([
			Api.getNews("world"),
			Api.getNews("economy"),
			Api.getNews("technology"),
		])
			.then(handleNews)
			.catch(() => console.log("Pesquisa falhou"));
	}, []);
	return (
		<>
			<Row gutter={[16, 16]}>
				<Col span={24} md={16}>
					<h2 className="text">World</h2>
				</Col>
			</Row>
			<Row gutter={[16, 16]}>
				<Col span={24} md={16}>
					<h2 className="text">Economy</h2>
				</Col>
			</Row>
			<Row gutter={[16, 16]}>
				<Col span={24} md={16}>
					<h2 className="text"> Technology</h2>
				</Col>
			</Row>
		</>
	);
}

export default memo(Home);
