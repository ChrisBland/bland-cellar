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
    default: ''
  },
  purchased: {
    type: String,
    default: ''
  },
  purchasedDate: {
    type: Date,
    default: null
  },
  createdDate: {
    type: Date
  },
  instock: {
    type: String,
    default: 'true'
  },
  removalDate: {
    type: Date,
    default: null
  },
  location:{
    type: String,
    default: ''
  },
  vintage:{
    type: String,
    default: ''
  },
  description:{
    type: String,
    default: ''
  },
  country:{
    type: String,
    default: ''
  },
  grapes:{
    type: String,
    default: ''
  },
  saved:{
    type: Boolean,
    default: false
  }
});

var Wine = mongoose.model('Wine', WineSchema, 'wines');


var helpers = require('./helpers.js');



exports.viewAll = function(req, res){
  var data = {};
  Wine.find({}, function(err, wines) {
    if(err) console.log(err);
    res.render('wines', {
      wines: wines,
      helpers: helpers
    });
  });
}

exports.edit = function(req, res){
   var id = req.params.id;
   console.log(id);
   var msgs = {};
   Wine.findOne({'_id':id }, function(err, item) {
    item.saved = true;
    if(err) msgs.error = err;
    res.render('add', {
      helpers: helpers,
      wine: item,
      msgs: msgs
    });
  });
}

exports.find = function(req, res){
  res.render('find', {
    helpers: helpers
  });
}

exports.search = function(req, res){
  var data = req.body;

  Wine.find(data, function(err, wines){
    var msgs = {};
    if(err) msgs.error = err;
    res.render('wines', {
      wines: wines,
      msgs: msgs,
      helpers: helpers
    });
  })
  
}


exports.add = function(req, res){
  var wine = new Wine({});
  wine.saved = false;
  res.render('add', {
    helpers: helpers,
    wine: wine
  });
}


exports.saveWine = function(req, res){
  var data = req.body;
  data.saved = true;
  data.createdDate = new Date();
  var msgs = {};
  Wine.update({_id: data.id}, data, {upsert: true}, function(err){
    if(err) msgs.error = err;
    if(!err) msgs.success = 'Wine saved!';
    res.render('wine', {
      wine: data,
      msgs: msgs,
      helpers: helpers
    });
  });
}

exports.removeWine = function(req, res){
  var id = req.params.id;
  var msgs = {};
  Wine.findOne({'_id':id }, function(err, item) {
    item.instock = false;
    item.removalDate = new Date();
    item.save(function(err){
      if(err) msgs.error = err;
      res.render('wine', {
        wine: item,
        msgs: msgs,
        helpers: helpers
      });
    });    
  });
}

exports.deleteWine = function(req, res){
  var id = req.params.id;
  var msgs = {};
  Wine.remove({'_id':id }, function(err, item) {
    console.log(err);
    console.log(item);
    res.redirect('/');
    /*item.instock = false;
    item.removalDate = new Date();
    item.save(function(err){
      if(err) msgs.error = err;
      res.render('wine', {
        wine: item,
        msgs: msgs
      });
    });    */
  });
}

exports.findWine = function(req, res){
  var msgs = {};
  var id = req.params.id;
  Wine.findOne({'_id':id }, function(err, item) {
    if(err) msgs.error = err;
    res.render('wine', {
      wine: item,
      msgs: msgs,
      helpers: helpers
    });
  });
}