import express from "express";
import cors from "cors";

import economy from "./economy.json";
import world from "./world.json";
import technology from "./technology.json";

const GROUP_NEWS = {
	economy,
	technology,
	world,
};

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

app.get("/api", (req, res) => {
	res.json({
		economy,
		technology,
		world,
	});
});

app.get("/api/:subject", (req, res) => {
	const { subject } = req.params;
	res.json(GROUP_NEWS[subject]);
});

app.get("/api/:subject/:id", (req, res) => {
	const { subject, id } = req.params;
	const allNews = GROUP_NEWS[subject].value;
	const news = allNews.find((news) => news.id === id);
	res.json(news);
});

app.listen(PORT, () => {
	console.log(`Server running on ${PORT} PORT`);
});
