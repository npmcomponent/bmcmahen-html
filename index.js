var empty = require('yields-empty')
	, append = require('bmcmahen-append');

module.exports = function(el, content){
	return append(empty(el), content);
};