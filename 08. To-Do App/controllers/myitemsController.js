
let Item = require('../models/itemsModel');
let top = require('../views/partial/myListTop');
let bottom = require('../views/partial/myListBottom');

exports.getMyListPage = function(req,res) {
    let username = req.session.get('username')
    let imageNum = req.session.get('imageNum');

    res.writeHead(200,{'Content-Type': 'text/html'} )

    Item.find({username: username}, function(err, records) {
        if(err) {console.log(err);}
        else {
            let ul = '<ul>';

            for(let i =0 ; i < records.length; i++) {
                let item = records[i].item;
                let li = `<li>${item}</li>`;
                ul = ul + li;
            }

            ul = ul + '</ul>';
            let img = `<img src='https://randomuser.me/api/portraits/men/${imageNum}.jpg'/>`
            res.write(top + img + ul + bottom);
            res.end();
        }
    }); 
 
}

exports.postMyItemPage = function(req,res) {
    let data = [];
        req.on('data', function(chunk) {
            data.push(chunk);
        })
        req.on('end', function() {
            let username = req.session.get('username')
            let str = Buffer.concat(data).toString();
            let info = str.split('=')[1];
            let _item = new Item({username: username, item: info});

            _item.save(function(err) {
                if(err) {console.log(err)}
                else {
                    res.writeHead(301, {'Location' : '/list/mine'});
                    res.end();
                }
            })
        })
}