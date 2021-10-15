const express = require('express') 

// file system library (included in node.js core)
const fs = require('fs')

// call the library to get an app obj which will be used to configure the server
const app = express() 
const port = 3000

// read directory (synchronously). Register endpoint on app obj
fs.readdirSync('./html').forEach(file => {

    // For all html pages page except index.html
    if(file !== 'index.html'){

        app.get('/' + file, (req, res) => {
            res.sendFile(__dirname + "/html/" + file)
        })
    } 
    // Endpoint for index.html
    else {
        app.get('/', (req, res) => {
            res.sendFile(__dirname + "/html/" + file)
        })
    }
})

// Register endpoint for css file on app obj
app.get('/stylesheet.css', (req, res) => {
    res.sendFile(__dirname + "/stylesheet.css")
})

// Register endpoint for bootstrap on app obj
app.get('/bootstrap.min.css', (req, res) => {
    res.sendFile(__dirname + "/node_modules/bootstrap/dist/css/bootstrap.min.css")
})

// Register endpoint for prism css on app obj
app.get('/prism.css', (req, res) => {
    res.sendFile(__dirname + "/node_modules/prismjs/themes/prism.css")
})

// Register endpoint for prism js on app obj
app.get('/prism.js', (req, res) => {
    res.sendFile(__dirname + "/node_modules/prismjs/prism.js")
})

// Register what port the server should be listening on and open it.
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})

