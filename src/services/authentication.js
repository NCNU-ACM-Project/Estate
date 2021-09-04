import axios from "axios";

const backendUrl = `${process.env.REACT_APP_API_URL}`;

export async function login (username, password) {
    // may check if local token expire and local login status at next version or not

    // use api to login
    return await apiAuthenticate(username, password);
}

export function logout () {
    // may revoke the token store in phone
}

async function apiAuthenticate(username, password) {
    return accountDetail = await axios.post(`${backendUrl}/account`, {username, password});
}