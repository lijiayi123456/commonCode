
// 下载文档
export function downloadUrl(url) {
    let name = url.substring(url.lastIndexOf("/") + 1);
    // 下载数据，通过流来下载数据
    // let objectURL = window.URL.createObjectURL(new Blob([data]));
    // 浏览器直接解析不出来的地址才会下载，否则会直接打开
    // 通常js,图片，html等文档均可被解析，MP4,mp3，zip等文件不会被解析
    let a = document.createElement('a')
    a.href = url + '?response-content-type=application/octet-stream'
    a.download = name;
    a.click();
    a.remove()
}

// 存在跨越问题
export function downloadBlob(blob, fileName) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  };

// 存在跨越问题
export function downloadIamge(imgsrc, name) {//下载图片地址和图片名
    let image = new Image();
    // 解决跨域 Canvas 污染问题
    // 解决跨域的问题，需要后台服务支持跨域
    image.setAttribute("crossOrigin", "anonymous");
    image.onload = function() {
      let canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      let context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, image.width, image.height);
      let url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
      let a = document.createElement("a"); // 生成一个a元素
      let event = new MouseEvent("click"); // 创建一个单击事件
      a.download = name || "photo"; // 设置图片名称
      a.href = url; // 将生成的URL设置为a.href属性
      a.dispatchEvent(event); // 触发a的单击事件
    };
    image.src = imgsrc;
  }
  
  
