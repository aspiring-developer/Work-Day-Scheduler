$(document).ready(function() {	// This function is a "wrapper function" for jQuery use //
// Getting DOM element references to style main header, clock display and footer
var currentDayEl = document.getElementById('currentDay');
var jumbotronHeaderEl = document.getElementById('jumbotronHeader');
var footerEl = document.getElementById('footerDiv');
leftColHeaderEl = document.getElementById('leftColHeader');
midColHeaderEl = document.getElementById('midColHeader');
rightColHeaderEl = document.getElementById('rightColHeader');
// Styling main header, clock display and footer
currentDayEl.setAttribute(
'style',
'text-transform: uppercase; font-weight: bold; font-size: 1.2rem; color: #1dbec4'
);
jumbotronHeaderEl.setAttribute(
'style',
'text-transform: uppercase; font-weight: bold; font-size: 4rem; text-shadow: 2px 2px 8px #4f7c5e; color: #0f394f; '
);
footerEl.setAttribute
 ('style', 'justify-content: center; padding: 1.5rem; margin-top: 1rem;background-color: #d9ddd9; color: #666; text-align:center; font-size: .9rem; align-items: center; text-align: center');
 // Styling column headers
 leftColHeaderEl.setAttribute(
  'style',
  'height:50px; background-color:#3b6978; color:#F7D695; width:15%; border-top-left-radius:10px; border-bottom-left-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
);
leftColHeaderEl.innerHTML = 'Time';

midColHeaderEl.setAttribute(
  'style',
  'height:50px; background-color:#3b6978; color:#F7D695; width:70%; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
);
midColHeaderEl.innerHTML = 'Notes / Description';

rightColHeaderEl.setAttribute(
  'style',
  'height:50px; background-color:#3b6978; color:#F7D695; width:15%; border-top-right-radius:10px; border-bottom-right-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: none'
);
rightColHeaderEl.innerHTML = 'Save &nbsp; <i class="fas fa-arrow-down"></i>';

// Styling column body elements (time, text field and save button)
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
  'height:50px; background-color:#06aed5; color: white; width:15%; border-top-right-radius:10px; border-bottom-right-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left;'
);
timeBlockDivOneThree.innerHTML = '<i class="fas fa-save"></i>';

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
  'height:50px; background-color:#06aed5; color: white; width:15%; border-top-right-radius:10px; border-bottom-right-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left;'
);
timeBlockDivTwoThree.innerHTML = '<i class="fas fa-save"></i>';

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
  'height:50px; background-color:#06aed5; color: white; width:15%; border-top-right-radius:10px; border-bottom-right-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
);
timeBlockDivThreeThree.innerHTML = '<i class="fas fa-save"></i>';

// ===== Styling three divs in row-4 ===== //
timeBlockDivFourOne.setAttribute(
  'style',
  'height:50px; background-color:#fafafa; width:15%; border-top-left-radius:10px; border-bottom-left-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
);
timeBlockDivFourOne.innerHTML = '12:00PM';
timeBlockDivFourTwo.setAttribute(
  'style',
  'height:50px; background-color:#dadada; width:70%; border: 1px solid #a0b7db; float: left'
);
timeBlockDivFourThree.setAttribute(
  'style',
  'height:50px; background-color:#06aed5; color: white; width:15%; border-top-right-radius:10px; border-bottom-right-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
);
timeBlockDivFourThree.innerHTML = '<i class="fas fa-save"></i>';

// ===== Styling three divs in row-5 ===== //
timeBlockDivFiveOne.setAttribute(
  'style',
  'height:50px; background-color:#fafafa; width:15%; border-top-left-radius:10px; border-bottom-left-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
);
timeBlockDivFiveOne.innerHTML = '1:00PM';
timeBlockDivFiveTwo.setAttribute(
  'style',
  'height:50px; background-color:#dadada; width:70%; border: 1px solid #a0b7db; float: left'
);
timeBlockDivFiveThree.setAttribute(
  'style',
  'height:50px; background-color:#06aed5; color: white; width:15%; border-top-right-radius:10px; border-bottom-right-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
);
timeBlockDivFiveThree.innerHTML = '<i class="fas fa-save"></i>';

