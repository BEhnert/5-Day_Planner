var data = [
	{
		event: 'something',
		date: 'Monday',
	},
	{
		event: 'something 2',
		date: 'Sunda'
	},
	{
		event: 'something 3',
		date: 'Tuesday '
	},
	{
		event: 'something 4',
		date: 'Monday'
	}
]
for (let i = 0; i < data.length; i++) {
	var container = document.createElement('div')
	container.setAttribute('class', 'container')
	var event = document.createElement('div')
	event.setAttribute('class', 'event')
	event.innerText = data[i].event
	var date = document.createElement('div')
	date.setAttribute('class', 'date')
	date.innerText = data[i].date
	var save = document.createElement('div')
	save.setAttribute('class', 'save')
	save.innerText = "save"
	container.appendChild(date)
	container.appendChild(event)
	container.appendChild(save)
	document.querySelector('#outermost').appendChild(container)
}