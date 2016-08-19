//获取屏幕的大小
var Height = document.body.clientHeight,
	Width = document.body.clientWidth;

//设置颜色常量
var COLOR_1 = '#FE00C3',
	COLOR_2 = '#1AA406',
	COLOR_3 = '#214FE3',
	COLOR_4 = '#DFB201';
					

window.onload = function () {
	var c=document.getElementById("line_canvas");
	var cxt=c.getContext("2d");
	Resize(c,Width,Height);
	DrawBg(cxt);
	DrawCircle();
	DrawLines(cxt);

	var index_main = document.getElementById('index_main');
	index_main.style.width = 0.45*Width - 20 + 'px';
	index_main.style.height = 0.4*Height + 'px';
	index_main.style.top = 0.2*Height - 20 + 'px';
	index_main.style.left = 0.3*Width + 'px';

	var photo = document.getElementById('photo');
	photo.style.width = index_main.offsetWidth*0.2 + 'px';
	photo.style.height = photo.style.width;
	photo.style.marginTop = -0.5*photo.offsetHeight + 'px';

	var info = document.getElementById('info');
	info.style.marginTop = -0.45*info.offsetHeight + 'px';

	var menu_tags = document.getElementById('index_menu').getElementsByTagName('a');
	var menu_canvas = document.getElementById('index_menu').getElementsByTagName('canvas');
	var context = new Array();
	for (var i = 0; i < menu_tags.length; i++) {
		menu_tags[i].index = i;
		menu_tags[i].style.width = 0.05*Width +'px';
		menu_tags[i].style.height = menu_tags[i].style.width;
		menu_tags[i].style.marginLeft = 0.03*Width + 'px';
		menu_tags[i].style.marginRight = 0.01*Width + 'px';
		menu_canvas[i].width = 0.06*Width;
		menu_canvas[i].height = menu_canvas[i].width;
		context[i] = menu_canvas[i].getContext('2d');
		context[i].shadowColor = '#72FFEE';
		context[i].strokeStyle = '#72FFEE';
		context[i].shadowBlur = 5;
		context[i].shadowOffsetY = 0;
		context[i].shadowOffsetX = 0;
		context[i].lineWidth = 3;

		switch(i) {
			case 0 :
				Draw_menu(context[i],menu_canvas[i].width/2,i);
				break;
			case 1 :
				Draw_menu(context[i],menu_canvas[i].width/2,i);
				break;
			case 2 :
				Draw_menu(context[i],menu_canvas[i].width/2,i);
				break;
			case 3 :
				Draw_menu(context[i],menu_canvas[i].width/2,i);
				break;
		}

		menu_tags[i].onmouseover = function () {
			animate(this.index,context[this.index],menu_canvas[this.index].width/2);			
		}
	}	
}

//根据屏幕大小改变元素大小 
function Resize(object,width,height) {
	object.setAttribute('width',width);
	object.setAttribute('height',height);
}

//绘制背景外框线条
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
function DrawCircle() {
	var c = document.getElementById('circle_canvas');
	var cxt = c.getContext('2d');
	var height = Height*0.7 + 50;
	var width = 0.2*Width;
	var i = 1;
	c.style.top = height - 75 + 'px';
	c.style.left = width - 75 + 'px';

	cxt.lineWidth = 10;
	cxt.strokeStyle="#72FFEE";
	cxt.shadowBlur = 0;
	cxt.shadowOffsetY = 0;
	
 	setInterval(
 		function() {
	 		cxt.clearRect(0, 0, c.width, c.height);
	        cxt.beginPath();
	        cxt.save();
	        cxt.translate(75,75);
			cxt.rotate(i*Math.PI/120);
			cxt.arc(0,0,50,0,Math.PI*0.25,true);
			cxt.stroke();
			cxt.restore();
			cxt.closePath(); 

			cxt.beginPath()
			cxt.save();
			cxt.translate(75,75);
			cxt.rotate(i*Math.PI/60);
			cxt.lineWidth = 6;
			cxt.globalAlpha=0.5;
			cxt.arc(0,0,35,0,Math.PI*1.6,false);
			cxt.stroke();
			cxt.restore();
			cxt.closePath();

			cxt.beginPath()
			cxt.save();
			cxt.translate(75,75);
			cxt.rotate(i*Math.PI/30);
			cxt.lineWidth = 15;
			cxt.arc(0,0,15,0,Math.PI*0.5,true);
			cxt.stroke();
			cxt.restore();
			cxt.closePath();

			i++;
 	},16);

}

//绘制中间线条
function DrawLines(cxt) {
	var width_1 = 0.2*Width;
	var width_2 = 0.3*Width;
	var width_3 = 0.75*Width;
	var height_1 = 0.7*Height + 50;
	var height_2 = 0.6*Height;

	cxt.beginPath();
	cxt.moveTo(width_1,height_1);
	cxt.lineTo(width_2,height_2);
	cxt.lineTo(width_3,height_2);

	cxt.lineWidth = 5;
	cxt.lineCap="round";
	cxt.strokeStyle = "#72FFEE";
	cxt.shadowColor = "#77C0FD";
	cxt.shadowBlur = 10;
	cxt.shadowOffsetX = 0;
	cxt.shadowOffsetY = 0;
	cxt.stroke();
	cxt.closePath();

	cxt.beginPath()
	cxt.lineWidth = 10;
	cxt.arc(width_3,height_2,5,0,Math.PI*2,true);
	cxt.stroke();
	cxt.closePath();

	//旋转画布之前保存画布状态
	cxt.save();
	cxt.beginPath()
	cxt.lineWidth = 2;
	cxt.translate(width_3,height_2);
	cxt.rotate(Math.PI*0.85);
	cxt.arc(0,0,15,0,Math.PI*0.3,true);
	cxt.stroke();
	cxt.closePath();
	cxt.restore();
}

// function animate(index,cxt,origin) {
// 	var 
//    	Draw_menu(cxt,orgin,index);    
// }

function Draw_menu (cxt,origin,n) {
	cxt.beginPath();
	cxt.translate(origin,origin);
	if (n % 2 == 0) {
		cxt.rotate(Math.PI);
	}
	// cxt.rotate(Math.PI/3);
	switch (n) {
		case 0:
			cxt.fillStyle = COLOR_1;
			break;
		case 1:
			cxt.fillStyle = COLOR_2;
			break;
		case 2:
			cxt.fillStyle = COLOR_3;
			break;
		case 3:
			cxt.fillStyle = COLOR_4;
			break;
	}
	
	cxt.moveTo(-0.025*Width/3,-0.0234*Width/2);
	cxt.lineTo(0.025*Width/3,-0.0234*Width/2);
	cxt.lineTo(0,0.0234*Width/4);
	cxt.fill();
	cxt.closePath();

	cxt.beginPath();
	cxt.moveTo(-0.025*Width,-0.0234*Width);
	cxt.lineTo(0.025*Width,-0.0234*Width);
	cxt.lineTo(0,0.025*Width);
	cxt.lineTo(-0.025*Width,-0.0234*Width);
	cxt.stroke();
	cxt.closePath();
}


