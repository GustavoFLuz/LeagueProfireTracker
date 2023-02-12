import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

import SearchButton from "./SearchButton";
import ServerSelect from "./ServerSelect";

import { MenuContainer, InputGroup, Placeholder, Input, Span, PopUp } from "./components"
import { WarningIcon } from "../../assets";
import Key from "../../globalVariables/apiKey";

export default function Menu() {

    const [placeholderPosition, setPlaceholderPosition] = useState("15%")
    const [placeholderColor, setPlaceholderColor] = useState("dark")

    const [user, setUser] = useState('')
    const [server, setServer] = useState('')
    const [popup, setPopup] = useState('')

    const navigate = useNavigate()

    const eventHandlers = {
        onFocus: () => { setPlaceholderPosition("-80%"); setPlaceholderColor("light") },
        onBlur: () => { if (user.length) return; setPlaceholderPosition("15%"); setPlaceholderColor("dark") },
        onChange: (event) => setUser(event.target.value)
    }

    const getListage = () => {
        if (!user.length)
            return setPopup("Please insert your username")
        if (!server.length)
            return setPopup("Please select a server")
        Key.test().then(res => {
            if (!res)
                return setPopup("Please set a valid API KEY and try again")
            navigate(`/list/${server.toLocaleLowerCase()}/${user.split(' ').join('%20')}`)
        })

    }

    const removePopup = () => {
        setPopup('')
    }
    return (
        <MenuContainer>
            <InputGroup>
                <div style={{ position: "relative", display: "inline-block" }}>
                    <Input type={'text'} {...eventHandlers} />
                    <Placeholder position={placeholderPosition} color={placeholderColor}>Enter with your League of Legends username</Placeholder>
                </div>
                <Link to="/list" style={{ appearence: 'none', border: 'none' }}>
                    <Span>Continue without username...</Span>
                </Link>
                <div className="secondDiv">
                    <ServerSelect list={["BR1", "EUN1", "EUW1", "JP1", "KR", "LA1", "LA2", "NA1", "OC1", "RU", "TR1"]} onChange={setServer} />
                    <SearchButton onClick={() => getListage()} />
                </div>
            </InputGroup>
            {popup && <PopUp onClick={removePopup} >
                <WarningIcon fill="#F00" stroke="#F00" />
                <p>{popup}</p>
                <span>X</span>
            </PopUp>}
        </MenuContainer>
    )
}