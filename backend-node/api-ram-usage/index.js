const http = require("http");
const stats = require("./pcRAMusage.js");

const port = 3000;
const host = "http://localhost";

http
	.createServer((req, res) => {
		let url = req.url;
		if (url === "/stats") {
			res.end(JSON.stringify(stats, null, 2));
		} else {
			res.end("<h1>Ola</h1>");
		}
	})
	.listen(port, () => console.log(`Server is running in ${host}:${port}`));
