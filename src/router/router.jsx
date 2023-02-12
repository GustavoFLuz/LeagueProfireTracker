import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import axios from 'axios';

import Container from '../components/Container/Container';
import List from '../components/ChampionList/List';
import Menu from '../components/Menu/Menu';
import Champion from '../components/Champion/Champion'
import ErrorPage from "../components/ErrorPage/ErrorPage"
import Version from '../globalVariables/version';
import Key from '../globalVariables/apiKey';

const router = createBrowserRouter([
	{
		element: <Container/>,
		children: [
			{
				path: "/",
				element: <Menu />,
			},
			{
				path: "/list/:server/:name",
				element: <List />,
				loader: async ({ params }) => {
					let userInfo = await axios.get(`https://${params.server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${params.name}?api_key=${Key.key}`)
					return { userInfo: userInfo.data, server: params.server }
				}
			},
			{
				path: "/list",
				element: <List />,
				loader: async ({ params }) => {
					return { userInfo: null, server: null }
				}
			},
			{
				path: "/champion/:name",
				element: <Champion />,
				loader: async ({ params }) => {
					let champInfo = await axios.get(`http://ddragon.leagueoflegends.com/cdn/${Version.getVersion()}/data/en_US/champion/${params.name}.json`);
					return { champInfo: champInfo.data, name: params.name }
				}
			},
			{
				path: "*",
				element: <ErrorPage/>
			}
		]
	}
]);
export default router;