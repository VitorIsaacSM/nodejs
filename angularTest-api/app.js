const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(process.env.PORT || 3001);

app.use(cors());

app.get('/getData', (req, res) => {
    res.json(getDataFromFile());
});

app.post('/postData', (req, res) => {
    let obj = {
        nome: req.body.nome,
        idade: req.body.idade,
        emprego: req.body.emprego,
        formacao: req.body.formacao
    };

    let newDB = getDataFromFile();

    newDB.push(obj);
    console.log(newDB);

    saveOnFile(newDB);

    res.status(200);


});

app.post('/resetData', (req, res) => {
    console.log('deletando lista');
    saveOnFile([]);
});


function getDataFromFile (){
    return JSON.parse(fs.readFileSync('./database.json'));
    
}

function saveOnFile(newJson){
    fs.writeFileSync('./database.json', JSON.stringify(newJson));
}
