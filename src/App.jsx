// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";

import Home from './Pages/Home'
import ShortenPage from './Pages/Shorten';
import NotFound from './Pages/NotFound';

function App() {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="shorten" element={<ShortenPage />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}

export default App
