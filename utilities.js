const apiUrl = "https://breakingbadapi.com/api/"
//obtain data

function getData({endpoint, displayFunction, currentPage, pageSize}) {

    let url = apiUrl + endpoint
    if (pageSize) {
        const offset = pageSize * currentPage
        const queryString = `?limit=${pageSize}&offset=${offset}`

        url += queryString
    }

    const request = fetch(url)

    request.then(function (response) {

        response
            .json()
            .then(function (data) {

                displayFunction(data)
            })
    })

}