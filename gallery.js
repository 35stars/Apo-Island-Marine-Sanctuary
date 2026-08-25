

const slides = document.querySelectorAll('.slides img')

const arrows = document.getElementById('arrows')

const lightboxImage = document.querySelector('figure > img')

const lightbox = document.getElementById('lightbox')

const closeBtn = document.getElementById('close-btn')

const slider = document.getElementById('slider')

const buttonsDiv = document.getElementById('buttons-div')





let index = 0
const images = []

slides.forEach((img,i,) =>{

	let src = img.src.split('/').pop()

	if(!img.dataset.index){

		img.dataset.index = i
	}

	images.push('images/'+src)


	let button = document.createElement('input')
	button.type = 'radio'
	button.name = 'img'
	button.dataset.index = i
	button.className = 'buttons'
	button.style.cursor = 'pointer'
	button.style.margin = '5px'

	buttonsDiv.appendChild(button)

	img.addEventListener('click',(e)=>{

		lightbox.style.visibility = 'visible'

		lightboxImage.src = ' images/'+src

		index = e.target.dataset.index
	})
})


slider
.querySelector('#slide img').addEventListener('click',(e)=>{
	lightbox.style.visibility = 'visible'

	if(!e.target.dataset.index){
		e.target.dataset.index = index
	}

	index = e.target.dataset.index

	lightboxImage.src = images[index]
})


document.querySelectorAll('.buttons').forEach(btn=>{

	btn.addEventListener('click',(e)=>{

		slider
		.querySelector('img')
		.src = images[e.target.dataset.index]

		if(!slider.querySelector('#slide img').dataset.index){
			slider.querySelector('#slide img').dataset.index = e.target.dataset.index
		}

		slider.querySelector('#slide img').dataset.index = e.target.dataset.index
	})
})

arrows.addEventListener('click',(e)=>{
	if(e.target.tagName !== 'IMG') return;

	if(e.target.id == 'right-a'){
		index++
	}
	else {
		index--
	}

	index = index == images.length ? 0 : index < 0 ? images.length-1 : index
	lightboxImage.src = images[index]
})


window.addEventListener('keydown',(e)=>{

	if(e.key === 'ArrowRight'){
		index++
	}
	else if(e.key === 'ArrowLeft') {
		index--
	}
	
	if(e.key === 'Escape'){
		lightbox.style.visibility = 'hidden'
		return
	}

	index = index == images.length ? 0 : index < 0 ? images.length-1 : index
	
	slider
	.querySelector('#slide img').src = images[index]

	slider
	.querySelector('#slide img').dataset.index = index
	
	lightboxImage.src = images[index]
})

closeBtn.addEventListener('click',(e)=> {
	lightbox.style.visibility = 'hidden'

	slider
	.querySelector('#slide img').src = images[index]

	slider
	.querySelector('#slide img').dataset.index = index
})

