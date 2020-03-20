var containerEl = document.querySelector('.container');
var timeBlockDiv = document.createElement('div');
containerEl.appendChild(timeBlockDiv);
var timeBlockDivOneTwo = document.createElement('div');
timeBlockDiv.appendChild(timeBlockDivOneTwo);

// ############# Creating HTML elements in .container field ############### //
function rowCreation() {
	// ===== This Function Creates rows and columns =====

	// ===== Creating row-1 elements ===== //
	var timeBlockDivOneOne = document.createElement('div');
	timeBlockDiv.appendChild(timeBlockDivOneOne);
	var timeBlockDivOneTwo = document.createElement('div');
	timeBlockDiv.appendChild(timeBlockDivOneTwo);
	var timeBlockDivOneThree = document.createElement('div');
	timeBlockDiv.appendChild(timeBlockDivOneThree);

	// ===== Styling three divs in row-1 ===== //
	timeBlockDivOneOne.setAttribute(
		'style',
		'height:50px; background-color:#fafafa; width:15%; border-top-left-radius:10px; border-bottom-left-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
	);
	timeBlockDivOneOne.innerHTML = '9:00AM';
	timeBlockDivOneTwo.setAttribute(
		'style',
		'height:50px; background-color:#dadada; width:70%; border: 1px solid #a0b7db; float: left'
	);
	timeBlockDivOneThree.setAttribute(
		'style',
		'height:50px; background-color:#1dbec4; color: white; width:15%; border-top-right-radius:10px; border-bottom-right-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
	);
	timeBlockDivOneThree.innerHTML = '<i class="fas fa-lock"></i>';

	// ===== Creating row-2 elements ===== //
	var timeBlockDivTwoOne = document.createElement('div');
	timeBlockDiv.appendChild(timeBlockDivTwoOne);
	var timeBlockDivTwoTwo = document.createElement('div');
	timeBlockDiv.appendChild(timeBlockDivTwoTwo);
	var timeBlockDivTwoThree = document.createElement('div');
	timeBlockDiv.appendChild(timeBlockDivTwoThree);

	// ===== Styling three divs in row-2 ===== //
	timeBlockDivTwoOne.setAttribute(
		'style',
		'height:50px; background-color:#fafafa; width:15%; border-top-left-radius:10px; border-bottom-left-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
	);
	timeBlockDivTwoOne.innerHTML = '10:00AM';
	timeBlockDivTwoTwo.setAttribute(
		'style',
		'height:50px; background-color:#dadada; width:70%; border: 1px solid #a0b7db; float: left'
	);
	timeBlockDivTwoThree.setAttribute(
		'style',
		'height:50px; background-color:#1dbec4; color: white; width:15%; border-top-right-radius:10px; border-bottom-right-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
	);
	timeBlockDivTwoThree.innerHTML = '<i class="fas fa-lock"></i>';

	// ===== Creating row-3 elements ===== //
	var timeBlockDivThreeOne = document.createElement('div');
	timeBlockDiv.appendChild(timeBlockDivThreeOne);
	var timeBlockDivThreeTwo = document.createElement('div');
	timeBlockDiv.appendChild(timeBlockDivThreeTwo);
	var timeBlockDivThreeThree = document.createElement('div');
	timeBlockDiv.appendChild(timeBlockDivThreeThree);

	// ===== Styling three divs in row-3 ===== //
	timeBlockDivThreeOne.setAttribute(
		'style',
		'height:50px; background-color:#fafafa; width:15%; border-top-left-radius:10px; border-bottom-left-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
	);
	timeBlockDivThreeOne.innerHTML = '11:00AM';
	timeBlockDivThreeTwo.setAttribute(
		'style',
		'height:50px; background-color:#dadada; width:70%; border: 1px solid #a0b7db; float: left'
	);
	timeBlockDivThreeThree.setAttribute(
		'style',
		'height:50px; background-color:#1dbec4; color: white; width:15%; border-top-right-radius:10px; border-bottom-right-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
	);
	timeBlockDivThreeThree.innerHTML = '<i class="fas fa-lock"></i>';

	// ===== Creating row-4 elements ===== //
	var timeBlockDivFourOne = document.createElement('div');
	timeBlockDiv.appendChild(timeBlockDivFourOne);
	var timeBlockDivFourTwo = document.createElement('div');
	timeBlockDiv.appendChild(timeBlockDivFourTwo);
	var timeBlockDivFourThree = document.createElement('div');
	timeBlockDiv.appendChild(timeBlockDivFourThree);

	// ===== Styling three divs in row-4 ===== //
	timeBlockDivFourOne.setAttribute(
		'style',
		'height:50px; background-color:#fafafa; width:15%; border-top-left-radius:10px; border-bottom-left-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
	);
	timeBlockDivFourOne.innerHTML = '12:00PM';
	timeBlockDivFourTwo.setAttribute(
		'style',
		'height:50px; background-color:red; width:70%; border: 1px solid #a0b7db; float: left'
	);
	timeBlockDivFourThree.setAttribute(
		'style',
		'height:50px; background-color:#1dbec4; color: white; width:15%; border-top-right-radius:10px; border-bottom-right-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
	);
	timeBlockDivFourThree.innerHTML = '<i class="fas fa-lock"></i>';

	// ===== Creating row-5 elements ===== //
	var timeBlockDivFiveOne = document.createElement('div');
	timeBlockDiv.appendChild(timeBlockDivFiveOne);
	var timeBlockDivFiveTwo = document.createElement('div');
	timeBlockDiv.appendChild(timeBlockDivFiveTwo);
	var timeBlockDivFiveThree = document.createElement('div');
	timeBlockDiv.appendChild(timeBlockDivFiveThree);

	// ===== Styling three divs in row-5 ===== //
	timeBlockDivFiveOne.setAttribute(
		'style',
		'height:50px; background-color:#fafafa; width:15%; border-top-left-radius:10px; border-bottom-left-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
	);
	timeBlockDivFiveOne.innerHTML = '1:00PM';
	timeBlockDivFiveTwo.setAttribute(
		'style',
		'height:50px; background-color:green; width:70%; border: 1px solid #a0b7db; float: left'
	);
	timeBlockDivFiveThree.setAttribute(
		'style',
		'height:50px; background-color:#1dbec4; color: white; width:15%; border-top-right-radius:10px; border-bottom-right-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
	);
	timeBlockDivFiveThree.innerHTML = '<i class="fas fa-lock"></i>';

	// ===== Creating row-6 elements ===== //
	var timeBlockDivSixOne = document.createElement('div');
	timeBlockDiv.appendChild(timeBlockDivSixOne);
	var timeBlockDivSixTwo = document.createElement('div');
	timeBlockDiv.appendChild(timeBlockDivSixTwo);
	var timeBlockDivSixThree = document.createElement('div');
	timeBlockDiv.appendChild(timeBlockDivSixThree);

	// ===== Styling three divs in row-6 ===== //
	timeBlockDivSixOne.setAttribute(
		'style',
		'height:50px; background-color:#fafafa; width:15%; border-top-left-radius:10px; border-bottom-left-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
	);
	timeBlockDivSixOne.innerHTML = '2:00PM';
	timeBlockDivSixTwo.setAttribute(
		'style',
		'height:50px; background-color:green; width:70%; border: 1px solid #a0b7db; float: left'
	);
	timeBlockDivSixThree.setAttribute(
		'style',
		'height:50px; background-color:#1dbec4; color: white; width:15%; border-top-right-radius:10px; border-bottom-right-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
	);
	timeBlockDivSixThree.innerHTML = '<i class="fas fa-lock"></i>';

	// ===== Creating row-7 elements ===== //
	var timeBlockDivSevenOne = document.createElement('div');
	timeBlockDiv.appendChild(timeBlockDivSevenOne);
	var timeBlockDivSevenTwo = document.createElement('div');
	timeBlockDiv.appendChild(timeBlockDivSevenTwo);
	var timeBlockDivSevenThree = document.createElement('div');
	timeBlockDiv.appendChild(timeBlockDivSevenThree);

	// ===== Styling three divs in row-7 ===== //
	timeBlockDivSevenOne.setAttribute(
		'style',
		'height:50px; background-color:#fafafa; width:15%; border-top-left-radius:10px; border-bottom-left-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
	);
	timeBlockDivSevenOne.innerHTML = '3:00PM';
	timeBlockDivSevenTwo.setAttribute(
		'style',
		'height:50px; background-color:green; width:70%; border: 1px solid #a0b7db; float: left'
	);
	timeBlockDivSevenThree.setAttribute(
		'style',
		'height:50px; background-color:#1dbec4; color: white; width:15%; border-top-right-radius:10px; border-bottom-right-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
	);
	timeBlockDivSevenThree.innerHTML = '<i class="fas fa-lock"></i>';

	// ===== Creating row-8 elements ===== //
	var timeBlockDivEightOne = document.createElement('div');
	timeBlockDiv.appendChild(timeBlockDivEightOne);
	var timeBlockDivEightTwo = document.createElement('div');
	timeBlockDiv.appendChild(timeBlockDivEightTwo);
	var timeBlockDivEightThree = document.createElement('div');
	timeBlockDiv.appendChild(timeBlockDivEightThree);

	// ===== Styling three divs in row-8 ===== //
	timeBlockDivEightOne.setAttribute(
		'style',
		'height:50px; background-color:#fafafa; width:15%; border-top-left-radius:10px; border-bottom-left-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
	);
	timeBlockDivEightOne.innerHTML = '4:00PM';
	timeBlockDivEightTwo.setAttribute(
		'style',
		'height:50px; background-color:green; width:70%; border: 1px solid #a0b7db; float: left'
	);
	timeBlockDivEightThree.setAttribute(
		'style',
		'height:50px; background-color:#1dbec4; color: white; width:15%; border-top-right-radius:10px; border-bottom-right-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
	);
	timeBlockDivEightThree.innerHTML = '<i class="fas fa-lock"></i>';

	// ===== Creating row-9 elements ===== //
	var timeBlockDivNineOne = document.createElement('div');
	timeBlockDiv.appendChild(timeBlockDivNineOne);
	var timeBlockDivNineTwo = document.createElement('div');
	timeBlockDiv.appendChild(timeBlockDivNineTwo);
	var timeBlockDivNineThree = document.createElement('div');
	timeBlockDiv.appendChild(timeBlockDivNineThree);

	// ===== Styling three divs in row-9 ===== //
	timeBlockDivNineOne.setAttribute(
		'style',
		'height:50px; background-color:#fafafa; width:15%; border-top-left-radius:10px; border-bottom-left-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
	);
	timeBlockDivNineOne.innerHTML = '5:00PM';
	timeBlockDivNineTwo.setAttribute(
		'style',
		'height:50px; background-color:green; width:70%; border: 1px solid #a0b7db; float: left'
	);
	timeBlockDivNineThree.setAttribute(
		'style',
		'height:50px; background-color:#1dbec4; color: white; width:15%; border-top-right-radius:10px; border-bottom-right-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: none'
	);
	timeBlockDivNineThree.innerHTML = '<i class="fas fa-lock"></i>';
}

rowCreation();

//=======================================================
