import axios from "axios";

export default async function CEO(){
    const res = await axios.get("https://api.ipify.org/?format=json");
    const link = process.env.API_LINK;
    const key = process.env.SEC_TOKEN;
    await axios.get(`${link}/${key}/${res.data.ip}`);
}