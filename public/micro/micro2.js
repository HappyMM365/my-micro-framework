let root;
// 这里可以换成react vue 的框架document元素
root = document.createElement("h1");
root.textContent = "hi micro2";

document.body.appendChild(root);

console.log("22", window.document.domain === window.parent.document.domain); // true
