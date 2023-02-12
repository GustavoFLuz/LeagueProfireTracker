import axios from "axios";

export default class Key{
    static key = import.meta.env.VITE_API_KEY;
//RGAPI-2f493fa5-0506-49c3-aebb-6f88fd5fc3a9
    static test(){
        return new Promise(async resolve=>{
            const res = await axios.get(`https://br1.api.riotgames.com/lol/status/v4/platform-data?api_key=${Key.key}`)
                .catch(err => resolve(false));
            resolve(res.status=="200" || res.status=="201")
        })
    }

    static set(val){
        Key.key = val;
        return Key.test();
    }
}