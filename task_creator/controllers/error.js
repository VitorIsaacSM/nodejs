const path = require('path');

exports.get404 = (req, res, next) =>{
    res.status(404).render(path.join('404'));
}