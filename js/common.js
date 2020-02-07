	const apiKey = 'OH7AWRmnFFDg3xO723Xl1HM0pA95yhAe'
	const wrapper = document.querySelector('.wrapper')
	const btnSearch = document.querySelector('#btn-search')
	const btnUppdate = document.querySelector('#btn-update')
	const input = document.querySelector('#search')
	let inputVal = 'cats'
	let random = 0

	document.addEventListener('DOMContentLoad', getData())

	btnSearch.addEventListener('click', function(e) {
		e.preventDefault()
		wrapper.innerHTML = ''
		checkVal()
	})

	wrapper.addEventListener('click', function(e) {
		let imgInfo = Array.from(document.querySelectorAll('.original'))
		if(e.target.classList.contains('fa-info')) {
			console.log(e.target.parentNode.parentNode.firstChild)
			e.target.parentNode.parentNode.firstChild.classList.toggle('active')
		}
	})

	btnUppdate.addEventListener('click', function(e) {
		wrapper.innerHTML = ''
		random += 10
		getData()
	})

	function getData() {
		input.value = ''
		let xhr = $.get(`http://api.giphy.com/v1/gifs/search?&api_key=${apiKey}&limit=8&q=${inputVal}&offset=${random}`);
		xhr.done(function(response) { 
			// console.log(response)
			let gifs = response.data
			for(i in gifs) {
				wrapper.insertAdjacentHTML('beforeend', `<div class="wrap-img"><div class="original"><span>${gifs[i].images.original.width}x${gifs[i].images.original.height}</span><a class="original-link" target="_blank" href="${gifs[i].url}">Оригинал</a></div><img src=${gifs[i].images.original.url}><span>${gifs[i].title}<i class="fas fa-info"></i></span></div>`)
			}
		});
	}


	function checkVal() {
		inputVal = input.value
		if(inputVal == '' || inputVal == undefined) {
			return
		} else {
			inputVal = inputVal
			getData()
		}
	}






	

