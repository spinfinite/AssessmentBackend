// Create an object of quotes that people can like or dislike

const inspiringQuotes = [
    {
        quoteId: 1,
        quote: "A beautiful, smart, and loving person will be coming into your life.",
        likes: 0
    },
    {
        quoteId: 2,
        quote: "A light heart carries you through all the hard times.",
        likes: 0
    },
    {
        quoteId: 3,
        quote: "Embrace this love relationship you have!",
        likes: 0
    },
    {
        quoteId: 4,
        quote: "Have a beautiful day.",
        likes: 0
    },
    {
        quoteId: 5,
        quote: "Welcome change.",
        likes: 0
    }

]

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", 
                            "Cool shirt!", 
                            "Your Javascript skills are stellar."]
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length)
        let randomCompliment = compliments[randomIndex]
      
        res.status(200).send(randomCompliment)
    },
// Add another get request that involves fortune cookie statemtns
    getFortune: (req, res) => {
        const fortunes = ["A hunch is creativity trying to tell you something.",
                        "All will go well with your new project.",
                        "In order to take, one must first give.",
                        "The only people who never fail are those who never try.",
                        "Soon life will become more interesting."]

        // get random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortunes = fortunes[randomIndex]

        res.status(200).send(randomFortunes)

    },
    getQuotes: (req, res) => {
        res.status(200).send(inspiringQuotes)
    }
}