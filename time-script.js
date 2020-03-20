//$(document).ready(function() {	// This function is a "wrapper function" for jQuery use //
	// ########## TIMER - 1: ########## Placing a clock in the jumbotron header section
	// const dayMom = moment();
	// function update() {
	// 	$('#currentDay').html(moment().format('dddd, D MMMM YYYY, H:mm:ss'));
	// }
	// setInterval(update, 1000);

// ########## TIMER - 2: ########## Times:left div, Changes: mid div, Saves: right div
// ===== Looping through 9am to 5 pm ===== //
	var currentTime = moment().format('H');
	console.log(currentTime);
	
	for(i = 9; i < 18; i++) {
		var divEl = document.getElementById("midDiv" + i);
console.log("midDiv" + i);
		if(currentTime == i){
		console.log('Found Current Time');
	divEl.style.backgroundColor = 'purple';
	
	}else if (currentTime > 17){
	divEl.style.backgroundColor = 'yellow';
	} else {
	 divEl.style.backgroundColor = 'blue';	
		// console.log(i);
}

};






//}); // "wrapper function" ending
