// alert('hsgdfy');
let titles = Array.from(document.querySelectorAll('.accordion__title, .accordion__image'));
console.log(titles);
for (let title of titles) {
	title.addEventListener('click', () => {
		title.nextElementSibling.classList.toggle('hidden')
	})

	}

