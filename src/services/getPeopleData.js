import { SWAP_PEOPLE, HTTP,HTTPS, SWAP_ROOT, GUIDE_IMG_EXTENSION, URL_IMG_PERSON } from "@constans/api"

const getId = (url, category) => {
    let id = url
    .replace(HTTPS+SWAP_ROOT+category, '')
    .replace(/\//g,'')
    
    return id
}

export const getPeopleId = url =>getId(url, SWAP_PEOPLE)


export const getPeopleImage = id =>`${URL_IMG_PERSON}/${id+GUIDE_IMG_EXTENSION}`