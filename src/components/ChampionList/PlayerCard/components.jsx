import styled from "styled-components"
export const Frame = styled.div`
    *{
        color: ${props=>props.theme.colors.light};
    }
    margin-top: 6vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: clamp(550px, 55%, 100%);
    height: 200px;
    min-height: 200px;
    margin-bottom: 2em;

    border: 5px solid ${props => props.theme.colors.light};
    border-radius: 15px;
    background-color: ${props => props.theme.colors.dark};
    background-image: 
    ${props => `linear-gradient(90deg,
        ${props.theme.colors.tertiary}, 
        ${props.theme.colors.secondary}, 
        ${props.theme.colors.tertiary})`} ;
    overflow: hidden;
    padding: 20px;
    box-sizing: border-box;

    color: ${props => props.theme.colors.light};
    >div{
        padding: 0 20px;
    }
    >div:nth-child(1){
        flex-grow: 2;
    }
    >div:nth-child(2){
        text-align: end;
        flex-grow: 1;
    }
    z-index: 100;
    transition: .4s;
    :hover{
        scale: 1.2;
    }
    h2{
        color: #FFF;
        margin-top: 10%;
        font-size: 1.6em;
        white-space: nowrap;
    }
    @media (${props => props.theme.breakpoints.sm}) {
        width: 100%;
        border-left:none;
        border-right:none;
        border-radius: 0;
    }
    @media (${props => props.theme.breakpoints.xs}) {
        /* flex-direction: column-reverse; */
        height: fit-content
    }
`
export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .level{
        font-weight: bold;
        font-size: 1.5em;
        >span{
            font-size: .6em;
        }
        border-radius: 10px;
        border: 10px solid transparent;
        background: ${props => `linear-gradient(45deg,
            ${props.theme.colors.goldenGradient[0]}, 
            ${props.theme.colors.goldenGradient[1]})`} border-box;
        white-space: nowrap;
    }
    .time{
        display: flex;
        align-items: center;
        gap: 5px;

        font-weight: bold;
        border-radius: 10px;
        border: 10px solid transparent;
        background: ${props => `linear-gradient(45deg,
            ${props.theme.colors.goldenGradient[0]}, 
            ${props.theme.colors.goldenGradient[1]})`} border-box;
        white-space: nowrap;
        >svg{
            height: 20px;
            @media (${props => props.theme.breakpoints.xs}) {
                display: none;
            }
        }
    }
    @media (${props => props.theme.breakpoints.xs}) {
        flex-direction: column;
        gap: 8px;
    }
`
export const Icon = styled.img`
    height: 150px;
    box-sizing: border-box;
    border-radius: 15px;
    border: 15px solid transparent;
    background: ${props => `linear-gradient(45deg,
        ${props.theme.colors.light}, 
        ${props.theme.colors.light})`} padding-box,
    ${props => `linear-gradient(45deg,
        ${props.theme.colors.goldenGradient[0]}, 
        ${props.theme.colors.goldenGradient[1]})`} border-box;
    
    @media (${props => props.theme.breakpoints.sm}) {
        height: 144px;   
    }
    @media (${props => props.theme.breakpoints.xs}) {
        height: 128px;   
        border: 5px solid transparent;
    }
    @media (max-width: 350px) {
        display: none;
    }
`