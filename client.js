window.onload = function () {
	var canvas = document.createElement('canvas');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	document.body.appendChild(canvas);
	var c = canvas.getContext('2d');

	c.fillStyle = '#000000';
	c.fillRect (0, 0, canvas.width, canvas.height);

	var phrase = "Click or tap the screen to start the game";
	c.font = 'bold 16px Arial, sans-serif';
	c.fillStyle = '#FFFFFF';
	c.fillText (phrase, 10, 30);

}
