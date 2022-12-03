import { instanceAuth } from "./instance";

export const signupAPI = (data) => {
    const url = `signup`;
    return instanceAuth.post(url, data)
}

export const signinAPI = (data) => {
    const url = `signin`
    return instanceAuth.post(url, data)
}

export const getAllUser = () => {
    const url = `/listuser`
    return instanceAuth.get(url);
}