window.addEventListener('load', function() {
  setTimeout(function() {
  var progressBar = document.querySelector('.progress-bar');
  function onProgress(x, y) {
    console.log(x, y)
    progressBar.style.width = y * 100 + '%';
  }
  self.progressObserver = new ScrollProgress(onProgress);
  }, 100)
});