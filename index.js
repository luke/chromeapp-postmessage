window.onload = () => {
  document.getElementById('app_btn1').onclick = () => {
    document.getElementsByTagName("webview")[0].contentWindow.postMessage('hello from app window', '*')
  }
  window.addEventListener("message", function(event) {
    document.getElementById('result').innerHTML = 'message: [app window]=>' + event.data;
  });
}