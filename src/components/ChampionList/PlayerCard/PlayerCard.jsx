import { EditIcon } from "../../../assets";
import {Frame, Info, Icon} from "./components"
import { useTheme } from "styled-components";
function getTimeElapsed(timestamp) {
    const currentTime = Date.now();
    const timeElapsed = currentTime - timestamp;
    const secondsElapsed = Math.floor(timeElapsed / 1000);
    const minutesElapsed = Math.floor(secondsElapsed / 60);
    const hoursElapsed = Math.floor(minutesElapsed / 60);
    const daysElapsed = Math.floor(hoursElapsed / 24);

    if (daysElapsed > 0) return `${daysElapsed} day(s) ago`;
    if (hoursElapsed > 0) return `${hoursElapsed} hour(s) ago`;
    if (minutesElapsed > 0) return `${minutesElapsed} minute(s) ago`;
    if (secondsElapsed > 0) return `${secondsElapsed} second(s) ago`;
    return "just now";
}

export default function PlayerCard({ userInfo }) {
    const theme = useTheme()
    return (
        <Frame>
            <div>
                <h2>
                    {userInfo.name}
                </h2>
                <Info>
                    <div className="level"><span>LVL </span> {userInfo.summonerLevel}</div>
                    <div className="time"><EditIcon fill={theme.colors.light} stroke={theme.colors.light}/>{getTimeElapsed(userInfo.revisionDate)}</div >
                </Info>
            </div>
            <div>
                <Icon src={"http://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/" + userInfo.profileIconId + ".png"} alt="Profile Image" />
            </div>
        </Frame>
    )
}
