window.onload = () => {
  document.getElementById('second_btn1').onclick = () => {
    parent.postMessage('hello from second window', '*');
  }
  window.addEventListener("message", function(event) {
    document.getElementById('result').innerHTML = 'message: [second window] =>' + event.data;
  });
}