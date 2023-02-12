import styled, { css } from "styled-components"
import Version from "../../globalVariables/version"

const Frame = styled.div`
    ${props=>(props.css)}
`
export default function Passive({passive, css, onClick}) {
    return (
        <Frame css={css} onClick={onClick} skillPos="Passive">
            <img src={`http://ddragon.leagueoflegends.com/cdn/${Version.getVersion()}/img/passive/${passive.image.full}`}/>
        </Frame>
    )
}