// writing asynchronous code with callbacks

var a = function(e, callback){
	var limit = 5;
	if(e > limit){
		callback(null, e);
	}else{
		callback(new Error("number not larger than " + limit));
	}
}

var getAnswers = function(err, results){
	if(err){
		console.log('error message '+err.message);
	}else{
		console.log('my results: ' + results);
	}
}

for(var i=-1; i<10; i++){
   a(i, getAnswers);
}