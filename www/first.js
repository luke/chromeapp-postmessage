window.onload = () => {
  document.getElementById('first_btn1').onclick = () => {
    document.getElementsByTagName("iframe")[0].contentWindow.postMessage('hello from first window', '*')
  }
  document.getElementById('first_btn2').onclick = (e) => {
    console.info('>>>>>>', e.source)
    e.source.postMessage('hello from first window', '*')
  }
  window.addEventListener("message", function(event) {
    document.getElementById('result').innerHTML = 'message: [first window]=>' + event.data;
    // event.source.postMessage("Hello back!");
  });
}