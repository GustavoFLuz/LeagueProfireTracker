import { useState } from "react"
import styled, { css } from "styled-components"
import { useNavigate } from "react-router-dom"

import { Frame, SpriteImg, MasteryBar, Bar, MasteryText } from "./components"

const scaleFactor = 2.3

export default function ChampionItem({ userData, data }) {
    const [zindex, setZindex] = useState(1)
    const percentage = userData ? (() => {
        const gotten = userData.championPointsSinceLastLevel;
        const needed = userData.championPointsUntilNextLevel;
        if (!gotten || !needed) return 100
        return (gotten / (gotten + needed)) * 100
    })() : false

    const navigate = useNavigate();
    const eventHandlers = {
        onMouseEnter: () => { setZindex(5) },
        onMouseLeave: () => { setZindex(1) },
        onClick: () => { navigate(`/champion/${data.id}`) }
    }
    return (
        <>
            <Frame w={data.image.w * scaleFactor} h={data.image.h * scaleFactor}>
                <Frame w={data.image.w * scaleFactor} h={data.image.h * scaleFactor} bgIndex={userData ? userData.championLevel : 1} zindex={zindex} className="hoverFrame" {...eventHandlers}>
                    <SpriteImg img={data.image} scale={scaleFactor} />
                    {userData &&
                        <MasteryBar>
                            <Bar percentage={percentage}></Bar>
                            <MasteryText>MR{userData.championLevel} {userData.championPoints} pts</MasteryText>
                        </MasteryBar>}
                </Frame>
            </Frame>
        </>
    )
}