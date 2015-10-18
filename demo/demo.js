
(function (root) {

  console.log('gogogo!');

  var box = document.querySelector('.box');

  [].forEach.call(document.querySelectorAll('[data-animation]'), function (button) {

    var animation = button.getAttribute('data-animation');

    button.addEventListener('click', function () {
      box.classList.add('animate-' + animation);
      setTimeout(function () {
        box.classList.remove('animate-' + animation);
      }, 1000);
    }, false);

  });

})(this);
