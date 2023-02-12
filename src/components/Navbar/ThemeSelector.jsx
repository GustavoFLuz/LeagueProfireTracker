import React, { useState, useEffect } from 'react'
import styled, { useTheme } from 'styled-components'
import themeList from '../../themes'
const SelectorContainer = styled.div`
    *{
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.dark};
    }
    cursor: pointer;
    
    >.listContainer{
        position: relative;
        >ul{
            position: absolute;
            max-height: 5em;
            overflow-y: auto;
            width: 100%;
            padding: 0 5px;
            margin: 0;
            box-sizing: border-box;
            top: -0.4em;
            &:first-child {
                padding-top: 0.8em;
            }
            &:last-child {
                border-radius: 0 0 10px 10px;
            }
            >li{
                text-align: center;
                list-style: none;
                margin-bottom: 0.8em;
            }
        }
    }
`

function ThemeSelector({ changeTheme }) {
    const [isOpen, setIsOpen] = useState(false)
    const [theme, setTheme] = useState("defaultTheme")

    useEffect(() => {
        const themeData = JSON.parse(localStorage.getItem("theme"));
        if (!themeData) return;
        changeTheme(themeList[themeData.theme])
        setTheme(themeData.theme)
    }, [])

    const switchTheme = (key) => {
        setTheme(key)
        changeTheme(themeList[key])
        localStorage.setItem("theme", JSON.stringify({ theme: key }));
    }
    return (
        <SelectorContainer onClick={() => setIsOpen(prev => !prev)}>
            <div className='header'>Theme</div>
            <div className="listContainer">
                {isOpen &&
                    <ul>
                        {Object.keys(themeList).map((key) =>
                            <li key={key} onClick={() => switchTheme(key)}>{themeList[key].name}</li>
                        )}
                    </ul>
                }
            </div>
        </SelectorContainer>
    )
}

export default ThemeSelector