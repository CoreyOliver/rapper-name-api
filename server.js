const express = require('express')
const app = express()
const PORT = 8000

const rappers ={
    '21 Savage' : {
        'age' : 29,
        'birthName' : 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'Chance the Rapper' : {
        'age' : 29,
        'birthName' : 'Chancelor Bennet',
        'birthLocation' : 'Chicago, Illinois'
    },
    'unknown' : {
        'age' : 0,
        'birthName' : 'unknown',
        'birthLocation' : 'unknown'
    }
}

app.get('/' , (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {
    response.json(rappers)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})