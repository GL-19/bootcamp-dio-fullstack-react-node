import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./containers";

function App() {
	return (
		<main>
			<section>
				<Router>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
					</Switch>
				</Router>
			</section>
		</main>
	);
}

export default App;
