
//Places current day at top of page under title
var currentDayEl = moment().format('dddd, MMMM Do');
$("#currentDay").text(currentDayEl);

var currentHour = moment().startOf('hour')

//Dynamically create timeblocks from 9am-5pm with time, activity, and save buttons
for (let i = 9; i < 18; i++) {
	var container = document.createElement('div')
	container.setAttribute('class', 'container')

	var date = document.createElement('div')
	date.setAttribute('class', 'time-block')
	var hourBlock = moment().hours(i).startOf('hour')
	var schedHour = moment(hourBlock).format('h A')
	date.innerText = schedHour

	var activity = document.createElement('input')
	if (localStorage.getItem(i)) {
		activity.value = JSON.parse(localStorage.getItem(i));
	}

	activity.setAttribute('id', 'activity' + i)

	var save = document.createElement('button')
	save.setAttribute('class', 'fas fa-save')
	save.setAttribute('id', 'save' + i)

	//Determine if hour block is in past, present, or future
	if (hourBlock.isBefore(currentHour)) {
		activity.setAttribute('class', 'past');
	} else if (hourBlock.isAfter(currentHour)) {
		activity.setAttribute('class', 'future')
	} else {
		activity.setAttribute('class', 'present')
	}

	//Construct the container with each hour block row
	container.appendChild(date)
	container.appendChild(activity)
	container.appendChild(save)
	//Insert the rows into the webpage using the DOM
	document.querySelector('#outermost').appendChild(container)

	//Create the Save button events
	document.querySelector('#save' + i).addEventListener("click", function (event) {
		event.preventDefault();
		console.log("In the click " + i)
		var userActivity = document.querySelector("#activity" + i).value;
		localStorage.setItem(i, JSON.stringify(userActivity, null, 2))
		console.log("Act 1" + userActivity);
		renderSchedule(i)
	});

}
function renderSchedule(i) {
	// var act = localStorage.getItem(i);
	// console.log(act)
	// document.querySelector('#activity9').value = JSON.parse(act);
	// for (let i = 9; i < 24; i++) {
	// var userActivityRefresh = JSON.parse(localStorage.getItem(i));
	var act = JSON.parse(localStorage.getItem(i));
	console.log(act)
	document.querySelector('#activity' + i).value = act;
	// }
	// console.log("UserRefresh " + userActivityRefresh)
	// var actID = "activity"+i;
	// console.log(actID);

	// document.querySelector("#activity"+i).innerHTML = userActivityRefresh;
	// };
	// var key = localStorage.key(i);
	// 	var item = JSON.parse(localStorage.getItem(i).trim)
	// console.log(item);
	//  var userActivityEl = document.getElementById('actID');
	// // actEl.innerText = item
	// // }
	// userActivityEl.textContent = userActivityRefresh
	// console.log("UserRefresh " + userActivityEl)

	// document.querySelector("#activity"+9).innerHTML = userActivityEl;
	// // userEmailSpan.textContent = email;
	// userPasswordSpan.textContent = password;
}

    // // Here we grab the text from the input box
    // var initials = document.querySelector("#initials-input").value

    // if(initials === ""){
    //     return;
    // }
    // console.log(initials);
    // highScoresAll.push(initials + " " + score);
    // initials.value = ""
    // console.log("High " + highScoresAll) 