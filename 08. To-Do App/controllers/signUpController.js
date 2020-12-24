
let User = require('../models/usersModel');
let top = require('../views/partial/signUpTop');
let bottom = require('../views/partial/signUpBottom');

exports.getSignUpPage = function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(top + bottom);
    res.end();
}

exports.postSignUpPage = function(req, res) {
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
        let imageNum = pieces[2].split('=')[1];

        User.find({username:username}, function(err, username_records) {
            if(err) {console.log(err);}
            User.find({password:password}, function(err, password_records) {
                if(err) {console.log(err);}
                User.find({imageNum:imageNum}, function(err, imageNum_records) {
                    if(err) {console.log(err);}
                    else{
                        if (username_records == 0 && password_records == 0 && imageNum_records == 0) {
                            let _newuser = new User({username:username, password:password, imageNum:imageNum});
                            _newuser.save(function(err){
                                if(err) {console.log(err);}
                                else {
                                    res.writeHead(301, {'Location': '/login'});
                                    res.end();
                                }
                            })
                        }
                        else {
                            let content = 'User with specified username and password exists';
                            let p = `<p>${content}</p>`;
        
                            res.write(top + p + bottom);
                            res.end();
                        }
                    }
                    
                })
            })
        })
    })
}