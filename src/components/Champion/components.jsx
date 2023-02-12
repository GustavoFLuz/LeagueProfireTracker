import styled, { css } from "styled-components"

export const Frame = styled.div`
    padding-top: 2vh;
    box-sizing: border-box;
    width: 80%;
    min-height: ${props=>props.theme.sizes.minContainerHeight};
    @media (${props => props.theme.breakpoints.sm}) {
        padding-top: 0vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: .8em;
    }
`

export const ImgDiv = styled.div`
    position:relative;
    user-select: none;
    border: 15px solid ${props => props.theme.colors.primary};
    border-radius: 15px;
    overflow-x: hidden;

    display: flex;
    span{
        color: ${props=>props.theme.colors.dark};
        display: inline-block;
        position: absolute;
        top: 0px;
        left: 0;
        font-size: 2em;
        z-index: 1;
        background-color: ${props => props.theme.colors.primary};
        padding: 12px 18px;
        border-radius: 0 0 30px;
        @media (${props => props.theme.breakpoints.sm}) {
            width: 100%;
            top: -2em;
        }
    }
    @media (${props => props.theme.breakpoints.sm}) {
        margin-top: 4em;
        overflow: visible ;
        border: none;
        border-radius: 0;
    }
`
export const Img = styled.img`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition-property: translate;
    transition-delay: 0s;
    ${({ bg }) => bg ? {
        visibility: "hidden",
        position: "relative"
    } : ''}
`
export const Arrow = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    cursor: pointer;
    ${props => props.left ? ({
        left: '5%',
        rotate: "0deg"
    }) : ({
        right: '5%',
        rotate: "180deg"
    })}
    transition: all .5s;
    :hover{
        scale: 1.5;
        translate: ${props => props.left ? "-5px" : "5px"};
    }
`
export const HeaderArea = styled.div`
    min-height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    margin-top: 2em;
    @media (${props => props.theme.breakpoints.sm}) {
        background-color: ${props => props.theme.colors.primary};
        flex-direction: column;
        margin: 0;
        padding: 0 0 20px 0;
        width: 100%;
    }
`
export const InfoFrame = styled.div`
    cursor: pointer;
    user-select: none;
    width: 35%;
    padding: 10px 20px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 15px;
    h1, h4{
        padding: 0;
        margin: 10px 0;
        color: ${props=>props.theme.colors.dark};
    }
    img{
        width: 72px;
        aspect-ratio: 1;
        border-radius: 10px;
        border: 3px solid ${props => props.theme.colors.light};
        @media (${props => props.theme.breakpoints.sm}) {
            width: 75%;
            height: 75%;
        }
    }
    @media (${props => props.theme.breakpoints.sm}) {
        width: 100%;
    }
`
export const SkillsFrame = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;
    gap: 10px;

`

export const TextArea = styled.div`
    margin: 20px 0;
    padding: 20px;
    box-sizing: border-box;
    width:100%;
    background-color: ${props => props.theme.colors.primary};
    color: ${props=>props.theme.colors.dark};;
    border-radius: 15px;
    h1{
        text-align: center;
    }
    >p{
        font-size: 1.1em;
        text-align: justify;
        text-indent: 1em;
    }
    @media (${props => props.theme.breakpoints.sm}) {
        margin: 0;
        border-radius: 0;
    }
`
export const skillsCss = css`
    width: 72px;
    height: 72px;
    border-radius: 10px;
    border: 5px solid transparent;
    background: ${props => `linear-gradient(45deg,
        ${props.theme.colors.goldenGradient[0]}, 
        ${props.theme.colors.goldenGradient[1]})`} border-box;
    cursor: pointer;
    position: relative;
    img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }
    @media (${props => props.theme.breakpoints.xs}) {
        width: 18%;
        height: 18%;
    }
    :after{
        content: "${props=>props.skillPos}";
        position: absolute;
        right:0;
        bottom:-10%;
        color: #FFF;
        font-size: 1.25em;
    }
`