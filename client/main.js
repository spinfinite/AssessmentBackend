const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const quoteBtn = document.getElementById("quoteButton")

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

const getQuotes = (evt) => {
    axios.get(`http://localhost:4000/api/quotes/${evt.target.value}`)
        .then(res => {
            const data = res.data
            //console.log(data)
            let { quote } = res.data
            console.log(quote)
        })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
quoteBtn.addEventListener('click',getQuotes)
