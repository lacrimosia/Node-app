// writing asynchronous code with callbacks

// testing function 
// the function we would use to run regular stuff
var a = function(e, callback){
	var limit = 3;
	if(e > limit){
		callback(null, e);
	}else{
		callback(new Error("number not larger than " + limit));
	}
}

// callback function
// first parameter on a callback is the error message
// the second parameter is the other custom parameter if there is no error
var getAnswers = function(err, results){
	if(err){
		console.log('error message '+err.message);
	}else{
		console.log('my results: ' + results);
	}
}

// calling the a function to print out all numbers from -1 to 9
for(var i=-1; i<10; i++){
   a(i, getAnswers);
}