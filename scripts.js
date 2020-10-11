// JavaScript Document
window.onload = function() {
	var canvas = document.getElementById("albumBackground");
	var ctx = canvas.getContext("2d");
	var img = new Image();
	var imgDebug = new Image();
	var f = new FontFace('SpiritPhone', 'url(SpiritPhone.ttf)');
	img.onload = function() {
		ctx.drawImage(img, 0, 0);
		f.load().then(function() {
			ctx.font = "105px SpiritPhone";
			ctx.fillStyle = "white";
			ctx.textAlign = "left";
			wrapText(ctx, "LEMON DEMON", 84, 135, 362, 75, 2.5);
			ctx.font = "300px SpiritPhone";
			wrapText(ctx, "SPIRIT PHONE", 75, 325, 362, 189, 3);
			ctx.globalAlpha = 0.4;
			imgDebug.onload = function() {
				//ctx.drawImage(imgDebug, 0, 0);
			}
		});
	}
	img.src = 'spiritPhoneBackground.png';
	imgDebug.src = 'Lemon-Demon-Spirit-Phone.png';
}
function wrapText(context, text, x, y, maxWidth, lineHeight, spacing) {
	var words = text.split(' ');
	var line = '';

	for(var n = 0; n < words.length; n++) {
		  var testLine = line + words[n] + ' ';
		  var metrics = context.measureText(testLine);
		  var testWidth = metrics.width;
		  if (testWidth > maxWidth && n > 0) {
		  	context.fillText(line, x, y);
			line = words[n] + ' ';
			y += lineHeight;
		  }
		  else {
			line = testLine;
		  }
		}
		this.fillTextWithSpacing(context, line, x, y, spacing);
		//context.fillText(line, x, y);
}

this.fillTextWithSpacing = function(context, text, x, y, spacing)
{
    //Start at position (X, Y).
    //Measure wAll, the width of the entire string using measureText()
    wAll = context.measureText(text).width;

    do
    {
    //Remove the first character from the string
    char = text.substr(0, 1);
    text = text.substr(1);

    //Print the first character at position (X, Y) using fillText()
    context.fillText(char, x, y);

    //Measure wShorter, the width of the resulting shorter string using measureText().
    if (text == "")
        wShorter = 0;
    else
        wShorter = context.measureText(text).width;

    //Subtract the width of the shorter string from the width of the entire string, giving the kerned width of the character, wChar = wAll - wShorter
    wChar = wAll - wShorter;

    //Increment X by wChar + spacing
    x += wChar + spacing;

    //wAll = wShorter
    wAll = wShorter;

    //Repeat from step 3
    } while (text != "");
}