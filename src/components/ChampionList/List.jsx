import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'

import ChampionItem from './ChampionItem/ChampionItem'
import PlayerCard from './PlayerCard/PlayerCard'
import { ChampionList } from './components'

export default function List() {
    const userCredentials = useLoaderData().userInfo
    const server = useLoaderData().server
    const [userInfo, setUserInfo] = useState([])
    const [championData, setChampionData] = useState([])
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        const championInfo = new Promise(async(res)=>res((axios.get(`http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion.json`))))
        const userInfo = userCredentials?new Promise(async(res)=>res(axios.get(`https://${server}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${userCredentials.id}?api_key=${import.meta.env.VITE_API_KEY}`))):[]
        Promise.all([championInfo, userInfo]).then(res => {
            const sortedMastery = userCredentials?res[1].data.sort((a, b) => {
                return (b.championLevel - a.championLevel) ?
                    (b.championLevel - a.championLevel) :
                    (b.championPoints - a.championPoints)
            }):null;
            setChampionData(res[0].data.data)
            setUserInfo(sortedMastery)
            setLoaded(true)
        })
    }, []);

    const getChampionItem = userCredentials?
    (champion) => {
        const id = champion.championId;
        const championName = Object.keys(championData).find(key => {
            return championData[key].key == id
        });
        const championInfo = championData[championName]
        return (<ChampionItem key={id} userData={champion} data={championInfo} />)
    }:
    (champion)=>{
        const id = champion.key;
        const championName = champion.id
        return (<ChampionItem key={id} userData={null} data={champion} />)
    }

    return (<>
        {userCredentials && <PlayerCard userInfo={userCredentials} />}
        <ChampionList>{loaded && (
            userCredentials?
            userInfo.map(champion => getChampionItem(champion)):
            Object.values(championData).map(champion => getChampionItem(champion))
        )}</ChampionList>
    </>)
}



