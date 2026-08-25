




const navLinks = document.querySelectorAll('.nav-links')

const mainNav = document.getElementById('mainNav')

const navbar = document.querySelector('navbar')

const menuBtn = mainNav.previousElementSibling



for(link of navLinks){

	link.onclick=()=>{
		mainNav.classList.remove('show')	
	}
}

window.addEventListener('keydown',(e)=>{

    if(e.key == 'Escape')
       mainNav.classList.remove('show') 
})

menuBtn.addEventListener('click',()=>{
    mainNav.classList.toggle('show')
})    


mainNav.addEventListener('click', (e) => {

    if (e.target.tagName !== 'A') return;

    window.location.href = e.target.getAttribute('href');

    mainNav.classList.remove('show') 

});

mainNav.addEventListener('mouseover', (e) => {

    if (e.target.tagName !== 'A') return;

    window.location.href = e.target.getAttribute('href');

});


