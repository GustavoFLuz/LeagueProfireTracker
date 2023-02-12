import { useState } from "react"
import styled, { css } from "styled-components"
import Version from "../../globalVariables/version";

const Frame = styled.div`
    ${props=>props.css}
`

export default function Skill({skill, css, onClick, index}) {
    const name = skill;

    const getSkill = ()=>{
        switch(index){
            case 0: return "Q";
            case 1: return "W";
            case 2: return "E";
            case 3: return "R";
        }
    }
    return (
        <Frame css={css} onClick={onClick} skillPos={getSkill()}>
            <img src={`http://ddragon.leagueoflegends.com/cdn/${Version.getVersion()}/img/spell/${skill.image.full}`}/>
        </Frame>
    )
}