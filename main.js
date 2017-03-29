/**
 * 
 */

var season = [
	["Bangkok", "Su"]
	["Hookaido", "W"]
]


var activitity = [
	["New York", "Museum"],
	["Bangkok", "Beach"],
	["Paris", "Shopping"],
	["Taipei", "Shopping"],
	["Hokkaido", "SkiAndSnow"],
	["Sydney", "Diving"],
	["Peru", "HistoricalVisit"]
]

var festival = [
	["Paris", "Christmas"],
	["Hokkaido", "Christmas"],
	["Taipei", "CNY"],
	["New York", "Easter"]
]

var budget = [
	["New York", "L"],
	["Bangkok", "E"],
	["Paris", "L"],
	["Taipei", "E"],
	["Hokkaido", "M"],
	["Sydney", "M"],
	["Peru", "L"]
]




function seasonMatch(input){
	
	var result=[];
	
	
	for(var i=0;i<input.length;i++){
		for(var j=0;j<season[i].length;j++){
			if(seaon[i][j]==input[i]){
				result.push(seaon[i][0]);
			}
		}
	}
	return result;
}


function activitityMatch(input){
	
	var result=[];
	
	
	for(var i=0;i<input.length;i++){
		for(var j=0;j<activity[i].length;j++){
			if(activity[i][j]==input[i]){
				result.push(activity[i][0]);
			}
		}
	}
	return result;
}

function festivalMatch(input){
	
	var result=[];
	
	
	for(var i=0;i<input.length;i++){
		
		for(var j=0;j<festival[i].length;j++){
			if(festival[i][j]==input[i]){
				result.push(festival[i][0]);
			}
		}
	}
	return result;
}

function budgetMatch(input){
	
	var result=[];
	
	
	for(var i=0;i<input.length;i++){
		
		for(var j=0;j<budget[i].length;j++){
			if(budget[i][j]==input[i]){
				result.push(budget[i][0]);
			}
		}
	}
	return result;
}


$("#searchbutton").on("click", function{
	var result;
	var uniresult;
	result += matchActivity($("#activities").val());
	result += matchSeason($("#festival").val());
	result += matchBudget($("#budget").val());
	result += matchFestival($("#festival").val());
	for(var i=0; i < result.length; i++){
		if(uniresult.indexOf(result[i]) == -1){
			uniresult.push(result[i]);
		}
	}
	var oneoff = "";
	for(var i=0; i < uniresult.length; i++){
		oneoff += uniresult[i] + " ";
	}
	$(".result").html = oneoff;

})




