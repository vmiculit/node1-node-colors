var colorutils = require('./colorutils')

var r = process.argv[2]
var g = process.argv[3]
var b = process.argv[4]

console.log(colorutils.luminosity(r,g,b))