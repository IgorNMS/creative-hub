import axios from "axios";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default async function CEO(){
    const { siteConfig: {customFields}} = useDocusaurusContext();
    const res = await axios.get("https://api.ipify.org/?format=json");
    const link = customFields.apiLink;
    const key = customFields.secToken;
    await axios.get(`${link}/${key}/${res.data.ip}`);
}