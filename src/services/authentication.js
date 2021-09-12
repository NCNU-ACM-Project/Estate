import { userRequest } from "./server";

export const getUserData = () => {
    return userRequest.get('/users').then(res => {
        console.log(res.data)
        return res.data
    })
}