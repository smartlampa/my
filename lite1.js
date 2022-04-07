(function () {
    'use strict';

	var update = false
	var events = JSON.parse(localStorage.getItem('events') || '[]');
	var append = [
		{
			name: 'HDRezka',
			url: 'http://jin.energy/rezka'
		},
		{
			name: 'VCDN',
			url: 'http://jin.energy/vcdn'
		},
		{
			name: 'Collaps',
			url: 'http://jin.energy/collaps'
		},
		{
			name: 'Торренты',
			url: 'http://jin.energy/jac'
		}
	]

	function merge(add){
		var find = false

		for (var i = 0; i < events.length; i++) {
			if(events[i].url == add.url) find = true
		}

		if(!find){
			update = true

			events.push(add)
		}
	}

	for (var i = 0; i < append.length; i++) {
		merge(append[i])
	}

	if(update){
		localStorage.setItem('events', JSON.stringify(events))
	}

})();