// ===== Styling three divs in row-6 ===== //
timeBlockDivSixOne.setAttribute(
  'style',
  'height:50px; background-color:#fafafa; width:15%; border-top-left-radius:10px; border-bottom-left-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
);
timeBlockDivSixOne.innerHTML = '2:00PM';
timeBlockDivSixTwo.setAttribute(
  'style',
  'height:50px; background-color:#dadada; width:70%; border: 1px solid #a0b7db; float: left'
);
timeBlockDivSixThree.setAttribute(
  'style',
  'height:50px; background-color:#06aed5; color: white; width:15%; border-top-right-radius:10px; border-bottom-right-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
);
timeBlockDivSixThree.innerHTML = '<i class="fas fa-save"></i>';

// ===== Styling three divs in row-7 ===== //
timeBlockDivSevenOne.setAttribute(
  'style',
  'height:50px; background-color:#fafafa; width:15%; border-top-left-radius:10px; border-bottom-left-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
);
timeBlockDivSevenOne.innerHTML = '3:00PM';
timeBlockDivSevenTwo.setAttribute(
  'style',
  'height:50px; background-color:#dadada; width:70%; border: 1px solid #a0b7db; float: left'
);
timeBlockDivSevenThree.setAttribute(
  'style',
  'height:50px; background-color:#06aed5; color: white; width:15%; border-top-right-radius:10px; border-bottom-right-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
);
timeBlockDivSevenThree.innerHTML = '<i class="fas fa-save"></i>';

// ===== Styling three divs in row-8 ===== //
timeBlockDivEightOne.setAttribute(
  'style',
  'height:50px; background-color:#fafafa; width:15%; border-top-left-radius:10px; border-bottom-left-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
);
timeBlockDivEightOne.innerHTML = '4:00PM';
timeBlockDivEightTwo.setAttribute(
  'style',
  'height:50px; background-color:#dadada; width:70%; border: 1px solid #a0b7db; float: left'
);
timeBlockDivEightThree.setAttribute(
  'style',
  'height:50px; background-color:#06aed5; color: white; width:15%; border-top-right-radius:10px; border-bottom-right-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
);
timeBlockDivEightThree.innerHTML = '<i class="fas fa-save"></i>';

// ===== Styling three divs in row-9 ===== //
timeBlockDivNineOne.setAttribute(
  'style',
  'height:50px; background-color:#fafafa; width:15%; border-top-left-radius:10px; border-bottom-left-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: left'
);
timeBlockDivNineOne.innerHTML = '5:00PM';
timeBlockDivNineTwo.setAttribute(
  'style',
  'height:50px; background-color:#dadada; width:70%; border: 1px solid #a0b7db; float: left'
);
timeBlockDivNineThree.setAttribute(
  'style',
  'height:50px; background-color:#06aed5; color: white; width:15%; border-top-right-radius:10px; border-bottom-right-radius:10px; display: flex; justify-content:center; align-items:center; border:1px solid #a0b7db; float: none'
);
timeBlockDivNineThree.innerHTML = '<i class="fas fa-save"></i>';

// #############  Styling Input Fields  ##############
inputFieldOne.setAttribute("style", "background-color:transparent; height: 50px; width: 90%; border: none; outline: none; padding-left: 1rem;");
inputFieldTwo.setAttribute("style", "background-color:transparent; height: 50px; width: 90%; border: none; outline: none; padding-left: 1rem;");
inputFieldThree.setAttribute("style", "background-color:transparent; height: 50px; width: 90%; border: none; outline: none; padding-left: 1rem;");
inputFieldFour.setAttribute("style", "background-color:transparent; height: 50px; width: 90%; border: none; outline: none; padding-left: 1rem;");
inputFieldFive.setAttribute("style", "background-color:transparent; height: 50px; width: 90%; border: none; outline: none; padding-left: 1rem;");
inputFieldSix.setAttribute("style", "background-color:transparent; height: 50px; width: 90%; border: none; outline: none; padding-left: 1rem;");
inputFieldSeven.setAttribute("style", "background-color:transparent; height: 50px; width: 90%; border: none; outline: none; padding-left: 1rem;");
inputFieldEight.setAttribute("style", "background-color:transparent; height: 50px; width: 90%; border: none; outline: none; padding-left: 1rem;");
inputFieldNine.setAttribute("style", "background-color:transparent; height: 50px; width: 90%; border: none; outline: none; padding-left: 1rem;");


}); // "wrapper function" ending