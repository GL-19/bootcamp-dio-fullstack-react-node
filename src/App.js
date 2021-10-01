import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages";
import "antd/dist/antd.css";

function App() {
	return (
		<main>
			<section>
				<Router>
					<div>
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/:subject/:id">{/*<Post />*/}</Route>
						</Switch>
					</div>
				</Router>
			</section>
		</main>
	);
}

export default App;
