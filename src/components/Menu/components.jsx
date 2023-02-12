import styled from "styled-components";
export const MenuContainer = styled.div`
    background-color: ${props=>props.theme.colors.dark};
    background-image: url(${props=>props.theme.menuBackgroundImage});
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    width: 100%;
    height: ${props=>props.theme.sizes.minContainerHeight};

    @media (${props=>props.theme.breakpoints.md}) {
        background-size: cover;
    }
`

export const InputGroup = styled.div`
    position:relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 1.5em;
    font-size: 1.3em;
    >div{
        width: 100%;
        margin: .5em 0;
        display: flex;
        justify-content: space-around;
    }
    @media (${props=>props.theme.breakpoints.md}) {
        font-size: 1em;
    }
`;

export const Placeholder = styled.span`
    position: absolute;
    left: 5%;
    transition: .5s;
    pointer-events: none;
    text-align: center;
    max-width: 75vw;
    ${props=>({
        top: props.position,
        color: props.theme.colors[props.color],
    })}
`

export const Input = styled.input`
    color:${props=>props.theme.colors.dark};
    border-radius: 15px;
    border: none;
    background-color: ${props=>props.theme.colors.primary};
    font-size: 1.5em;
    height: 1.7em;
    max-width: 80vw;
    padding: 6px 1ch;
    :focus-visible{
        outline: ${props=>props.theme.colors.light} auto 3px ;
    }
`;

export const Span = styled.span`
    color: #FFF;
    :hover{
        border-bottom: 1px solid ${props=>props.theme.colors.light};
        translate: 0 -5px;
    }
    transition: .3s;
    cursor: pointer;
`

export const PopUp = styled.div`
    position: absolute;
    padding: 18px 36px 18px 24px;
    font-size: 2em;
    background-color: ${props=>props.theme.colors.light};
    color: ${props=>props.theme.colors.dark};
    border-radius: 15px;
    border: 3px solid ${props=>props.theme.colors.error};
    @media (max-width: 992px) {   
        font-size: 1.5em;
    }
    >svg{
        width: 50px;
        vertical-align: middle;
        margin-right: 15px;
    }
    >p{
        display: inline;
        line-height: 1;
        vertical-align: middle;
    }
    >span{
        font-size: .7em;
        font-weight: bolder;
        content: "x";
        pointer-events: 'none';
        position: absolute;
        right: 10px;
        top: 15%;
        color: ${props=>props.theme.colors.error};
        font-family: 'Courier New', Courier, monospace;
}
`