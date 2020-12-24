let http = require('http');
let signUpController = require('./controllers/signUpController');
let loginController = require('./controllers/loginController');
let itemsController = require('./controllers/itemsController');
let myitemsController = require('./controllers/myitemsController');
let errorController = require('./controllers/errorController');

let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase');

let NodeSession = require('node-session');

let session = new NodeSession({secret:'gaiwksmdj1234', 'lifetime' : 3000000});

let db = mongoose.connection;
db.once('open', function() {
    console.log('Connection was successful')
});

http.createServer(function(req, res) {
    let method = req.method;
    let url = req.url;
    if (url=='/') {url = '/login'};

    session.startSession(req,res,function() {
        if (method=='GET' && url=='/login') {
            loginController.getLoginPage(req,res);
        }
        else if (method=='POST' && url=='/login') {
            loginController.postLoginPage(req,res);
        }
        else if (method=='GET' && url=='/signUp') {
            signUpController.getSignUpPage(req,res);
        }
        else if (method=='POST' && url=='/signUp') {
            signUpController.postSignUpPage(req,res);
        }
        else if (method=='GET' && url=='/list/all') {        
            itemsController.getListPage(req,res);
        }
        else if (method=='POST' && url=='/list/all') {       
            itemsController.postItemPage(req,res);
        }
        else if (method=='GET' && url=='/list/mine') {       
            myitemsController.getMyListPage(req,res);
        }
        else if (method=='POST' && url=='/list/mine') {       
            myitemsController.postMyItemPage(req,res);
        }
        else {
            errorController.getErrorPage(req, res);
        }
    });

}).listen(3000);