import { SWAP_PEOPLE, HTTP,HTTPS, SWAP_ROOT, GUIDE_IMG_EXTENSION, URL_IMG_PERSON,SWAP_PARAM_PAGE } from "@constans/api"

export const getPeoplePage = url => {
const pos = url.lastIndexOf(SWAP_PARAM_PAGE)
const id = url.slice(pos+SWAP_PARAM_PAGE.length)
return Number(id)

}

const getId = (url, category) => {
    let id = url
    .replace(HTTPS+SWAP_ROOT+category, '')
    .replace(/\//g,'')
    
    return id
}

export const getPeopleId = url =>getId(url, SWAP_PEOPLE)


export const getPeopleImage = id =>`${URL_IMG_PERSON}/${id+GUIDE_IMG_EXTENSION}`