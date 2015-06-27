var http =require('http');          //加载http模块

var server=http.createServer(function(require,response){
	response.end('hahaha');           //回调函数在浏览器请求时执行，require为浏览器请求的内容，response为服务器响应的内容
});

server.listen(8080);

