$(document).ready(function() {	// This function is a "wrapper function" for jQuery use //
	// ########## TIMER - 1: ########## Placing a clock in the jumbotron header section
const dayMom = moment();
function update() {
	$('#currentDay').html(moment().format('dddd, D MMMM YYYY, H:mm:ss'));
}
setInterval(update, 1000);

// ########## TIMER - 2: ########## Times:left div, Changes: mid div, Saves: right div
// ===== Looping through 9am to 5 pm ===== //
	var currentTime = moment().format('H');
	console.log(currentTime); // Prints the current time in hour
	
	for(i = 9; i < 18; i++) {
		var divEl = document.getElementById("midDiv" + i);
console.log("midDiv" + i); // Prints total 9 to 17 midDiv values
		if(currentTime == i){
		console.log('Found Current Time');
	divEl.style.backgroundColor = '#EEF9BF';
	
	}else if (currentTime > 18) {
	divEl.style.backgroundColor = '#F6E5F5';
	} else {
	 divEl.style.backgroundColor = '#F7D695';	
		
}
};
// ########## Save buttons event listener: ########## 
 timeBlockDivOneThree.addEventListener("click", saveContentOne);
 function saveContentOne() {
 var midDiv1Content = document.getElementById("inputFieldOne").value;
 console.log(midDiv1Content);
 }
 timeBlockDivTwoThree.addEventListener("click", saveContentTwo);
 function saveContentTwo() {
 var midDiv2Content = document.getElementById("inputFieldTwo").value;
 console.log(midDiv2Content);
 }
 timeBlockDivThreeThree.addEventListener("click", saveContentThree);
 function saveContentThree() {
 var midDiv3Content = document.getElementById("inputFieldThree").value;
 console.log(midDiv3Content);
 }
 timeBlockDivFourThree.addEventListener("click", saveContentFour);
 function saveContentFour() {
 var midDiv4Content = document.getElementById("inputFieldFour").value;
 console.log(midDiv4Content);
 }
 timeBlockDivFiveThree.addEventListener("click", saveContentFive);
 function saveContentFive() {
 var midDiv5Content = document.getElementById("inputFieldFive").value;
 console.log(midDiv5Content);
 }
 timeBlockDivSixThree.addEventListener("click", saveContentSix);
 function saveContentSix() {
 var midDiv6Content = document.getElementById("inputFieldSix").value;
 console.log(midDiv6Content);
 }
 timeBlockDivSevenThree.addEventListener("click", saveContentSeven);
 function saveContentSeven() {
 var midDiv7Content = document.getElementById("inputFieldSeven").value;
 console.log(midDiv7Content);
 }
 timeBlockDivEightThree.addEventListener("click", saveContentEight);
 function saveContentEight() {
 var midDiv8Content = document.getElementById("inputFieldEight").value;
 console.log(midDiv8Content);
 }
 timeBlockDivNineThree.addEventListener("click", saveContentNine);
 function saveContentNine() {
 var midDiv9Content = document.getElementById("inputFieldNine").value;
 console.log(midDiv9Content);
 }

// ====================================================================

}); // "wrapper function" ending
