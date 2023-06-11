const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const quoteBtn = document.getElementById("getQuotesButton")
const quoteList = document.querySelector('ul')

const displayQuotes = (quotesArr) => {
    quoteList.innerHTML = ''

    quotesArr.forEach((quoteObj, index) => {
        let { quoteId, quote, likes } = quoteObj // destructure id, quote, likes

        let listQuote = document.createElement('li') // create a list element
        let quoteName = document.createElement('span') // create a span element

        quoteName.textContent = quoteId

        quoteName.quoteId = index
        //quoteName.addEventListener('click, update')

        listQuote.appendChild(quoteName)
        quoteList.appendChild(listQuote)

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


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
quoteBtn.addEventListener('click',getQuotes)
//form.addEventListener('Submit Quote', addQuote)
getQuotes()
