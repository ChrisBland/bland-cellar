var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://cellar:bland@paulo.mongohq.com:10085/app19869115');

var WineSchema = new Schema({
  producer: {
    type: String,
    default: ''
  },
  variety: {
    type: String,
    default: ''
  },
  price: {
    type: String,
    default: '$0.00'
  }
});

var Wine = mongoose.model('Wine', WineSchema);


var helpers = require('./helpers.js');

exports.viewAll = function(req, res){
  Wine.find({}, function(err, wines) {
    if(err) console.log(err);
    console.log(wines);
    res.render('wines', {wines: wines});
  });
}

exports.add = function(req, res){
    var wine = new Wine({});
    console.log(wine);
    res.render('add', {
      helpers: helpers,
      wine: wine
    });
}

exports.saveWine = function(req, res){
    var data = req.body;
    var wine = new Wine(data);
    wine.save(function(err){
      console.log(wine);
      if(err) console.log(err);
      res.render('wine', wine);
    });
}

exports.findWine = function(req, res){
  var id = req.params.id;
  Wine.findOne({'_id':id }, function(err, item) {
    if(err) console.log(err);
    res.render('wine', item);
  });
  
}