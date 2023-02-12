import styled from "styled-components"
export const Frame = styled.div`
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0;
    padding: 15px;
    padding-bottom: 25px;
    border-radius: 15px;
    border: 1px solid ${props=>props.theme.colors.light};
    position: relative;
    box-shadow:  ${props=>props.theme.colors.shadow};
    ${props=>({
        width: props.w,
        height: props.h,
        background: props.theme.colors.mastery[props.bgIndex],
        zIndex: props.zindex
    })}
    cursor: pointer;
    &.hoverFrame{
        left: 0;
        top: -5px;
        position: absolute;
        transition: .4s;
        :hover{
            scale: 1.5;
        }
        
    }
`
export const SpriteImg = styled.div`
    border-radius: 5px;
    margin: 0;
    scale:${props=>props.scale};
    ${props => ({
        backgroundSize: 'cover',
        backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/${props.img.full})`,
        width: props.img.w,
        height: props.img.h
    })}
    /* @media (max-width: 768px) {   
        scale: ${props=>props.scale*.66}
    } */    
`

export const MasteryBar = styled.div`
    overflow: hidden;
    position: absolute;
    bottom: 3px;
    border: 1px solid ${props=>props.theme.colors.light};
    border-radius: 15px;
    display: inline-block;
    width: 75%;
    height: 18px;
    margin: 0 auto;
    background-color: ${props=>props.theme.colors.dark};
    line-height: 1;
    color: ${props=>props.theme.colors.light};
    font-weight: bolder;
`

export const Bar = styled.div`
    border-radius: 15px;
    display: inline-block;
    height: 100%;
    background: #298cb5;
    background: ${props=>props.theme.colors.masteryProgress};
    ${props => ({
        width: `${props.percentage}%`
    })}
`

export const MasteryText = styled.span`
    position: absolute;
    right: 10%;
    top: 15%;
    font-size: .7em;
`