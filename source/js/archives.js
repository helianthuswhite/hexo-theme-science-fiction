window.onload = function () {
	var c = document.getElementById('line_canvas');
	var cxt = c.getContext('2d');
	Resize(c,Width,Height);
	DrawBg(cxt);
}

//标签页分页全局变量
var page = 1;

function addPagination(obj,num) {
	var parent = obj.parentNode.parentNode;
	var ul = parent.getElementsByTagName('ul')[0];
	var currentMargin = ul.style.marginTop;
	var pageNumber = parseInt(obj.parentNode.getElementsByClassName('number')[0].innerHTML);
	currentMargin = currentMargin.slice(0,-1);
	var maxNumber = Math.round(ul.offsetHeight / parent.offsetHeight);
	if (pageNumber > 0&&pageNumber < maxNumber&&num == 1 || pageNumber > 1&&num == -1) {
		obj.parentNode.getElementsByClassName('number')[0].innerHTML = pageNumber + num;
		ul.style.marginTop = currentMargin - 100*num + '%';
	}
}