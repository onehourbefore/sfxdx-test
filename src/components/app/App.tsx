import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Background from '../background/Background';
import Layout from '../layout/Layout';
import Main from '../../pages/Main';

import './app.css';


const App = () => {
	return (
		<div className="app">
			<Background />
			<Layout>
				<Routes>
					<Route path='/' element={<Main />}/>
				</Routes>
			</Layout>
		</div>
	);
};

export default App;
