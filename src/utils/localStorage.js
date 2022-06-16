export const getLokalStorage = key => {
 const data =   localStorage.getItem(key);

 if(data !== null){
    return JSON.parse(data)
 }
return {}

}

export const setLokalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}