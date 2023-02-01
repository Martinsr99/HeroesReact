import { heroes } from "../data/heroes"

export const getHeroesByName = (name = '') => {
    
    name = name.toLowerCase().trim()

    return name.length==0 ? [] : heroes.filter( hero => hero.superhero.toLowerCase().includes(name))







}