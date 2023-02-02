import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Main from '../../pages/Main';

import './app.css';


const App = () => {
	return (
		<div className="app">
			<div className="ellipse topLeft">123</div>
			<div className="ellipse topRight">123</div>
			<div className="ellipse bottomLeft">123</div>
			<div className="ellipse bottomRight">123</div>
			<Layout>
				<Routes>
					<Route path='/' element={<Main />}/>
				</Routes>
			</Layout>
		</div>
	);
};

export default App;
