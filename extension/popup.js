document.getElementById('1').onclick = display;
document.getElementById('2').onclick = display;
document.getElementById('3').onclick = display;
document.getElementById('4').onclick = display;
document.getElementById('5').onclick = display;
document.getElementById('6').onclick = display;
document.getElementById('7').onclick = display;
document.getElementById('8').onclick = display;
document.getElementById('9').onclick = display;
document.getElementById('0').onclick = display;
document.getElementById('+').onclick = display;
document.getElementById('-').onclick = display;
document.getElementById('/').onclick = display;
document.getElementById('*').onclick = display;
document.getElementById('%').onclick = display;
document.getElementById('.').onclick = display;
document.getElementById('ac').onclick = clear;
document.getElementById('=').onclick = evalu;
function display(){
	document.getElementById('display').value += this.value;
}
function clear(){
	document.getElementById('display').value ='';
}
function evalu(){
	document.getElementById('display').value = eval(document.getElementById('display').value);
}

