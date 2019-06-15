let tasks = [];

exports.addTask = (obj) =>{
    tasks.push(obj);
    console.log('printing tasks:');
    console.log(tasks);
}

