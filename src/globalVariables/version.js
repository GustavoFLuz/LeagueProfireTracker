import axios from "axios"

export default class Version{
    static _version = null;
    static preload(){
        if(Version._version) return;
        axios.get("https://ddragon.leagueoflegends.com/api/versions.json")
            .then((res)=>Version._version=res.data[0])
    }
    static getVersion(){
        return Version._version
    }
}