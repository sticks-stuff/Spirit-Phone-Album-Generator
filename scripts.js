// JavaScript Document
window.onload = function() {
	var canvas = document.getElementById("albumBackground");
	var ctx = canvas.getContext("2d");
	var img = new Image();
	var f = new FontFace('SpiritPhone', 'url(SpiritPhone.ttf)');
	img.onload = function() {
		ctx.drawImage(img, 0, 0);
		f.load().then(function() {
			ctx.font = "30px SpiritPhone";
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText("Hello World", canvas.width/2, canvas.height/2); 
		});
	}
	img.src = 'spiritPhoneBackground.png';
}