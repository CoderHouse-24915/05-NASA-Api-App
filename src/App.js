import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

// Components
import Header from './components/Header/Header';
import CardComponent from './components/CardComponent/CardComponent';
import Spinner from './components/Spinner/Spinner';

const App = () => {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	// console.log('DATA:', data);

	useEffect(() => {
		// fetch(
		// 	'https://api.nasa.gov/planetary/apod?api_key=tdbrx6dXd7hn0saLy3dOO3EUYVoENGCRcXwscve9'
		// )
		// 	.then((response) => response.json())
		// 	.then((json) => console.log(json));

		axios(
			'https://api.nasa.gov/planetary/apod?api_key=tdbrx6dXd7hn0saLy3dOO3EUYVoENGCRcXwscve9'
		).then((res) => setData(res.data));
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, []);

	return (
		<div className='App'>
			<Header />
			{/* Conditional Rendering */}
			{isLoading ? <Spinner /> : <CardComponent data={data} />}
		</div>
	);
};

export default App;
