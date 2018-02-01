var mathjs = require('./lib/math');
var numbers = {
	start: 2,
	end: 5,
	getStartNum: function(){
		return this.start;
	}
};


//console.log(numbers.getStartNum());
//numbers.start = 12;
//console.log(numbers.getStartNum());

console.log(mathjs.getSomething(numbers.start));