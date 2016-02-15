// CALCULATE LUMINOSITY
var luminosity = function(r,g,b){
	var result = 0.2126*r + 0.7152*g + 0.0722*b
	return result
}

// DARKEN
var darken = function(r,g,b){
	r = r *.8
	g = g *.8
	b = b *.8
	return Math.round(r*10)/10 + " " + Math.round(g*10)/10 + " " + Math.round(b*10)/10
}

module.exports = {
	luminosity 	: luminosity,
	darken		: darken
};