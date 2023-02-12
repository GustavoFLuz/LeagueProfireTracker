import { useState } from "react"
import { useLoaderData } from "react-router-dom"
import parse from 'html-react-parser';

import Passive from "./Passive"
import Skill from "./Skill"
import {Frame, ImgDiv, Img, Arrow, HeaderArea, InfoFrame, SkillsFrame, TextArea, skillsCss } from "./components"
import { BackIcon } from "../../assets";
import { useTheme } from "styled-components";
import Version from "../../globalVariables/version";

export default function Champion() {
    const theme = useTheme();
    const champName = useLoaderData().name
    const champInfo = useLoaderData().champInfo.data[champName]

    //Splash art transition
    const splashUrl = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champName
    const [currSplash, setCurrSplash] = useState(0)
    const [nextSplash, setNextSplash] = useState(0)
    const [moving, setMoving] = useState(0)
    const transitionTime = 1000
    const getSplash = (sum) => {
        if (moving != 0) return;
        let next = currSplash + sum;
        const splashes = champInfo.skins;
        if (sum < 0 && currSplash == 0)
            next = splashes.length - 1;
        if (sum > 0 && currSplash == splashes.length - 1)
            next = 0;
        setNextSplash(next)
        return setTimeout(() => {
            setMoving(sum)
            return setTimeout(() => {
                setMoving(0)
                setCurrSplash(next);
            }, transitionTime)
        }, 500)
    }

    //Skills info
    const [skill, setSkill] = useState(-1)
    const infoShow = (id) => {
        if (skill == id) return setSkill(-1);
        setSkill(id)
    }
    const getInfo = () => {
        switch (skill) {
            case -1:
                return (<></>);
            case 0:
                return (<>
                    <h1>{champInfo.tags.join(" & ")}</h1>
                    <p>{parse(champInfo.lore)}</p>
                </>);
            case 1:
                return (<>
                    <h1>{champInfo.passive.name}</h1>
                    <p>{parse(champInfo.passive.description)}</p>
                </>);
            default:
                return (<>
                    <h1>{champInfo.spells[skill-2].name}</h1>
                    <p>{parse(champInfo.spells[skill-2].description)}</p>
                </>)
        }

    }
    return (
        <Frame>
            <ImgDiv>
                <Img src={`${splashUrl}_${champInfo.skins[currSplash].num}.jpg`} bg={true} />

                <Img src={`${splashUrl}_${champInfo.skins[nextSplash].num}.jpg`}
                    style={{
                        left: `${moving * 100}%`, translate: `${moving * -100}%`,
                        transitionDuration: (moving != 0 ? `${(transitionTime / 1000)}s` : '0s')
                    }} />

                <Img src={`${splashUrl}_${champInfo.skins[currSplash].num}.jpg`}
                    style={{
                        translate: `${moving * -100}%`,
                        transitionDuration: (moving != 0 ? `${transitionTime / 1000}s` : '0s')
                    }} />
                <span>{champInfo.skins[currSplash].name == "default" ? champName : champInfo.skins[currSplash].name}</span>
                <Arrow left={true}  onClick={() => getSplash(-1)}><BackIcon fill={theme.colors.dark}/></Arrow>
                <Arrow left={false} onClick={() => getSplash(1)}><BackIcon fill={theme.colors.dark}/></Arrow>
            </ImgDiv>
            <HeaderArea>
                <InfoFrame onClick={() => infoShow(0)}>
                    <div><h1>{champInfo.id}</h1><h4>{champInfo.title}</h4></div>
                    <div>
                        <img src={`http://ddragon.leagueoflegends.com/cdn/${Version.getVersion()}/img/champion/` + champInfo.image.full} />
                    </div>
                </InfoFrame>
                <SkillsFrame>
                    <Passive css={skillsCss} passive={champInfo.passive} onClick={() => infoShow(1)}></Passive>
                    {champInfo.spells.map((spell, index) => <Skill css={skillsCss} skill={spell} key={spell.id} onClick={() => infoShow(index + 2)} index={index}></Skill>)}
                </SkillsFrame>
            </HeaderArea>
            {skill!=-1 && <TextArea>
                {getInfo()}
            </TextArea>}
        </Frame>
    )
}