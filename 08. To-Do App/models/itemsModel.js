let mongooose = require('mongoose');

let Scheme = mongooose.Schema;

let itemsSchema = new Scheme( {
    username : String,
    item : String,
});

module.exports = mongooose.model('items', itemsSchema);