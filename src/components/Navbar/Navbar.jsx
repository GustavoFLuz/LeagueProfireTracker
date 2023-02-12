import { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components"
import { BackIcon } from "../../assets";
import ThemeSelector from "./ThemeSelector";
import { useNavigate } from "react-router-dom";
import Key from "../../globalVariables/apiKey";
const Nav = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    height: max-content;
    z-index: 99999;
`

const NavList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    background-color: ${props => props.theme.colors.tertiary};
    margin:0;
    padding: 8px 0;
    min-height: ${props => props.theme.sizes.navbarHeight};
    >.backlink{
        cursor: pointer;
        background-color: ${props => props.theme.colors.primary};
        padding: 10px;
        border-radius: 50%;
        display: grid;
        place-items: center;
    }
`;
const NavItem = styled.li`
    color: ${props => props.theme.colors.dark};
    background-color: ${props => props.theme.colors.primary};
    font-size: 1.5em;
    border-radius: 10px;
    .header{
        border-radius: 10px;
        min-width: 5.5ch;
        padding: 6px 8px;
        text-align: center;
    }
    cursor: pointer;
`;

export default function Navbar({ changeTheme, path }) {
    const theme = useTheme();
    const navigate = useNavigate();

    const setApiKey = ()=>{
        const key = prompt("Paste your api key:")
        Key.set(key)
    }
    return (
        <Nav>
            <NavList>
                {path != "/" &&
                    <NavItem onClick={() => navigate(-1)} className="backlink"><BackIcon fill={theme.colors.dark} stroke={theme.colors.dark} style={{ width: "1em" }} /></NavItem>
                }
                {path == "/" &&
                    <NavItem><div className="header" onClick={setApiKey}>Set API Key</div></NavItem>
                }
                <NavItem><ThemeSelector changeTheme={changeTheme} /></NavItem>
            </NavList>
        </Nav>)
}