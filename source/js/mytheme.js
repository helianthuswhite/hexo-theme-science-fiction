//获取屏幕的大小
var Height = document.body.clientHeight;
var Width = document.body.clientWidth;


window.onload = function () {
	var c=document.getElementById("bg_canvas");
	var cxt=c.getContext("2d");
	ResizeCanvas(c);
	DrawBg(cxt);
	DrawCircle(cxt);
}

//根据屏幕大小改变canvas大小 
function ResizeCanvas(canvas) {
	canvas.setAttribute('width',Width);
	canvas.setAttribute('height',Height);
}

//绘制背景线条
function DrawBg(cxt) {
	var width_1 = 0.1875 * Width; 
	var width_2 = 0.25*Width;
	var width_3 = 0.5*Width;
	var width_4 = 0.5625*Width;
	var width_5 = 0.8125*Width;
	var width_6 = 0.875*Width;
	var width_7 = Width;

	var height_1 = Height - 65;
	var height_2 = Height - 30;
	var height_3 = Height - 50;
	var height_4 = Height - 80;

	cxt.beginPath();
	//绘制上路径
	cxt.moveTo(0,80);
	cxt.lineTo(width_1,80);
	cxt.lineTo(width_2,50);
	cxt.lineTo(width_3,50);
	cxt.lineTo(width_4,30);
	cxt.lineTo(width_5,30);
	cxt.lineTo(width_6,65);
	cxt.lineTo(width_7,65);

	//绘制下路径
	cxt.moveTo(0,height_1);
	cxt.lineTo(width_1,height_1);
	cxt.lineTo(width_2,height_2);
	cxt.lineTo(width_3,height_2);
	cxt.lineTo(width_4,height_3);
	cxt.lineTo(width_5,height_3);
	cxt.lineTo(width_6,height_4);
	cxt.lineTo(width_7,height_4);

	cxt.lineWidth = 3;
	cxt.strokeStyle = "#72FFEE";
	cxt.shadowColor = "#77C0FD";
	cxt.shadowBlur = 8;
	cxt.shadowOffsetX = 0;
	cxt.shadowOffsetY = -3;
	cxt.stroke();
	cxt.closePath();
}

//绘制旋转的圆
function DrawCircle(cxt) {
	var height = Height / 2;
	var width = 0.2*Width;

	cxt.beginPath();
	cxt.lineWidth = 10;
	cxt.strokeStyle="#72FFEE";
	cxt.shadowBlur = 0;
	cxt.shadowOffsetY = 0;
	cxt.arc(width,height + 50,50,0,Math.PI*0.25,true);
	cxt.stroke();
	cxt.closePath();

	cxt.beginPath()
	cxt.lineWidth = 6;
	cxt.arc(width,height + 50,35,0,Math.PI*1.6,false);
	cxt.stroke();
	cxt.closePath();

	cxt.beginPath()
	cxt.lineWidth = 20;
	cxt.arc(width,height + 50,15,0,Math.PI*0.5,true);
	cxt.stroke();
	cxt.closePath();
}
