
let Item = require('../models/itemsModel');
let top = require('../views/partial/pageListTop');
let bottom = require('../views/partial/pageListBottom');

exports.getListPage = function(req,res) {

    res.writeHead(200,{'Content-Type': 'text/html'} )

    Item.find(function(err, records) {
        if(err) {console.log(err);}
        else {
            let ul = '<ul>';

            for(let i =0 ; i < records.length; i++) {
                let item = records[i].item;
                let li = `<li>${item}</li>`;
                ul = ul + li;
            }

            ul = ul + '</ul>';
            res.write(top + ul + bottom);
            res.end();
        }
    });        
}

exports.postItemPage = function(req,res) {
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
                    res.writeHead(301, {'Location' : '/list/all'});
                    res.end();
                }
            })
        })
}