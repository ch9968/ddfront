import axios from "axios";

const client = axios.create();
client.defaults.baseURL = `${process.env.REACT_APP_SEVER_URL}`;
client.defaults.withCredentials = false;

export default client;
