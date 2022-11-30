import { Outlet } from "react-router-dom";

const Root = () => {
	return (
		<div className="Root">
			<nav>Nav</nav>
			<h1>I'm root</h1>
			<Outlet />
			<footer>Footer</footer>
		</div>
	);
};

export default Root;
