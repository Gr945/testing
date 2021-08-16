const mongoose = require('mongoose')


const Object = mongoose.model('Object', {
  data:{type:String},
  name: { type: String},
  amount: { type: Number},
  distance: { type: Number},
 
});

module.exports = Object;
