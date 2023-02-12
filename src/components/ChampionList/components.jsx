import styled from "styled-components"

export const ChampionList = styled.ul`
    margin: 15px 0;
    padding: 0;
    list-style: none;
    width: 75%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
    @media (max-width: 992px) {   
        width: 90%;
    }
    @media (max-width: 768px) {   
        width: 100%;
        justify-content: space-evenly;
        gap: 10px;
    }
`