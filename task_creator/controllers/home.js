const path = require('path');
const fs = require('fs');

var tasks = [];

exports.getHomepage = (req, res, next) =>{
    res.render(path.join('home'), {tasks : tasks});
}

exports.getAdd = (req, res, next) =>{
    res.render(path.join('add'));
}

exports.postAdd = (req, res, next) =>{
    const newtask = {title: req.body.title, desc: req.body.description, date: req.body.date};

//    fs.readFile(path.join(''))
    fs.readFile(path.join(__dirname + '/../models/tasks.json'), (err, fileContent) => {
        
            if(err){
                console.log('ERRO');
                console.log(err);
            }
            else{
                tasks = JSON.parse(fileContent);
                tasks.push(newtask);
                console.log(tasks);
                fs.writeFile(path.join(__dirname + '/../models/tasks.json'), JSON.stringify(tasks), err => {
                    if(err){
                        console.log(err);
                    }
                });
            }
    });
    res.redirect('/');
}