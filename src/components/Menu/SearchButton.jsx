import styled, { useTheme } from "styled-components"
import { SearchIcon } from "../../assets"

const Button = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 15px;
    padding: 5px;
    max-height: min(100%, 2em);
    min-width: min(100px, 200px);
    cursor: pointer;
    svg{
        height: 100%;
    }
    background-color: ${props=>props.theme.colors.primary};
`

export default function SearchButton({onClick}) {
    const theme = useTheme()
    return (
        <Button onClick={onClick}>
            <SearchIcon fill={theme.colors.dark} stroke={theme.colors.dark}/>
        </Button>
    )
}