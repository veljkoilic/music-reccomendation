// boots up a server that makes the requests to the api. The app can then fetch from this server and avoid cors
//while in local development.

const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const CircularJSON = require('circular-json');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// call the API
app.get('/:query', (req, res) => {
    const query = req.params.query
    let queryArray = query.split(" ")
    let filteredQueryArray = queryArray.filter(function(e){
        return e != "";
    })
    let q = filteredQueryArray.join("+");

    axios.get(`https://tastedive.com/api/similar?q=${q}&verbose=1&info=1&type=music&k=421974-musictas-2JCVA89T`)
    .then(data => {res.send(CircularJSON.stringify(data.data));})
    .catch(error=> {console.log(error.message);})});
    
    app.listen(5000, () => console.log('server started'));