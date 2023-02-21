const express = require('express')
const app = express()
const PORT = 8000

const rappers ={
    '21 savage' : {
        'age' : 29,
        'birthName' : 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper' : {
        'age' : 29,
        'birthName' : 'Chancelor Bennet',
        'birthLocation' : 'Chicago, Illinois'
    },
    'unknown' : {
        'age' : 0,
        'birthName' : 'unknown',
        'birthLocation' : 'unknown'
    }
    'lil wayne' : {
        'age' : 40,
        'birthName' : 'Dwayne Michael Carter Jr.',
        'birthLocation' : 'New Orleans, Louisiana, U.S.'
    }
}

app.get('/' , (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if( rappers[rapperName]) {
        response.json(rappers[rapperName])
    }else {
        response.json(rappers[ 'unknown' ])
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})