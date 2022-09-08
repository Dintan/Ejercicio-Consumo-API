//test data

/* const fakeData = [
    {
        quote_id: 1,
        quote: "Ex laborum deserunt sint adipisicing commodo.",
        author: "Nombre de author/a 1"
    },

    {
        quote_id: 2,
        quote: "Et magna officia quis quis labore minim pariatur qui.",
        author: "Nombre de author/a 2"
    },

    {
        quote_id: 3,
        quote: "Et voluptate tempor sunt mollit irure ut reprehenderit veniam commodo.",
        author: "Nombre de author/a 3"
    },

    {
        quote_id: 4,
        quote: "Sit cupidatat laborum consectetur voluptate aute do eu labore velit mollit aute magna occaecat qui.",
        author: "Nombre de author/a 4"
    },

    {
        quote_id: 5,
        quote: "Ullamco voluptate elit excepteur duis pariatur aliqua dolore pariatur adipisicing cillum et non aliqua nostrud.",
        author: "Nombre de author/a 5"
    },
] */


//format data

function formatQuote(quote) {
    const formattedQuote = {
        text: quote.quote,
        author: quote.author,
        id: quote.quote_id
    }

    return formattedQuote

}

//display data

function createQuote(quote) {
    const newQuote = document.createElement("blockquote")
    const text = document.createElement("p")
    const author = document.createElement("p")

    text.classList.add("text")
    author.classList.add("author")

    text.innerHTML = quote.text
    author.innerHTML = quote.author

    newQuote.append(text)
    newQuote.append(author)

    newQuote.setAttribute("data-id", quote.id)

    return newQuote
}

function setupInteraction(element) {
    element.addEventListener("click", function (event) {

        const el = event.target
        console.log(el.getAttribute("data-id"))
    })
}

function displayQuote(quote) {
    const container = document.querySelector("#information")

    const newQuote = createQuote(quote)

    setupInteraction(newQuote)
    container.append(newQuote)

}

function displayQuotes(quotes) {

    const formattedQuotes = quotes.map(formatQuote)

    formattedQuotes.forEach(displayQuote)
}

function getAndDisplayQuotes() {
    getData({
        endpoint: "quotes",
        pageNum: 0,
        elementsPerPage: 5,
        displayFunction: displayQuotes
    })


}

//displayQuote( formatQuote(fakeData[0]) )
getAndDisplayQuotes()
console.log("Consumo API")