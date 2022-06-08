import { HTTPS, HTTP } from "@constans/api"

/**
 * изменяет URL с HTTP на HTTPS
 * @param {String} url - url для изменения
 * @returns {String} - url c HTTPS
 */
export const changeHttp = url =>{
    const result = url ? url.replace(HTTP, HTTPS) : url
    return result
}

// export const getApiResource  =  (url) => {
//     fetch(url)
//         .then(res => res.json())
//         .then(body => console.log(body))
//         .catch(error => console.log(error.message))
// }


/**
 * Отправляет запрос
 * @param {String} url - для запроса
 * @returns {Promise} - Promise с результатом запроса
 */
export const getApiResource  = async (url) => {
    try{
    const res =  await fetch(url)

    if(!res.ok){
        console.error('Could not fetch. ', res.status)
        return false
    }

   return  await res.json()
} catch(error){
    console.error('Could not fetch. ', error.message)
     return false
}
}




// (async () => {
// const body = await getApiResource(SWAP_API + SWAP_PEOPLE)
// console.log(body)
// })()

// getApiResource(SWAP_API + SWAP_PEOPLE).then(body => console.log(body))

export const makeConcurrentRequest = async(url) => {
const res = await Promise.all(url.map(res => {
    return fetch(res).then(res=>res.json())
}))

return res
}