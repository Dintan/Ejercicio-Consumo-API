function getId() {

    const queryString = window.location.search

    const urlParams = new URLSearchParams(queryString)

    const id = urlParams.get("id")

    if (!id) {
        throw new Error("Please add Id url")
    }

    return id
}

function loadCharacter() {

    try {
        const id = getId()
        getData({
            endpoint: `characters/${id}`,
            displayFunction: displayCharacter
        })
    } catch (err) {
        console.error(err.message);
    }

}

function getCharacterAge(character) {

    const characterBirthdayDate = new Date(character.birthday)

    let age
    const currentYear = new Date(Date.now()).getFullYear()

    if (characterBirthdayDate == "Invalid Date") {
        age = "Unknown"
    } else {
        age = currentYear - characterBirthdayDate.getFullYear()
    }


    return age
}

function formatCharacter(character) {


    const formattedCharacter = {
        image: character.img,
        name: character.name,
        nickname: character.nickname,
        id: character.char_id,
        age: getCharacterAge(character),
        occupations: character.occupation
    }

    return formattedCharacter

}


function displayCharacter(characterArray) {

    const character = formatCharacter(characterArray[0])

    const newCharacter = document.querySelector(".character-detail")
    newCharacter.classList.remove("model")

    const name = newCharacter.querySelector(".name")
    const nickname = newCharacter.querySelector(".nickname")
    const image = newCharacter.querySelector(".image img")
    const age = newCharacter.querySelector(".age")
    const occupationList = newCharacter.querySelector(".occupation ul")

    name.innerHTML = character.name
    nickname.innerHTML = character.nickname
    age.innerHTML = character.age

    occupationList.innerHTML = ""
    character.occupations.forEach(function (occupation) {
        const li = document.createElement("li")
        li.innerHTML = occupation

        occupationList.append(li)
    })

    image.setAttribute("src", character.image)
    image.setAttribute("alt", character.name)




}



loadCharacter()

console.log("character");