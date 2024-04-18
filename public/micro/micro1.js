let root;
// 这里可以换成react vue 的框架document元素
root = document.createElement("h1");
root.textContent = "hi micro1";

document.body.appendChild(root);

console.log(window.document.domain === window.parent.document.domain); // true

//这里是跨域请求
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("POST", "/microapps");
oReq.send();
function reqListener() {
  console.log("micro1.responseText", this.responseText);
}

console.log("micro1.location", window.location);

// history 报错
window.history.pushState({ key: "hello" }, "", "/test");
