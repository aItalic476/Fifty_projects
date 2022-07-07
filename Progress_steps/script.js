const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click',() =>{
	
	currentActive++;
	
	if (currentActive > circles.length){
		currentActive = circles.length;
		//return;
	}
	update();
})

prev.addEventListener('click',() =>{
	
	currentActive--;
	
	if (currentActive < 1){
		currentActive = 1;
		//return;
	}
	update();
})
function update(){
	circles.forEach((circle, idx)=>{
		if(idx < currentActive){
			
			circle.classList.add('circle-active');
		}
		
		else{
			circle.classList.remove('circle-active');
		}
	})
	
	let actives = document.getElementsByClassName('circle circle-active');
	let progressWidth = ((actives.length-1)/(circles.length-1)*100)+'%';
	progress.style.width=progressWidth;
	
	if(currentActive===1){
	   prev.disabled=true;
		
	   }
	else if(currentActive===circles.length){
		
		next.disabled=true;
	}else{
		prev.disabled=false;
		next.disabled=false;
	}
}