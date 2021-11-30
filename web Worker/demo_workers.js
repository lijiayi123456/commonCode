// 使用 http-server 启动服务 访问localhost:8080即可
// 不可以通过本地文件访问 web worker
//worker.js
var obj = {
    num :999
}
postMessage(JSON.stringify(obj));
//
addEventListener("message",function (e) {
    obj.num = e.data * 2;
    postMessage(JSON.stringify(obj));
    //postMessage(obj);//报错
})


// var i=0;
// function timedCount(){
	// i=i+1;
	// console.log(i)
	// postMessage(i);//向其他窗口或者页面发送消息
	// setTimeout("timedCount()",1000);
// }
// timedCount();

