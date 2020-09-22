var currentDayEl=moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentDayEl);

	// for (let i = 9; i < 24; i++) {
	// 	renderSchedule(i);
	// }

	var currentHour = moment().startOf('hour')

for (let i = 9; i < 24; i++) {
	renderSchedule(i);
	var container = document.createElement('div')
	container.setAttribute('class', 'container')


	var date = document.createElement('div')
	date.setAttribute('class', 'time-block')
	var hourBlock = moment().hours(i).startOf('hour')
	var schedHour = moment(hourBlock).format('h A')
	date.innerText = schedHour
	
	var activity = document.createElement('input')
	activity.setAttribute('id','activity'+i)
	console.log(activity);
	console.log() 
	
	var save = document.createElement('button')
    save.setAttribute('class', 'fas fa-save')
	save.setAttribute('id', 'save'+i)
	
	if(hourBlock.isBefore(currentHour)){
		activity.setAttribute('class','past');
	} else if (hourBlock.isAfter(currentHour)) {
		activity.setAttribute('class','future')
	} else {
		activity.setAttribute('class','present')
	}
	
	container.appendChild(date)
	container.appendChild(activity)
	container.appendChild(save)
	document.querySelector('#outermost').appendChild(container)

	document.querySelector('#save'+i).addEventListener("click", function(event) {
		event.preventDefault();
		console.log("In the click")
		var userActivity = document.querySelector("#activity"+i).value;
		localStorage.setItem(i,JSON.stringify(userActivity,null,2))
		console.log("Act 1" + userActivity);
		renderSchedule(i)
	});	

    // event.preventDefault() can be used to prevent an event's default behavior.
	// Here, it prevents the submit button from trying to submit a form when clicked
	// for (let i = 9; i < 24; i++) {
	// event.preventDefault();
	// console.log("In the click")
	// var userActivity = document.querySelector("#activity"+i).value;
	// // localStorage.setItem(i,userActivity)
	// console.log(userActivity);
}
function renderSchedule(i) {
	var userActivityRefresh = JSON.parse(localStorage.getItem(i).trim)
	// for (let i = 9; i < 24; i++) {
	console.log("UserRefresh " + userActivityRefresh)
	var actID = "activity"+9;
	console.log(actID);
	
		// var key = localStorage.key(i);
	// 	var item = JSON.parse(localStorage.getItem(i).trim)
	// console.log(item);
	// var actEl = document.getElementById('actID');
	// actEl.innerText = item
	// }
	userActivityEl.textContent = userActivityRefresh
	console.log("UserRefresh " + userActivityEl)

	document.querySelector("#activity"+9).innerHTML = userActivityEl;
	// userEmailSpan.textContent = email;
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