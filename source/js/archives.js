window.onload = function () {
	var c = document.getElementById('line_canvas');
	var cxt = c.getContext('2d');
	Resize(c,Width,Height);
	DrawBg(cxt);
}