import axios from "axios";

const backendUrl = `${process.env.REACT_APP_API_URL}`;

export const userRequest = axios.create(
    {baseURL: backendUrl}
)
