window.onload = function () {
	var c = document.getElementById('line_canvas');
	var cxt = c.getContext('2d');
	Resize(c,Width,Height);
	DrawBg(cxt);
}

function addPagination(obj,num) {
	var parent = obj.parentNode.parentNode;
	var ul = parent.getElementsByTagName('ul');
	var currentMargin = ul[0].style.marginTop;
	currentMargin = currentMargin.slice(0,-1);
	ul[0].style.marginTop = currentMargin - 100*num + '%';
	console.log(ul[0].style.marginTop);
}