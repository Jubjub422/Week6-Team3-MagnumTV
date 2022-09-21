import { getActors } from "./database.js"

const actorsList = getActors()


export const actorsHTML = () => {
    let htmlString = "<ol>"

    for (const actor of actorsList) {
        htmlString += `<li>${actor.name}</li>`
    }

    htmlString += "</ol>"

    return htmlString
}




