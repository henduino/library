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

window.MathJax = {
  tex2jax: {
    inlineMath: [ ["\\(","\\)"] ],
    displayMath: [ ["\\[","\\]"] ]
  },
  TeX: {
    TagSide: "right",
    TagIndent: ".8em",
    MultLineWidth: "85%",
    equationNumbers: {
      autoNumber: "AMS",
    },
    unicode: {
      fonts: "STIXGeneral,'Arial Unicode MS'"
    }
  },
  displayAlign: "left",
  showProcessingMessages: false,
  messageStyle: "none"
};