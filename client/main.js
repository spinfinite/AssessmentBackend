const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const quoteBtn = document.getElementById("getQuotesButton")
const quoteList = document.querySelector("ul")
const form = document.querySelector("form")
const input = document.querySelector("input")
const deleteBtn = document.querySelector("deleteButton")



const displayQuotes = (quotesArr) => {
    quoteList.innerHTML = ''

    quotesArr.forEach((quoteObj, index) => {
        let { quote, likes } = quoteObj // destructure quote, likes

        let listQuote = document.createElement('li') // create a list element
        let quoteName = document.createElement('span') // create a span element
        let deleteBtn = document.createElement('deleteButton')
        let likesBtn = document.createElement('likesButton')

        quoteName.textContent = `Quote ${index + 1}: ${quote}  Likes: ${likes} `

        quoteName.id = index
        quoteName.addEventListener('click', addQuote)

        likesBtn.textContent = likes
        likesBtn.id = likes++
        likesBtn.addEventListener('click', addLikes)

        deleteBtn.id = index
        deleteBtn.removeEventListener('click', deleteQuote)

        listQuote.appendChild(quoteName)
        listQuote.appendChild(deleteBtn)
        quoteList.appendChild(listQuote)
        listQuote.appendChild(likesBtn)

    })

}

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data
            alert(data)
    })
}

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data
            alert(data)
    })
}

const getQuotes = () => {
    axios.get(`http://localhost:4000/api/quotes/`)
        .then(res => {
            // assign the Object to a constant
            const data = res.data
            console.log(data) // test the constant by consoling out
                displayQuotes(res.data) // call the displayQuotes function
        })
        .catch(err => console.log(err))
}

//We need an event because we will target a quote
const addQuote = (evt) => {  
    evt.preventDefault()
    let bodyObj = {
        quote: input.value,
        likes: 0
    }
    axios.post(`http://localhost:4000/api/quotes/`, bodyObj)
        .then(response => {
            displayQuotes(response.data)
        })
        .catch(err => console.log(err))

}

const deleteQuote = evt => {
    evt.preventDefault()
    axios.delete(`http://localhost:4000/api/quotes/${evt.target.id}`)
        .then(res => {
            displayQuotes(res.data)
        })
        .catch(err => console.log(err))
}

const addLikes = () => {
    axios.get(`http://localhost:4000/api/quotes/${evt.target.id}`)
        .then(res => {
            // assign the Object to a constant
            const data = res.data
            console.log(data) // test the constant by consoling out
            displayQuotes(res.data) // call the displayQuotes function
     })
    .catch(err => console.log(err))

}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
quoteBtn.addEventListener('click',getQuotes)
form.addEventListener('submit', addQuote)
form.removeEventListener('submit', deleteQuote)
form.addEventListener('click',addLikes)
getQuotes()
//getQuotes()
