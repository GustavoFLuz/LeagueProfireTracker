import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, RouterProvider, BrowserRouter } from 'react-router-dom';
import Container from './components/Container/Container';
import router from './router/router';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
)