const SWAP_API = 'https://swapi.dev/api/'
const SWAP_PEOPLE = 'people'

// export const getApiResource  =  (url) => {
//     fetch(url)
//         .then(res => res.json())
//         .then(body => console.log(body))
//         .catch(error => console.log(error.message))
// }

export const getApiResource  = async (url) => {
    const res =  await fetch(url)
    const body =  await res.json()
    
    console.log(body)
}

getApiResource(SWAP_API + SWAP_PEOPLE)