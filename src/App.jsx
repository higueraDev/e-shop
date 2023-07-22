// Components
import ContextProvider from "./context";
// styles
import "./App.css";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<ContextProvider>
			<Navbar />
			<Layout>
				<Outlet />
			</Layout>
		</ContextProvider>
	);
}

export default App;
