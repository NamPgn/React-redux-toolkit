export const isAuthenticate = () => {
    // if(typeof window === 'undefined') return false;

    if(localStorage.getItem("userToken")){
        return JSON.parse(localStorage.getItem("userToken"));
    }else{
        return false
    }
}