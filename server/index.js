const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())


// const { getFortune } = require('./controller') we can write this:
const { getCompliment,
        getFortune,
        getQuotes,
        addQuote,
        deleteQuote,
        addLikes
} = require('./controller')

// End Points:        
app.get("/api/compliment", getCompliment)

app.get("/api/fortune", getFortune)

app.get("/api/quotes", getQuotes)

app.post("/api/quotes", addQuote)

app.delete("/api/quotes:index",deleteQuote)

app.put("api/quotes:index", addLikes)

app.listen(4000, () => console.log("Server running on 4000"))
