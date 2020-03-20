$(document).ready(function() {
	// This function is a "wrapper function" for jQuery use
	// Getting DOM element references
	var currentDayEl = document.getElementById('currentDay');
	var jumbotronHeaderEl = document.getElementById('jumbotronHeader');
	var footerEl = document.getElementById('footerDiv');

	// Placing a clock in the jumbotron header section
	const dayMom = moment();
	function update() {
		$('#currentDay').html(moment().format('dddd, D MMMM YYYY, H:mm:ss'));
	}
	setInterval(update, 1000);

	// Styling main header, clock display and footer
	currentDayEl.setAttribute(
		'style',
		'text-transform: uppercase; font-weight: bold; font-size: 1.5rem; color: #1dbec4'
	);
	jumbotronHeaderEl.setAttribute(
		'style',
		'text-transform: uppercase; font-weight: bold; font-size: 4rem; text-shadow: 2px 2px 8px #4f7c5e; color: #0f394f'
	);
		footerEl.setAttribute =
		('style', 'justify-content: center; align-items: center; color: red; text-align: center');
	// =======================================================
}); // "wrapper function" ending
