const {Schema, model} = require('mongoose')

const Role = new Schema({
  value: {type: String, uniquie: true, default: "USER"}
})

module.exports = model('Role', Role)