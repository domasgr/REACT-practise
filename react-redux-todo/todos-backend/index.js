const express = require("express");
const app = express();
const cors = require("cors"); // alows to make a request to localhost:3000 to localhost:3001
const morgan = require("morgan");
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todos');

const port = process.env.PORT || 3000;

app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())
app.use('/api/todos', todoRoutes)

app.use(function(req, res, next){
    let err = new Error('Not found');
    err.status = 404;
    next(err);
})

app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: err
    })
})

app.listen(port, function(){
    console.log('Server is runing on port 3001');
});