// JavaScript Document
window.onload = function() {
	var canvas = document.getElementById("albumBackground");
	var ctx = canvas.getContext("2d");
	var img = new Image();
	img.onload = function() {
		ctx.drawImage(img, 0, 0);
	}
	img.src = 'spiritPhoneBackground.png';
}