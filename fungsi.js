// smoothscroll

var vertikal = 0;
var jarak = 20;
function SmoothScroll(id){
	var target = document.getElementById(id).offsetTop; //tujuan linknya
	var scrollAnimate = setTimeout(function(){SmoothScroll(id)},5) // fungis dan waktunya
	var sekarang = id.ClassName;	
	vertikal = vertikal + jarak;

	
	//berhenti
	if(vertikal >= target){
		clearTimeout(scrollAnimate);
		vertikal = 0;
	}else{	
	window.scroll(0, vertikal)
	}

	
	//PR scroll ke atas, waktu scroll jika jauh. scroll keatas dari halmaan bawah, dan kebawah dari halama atas.
	
	return false;
}


//validasi form
function validasi(form){
var lolos = true;
var errorText = '';

for(i=0; i<4; i++){
	if(form[i].value.trim().length <= 0){
		
	switch(i){
		case 0: errorText = 'Nama'; break;
		case 1: errorText = 'Email'; break;
		case 2: errorText = 'Subject'; break;
		case 3: errorText = 'Pesan'; break;
		default:
	}
		
	//kalo belum ada error

	if(form[i].nextElementSibling.className != 'error'){
	form[i].style.borderColor = '#ec5b5b';
	form[i].insertAdjacentHTML('afterend',"<div class='error'>"+ errorText +" tidak boleh kosong</div>");
	}
	lolos = false;
		}else{
	if(form[i].nextElementSibling.className == 'error'){
	form[i].style.borderColor = '#ffd002';
	form[i].nextElementSibling.remove();
	}
		}
	}
	
	return lolos;
}
	



