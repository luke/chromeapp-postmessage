window.onload = () => {
  document.getElementById('first_btn1').onclick = () => {
    document.getElementsByTagName("iframe")[0].contentWindow.postMessage('hello from first window', '*')
  }
  document.getElementById('first_btn2').onclick = () => {
    window.appWindow.postMessage('hello from first window', '*')
  }
  window.addEventListener("message", function(event) {
    window.appWindow = event.source
    document.getElementById('result').innerHTML = 'message: [first window]=>' + event.data;
    setTimeout(function(){
      document.getElementById('result').innerHTML = 'test!';
      window.appWindow.postMessage("Hello back from first window!!!");
    }, 1000);
  });
}