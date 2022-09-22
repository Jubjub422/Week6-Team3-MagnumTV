import { getActors, getShows } from "./database.js"

const actorsList = getActors()
const showsList = getShows()

//When the actor name is clicked on, the show in which the actor is the star should be display in an alert message.
//Find the actor and the relationship between 

document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("actor")) {

            const [, actorPrimaryKey] = item.Clicked.id.split("--")

            let matchingActor = null
            for (const actor of actorsList) {
                if (parseInt(actorPrimaryKey) === actor.id) {
                    matchingActor = actor
                    // let matchingShow = null
                    for (const show of showsList) {
                        if (matchingActor.id === show.id) {
                            window.alert(`${show.name}`)
                        }
                    }
                }

            }


        }

    }

)


export const actorsHTML = () => {
    let htmlString = "<ol>"

    for (const actor of actorsList) {
        htmlString += `<li id="actor--${actor.id}">${actor.name}</li>`
    }

    htmlString += "</ol>"

    return htmlString
}




