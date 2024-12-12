export const getLocalStorageCart = ()=>{
    return JSON.parse(localStorage.getItem("cart"));
}