"use strict";

function dtime(num) {
  var date = new Date();
  date.setDate(date.getDate() + num);
  var options = {
    month: 'long',
    day: 'numeric'
  };
  document.write(date.toLocaleString("en-US", options));
}
window.addEventListener('load', function () {
  var likes = document.querySelectorAll('.like');
  for (var i = 0; i < likes.length; i++) {
    likes[i].addEventListener('click', function () {
      if (this.classList.contains('like--down')) {
        this.classList.remove('like--down');
        this.innerText = --this.innerText;
      } else {
        this.classList.add('like--down');
        this.innerText = ++this.innerText;
      }
    });
  }
});