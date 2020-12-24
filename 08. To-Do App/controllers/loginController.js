let fs = require('fs');
let path = require('path');
let User = require('../models/usersModel');

exports.getLoginPage = function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    let signUpHtmlPath = path.join(__dirname, '..', 'views', 'login.html');

    fs.readFile(signUpHtmlPath, function(err, data) {
        if(err) {
            console.log(err)
        }
        else {
            res.write(data.toString())
        }
        res.end();
    });
}

exports.postLoginPage = function(req, res) {
    let data = [];

    req.on('data', function(chunk) {
        console.log(chunk);
        data.push(chunk);
    })

    req.on('end', function() {
        let _info = Buffer.concat(data).toString();
        let pieces = _info.split('&');
        let username = pieces[0].split('=')[1];
        let password = pieces[1].split('=')[1];

        User.find({username:username, password:password}, function(err, records) {
            if(err) {console.log(err);}
            else {
                if(records.length == 1) {
                    let imageNum = records[0]['imageNum']
                    req.session.put('username',username);
                    req.session.put('password',password);
                    req.session.put('imageNum', imageNum);
                    res.writeHead(301, {'Location': '/list/all'});
                    res.end();
                }
                else {
                    res.writeHead(301, {'Location': '/login'});
                    res.end();
                }
            }
        })
    })
}