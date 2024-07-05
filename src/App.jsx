
import {
	BrowserRouter,
	Routes,
	Route,
	NavLink,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
	return (
		<>
			<BrowserRouter>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						background: "black",
						padding: "5px 0 5px 5px",
						fontSize: "18px",
					}}
				>
					<div style={{ margin: "10px" }}>
						<NavLink
							to="/"
							style={{
								color: "white",
								textDecoration: "none",
							}}
						>
							Kalvium ❤
						</NavLink>
					</div>
					<div style={{ display: "flex", marginRight: "10px" }}>
						<div style={{ margin: "10px" }}>
							<NavLink
								to="/contact"
								style={{
									color: "white",
									textDecoration: "none",
								}}
							>
								Contact
							</NavLink>
						</div>
						<div style={{ margin: "10px" }}>
							<NavLink
								to="/about"
								style={{
									color: "white",
									textDecoration: "none",
								}}
							>
								About
							</NavLink>
						</div>
					</div>
				</div>
				<Routes>
					<Route
						exact
						path="/"
						element={<Home />}
					/>
					<Route
						exact
						path="/about"
						element={<About />}
					/>
					<Route
						exact
						path="/contact"
						element={<Contact />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
