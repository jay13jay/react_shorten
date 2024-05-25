// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from "react-router-dom";

import Home from './Pages/Home'
import ShortenPage from './Pages/Shorten';
import ShortURL from './Pages/ShortURL';
import NotFound from './Pages/NotFound';

function App() {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="shorten" element={<ShortenPage />} />
			<Route path='/short/:key' element={<ShortURL />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}

export default App
