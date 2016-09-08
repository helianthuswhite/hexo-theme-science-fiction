//创建AJAX请求页面
var xmlHttp; 
function createxmlHttpRequest() { 
	if (window.ActiveXObject) { 
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP"); 
	} else if (window.XMLHttpRequest) { 
		xmlHttp=new XMLHttpRequest(); 
	}
} 

function doGet(url){ 
	// 注意在传参数值的时候最好使用encodeURI处理一下，以防出现乱码 
	createxmlHttpRequest(); 
	xmlHttp.open("GET",url); 
	xmlHttp.onreadystatechange = function() { 
		if ((xmlHttp.readyState == 4) && (xmlHttp.status == 200)) { 
			// alert('success'); 
		} else { 
			// alert('fail'); 
		} 
	} 
	xmlHttp.send();
} 
