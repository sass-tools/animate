
(function (root) {

  console.log('gogogo!');

  if( localStorage.getItem( 'last-animations') ) {
    [].forEach.call( document.querySelectorAll( localStorage.getItem( 'last-animations') ), function (element) {
      element.classList.add('selected');
    });
  }

  var box = document.querySelector('.box'), lastAnimation,
      sassCode = document.querySelector('.sass-code'),
      editMode = false,
      noop = function (value) { return value; },
      actions = {
        edit: function () {
          editMode = true;
          document.body.classList.add('edit-mode');
        },
        'clear-selection': function () {
          [].forEach.call( document.querySelectorAll('[data-animation].selected'), function (element) {
            element.classList.remove('selected');
          });
          localStorage.setItem( 'last-animations', '');
        },
        'cancel-edit': function () {
          editMode = false;
          document.body.classList.remove('edit-mode');
          document.body.classList.remove('show-code');
        },
        'show-code': function () {
          document.body.classList.toggle('show-code');

          var animations = [].reduce.call( document.querySelectorAll('[data-animation].selected'), function (prev, element) {
            return prev + '\n@include animate(' + element.getAttribute('data-animation') + ')';
          }, '' );

          sassCode.textContent = '@import animate\n' + animations;
        }
      };

  [].forEach.call( document.querySelectorAll('[data-action]'), function (element) {

    element.addEventListener('click', function () {
        ( actions[element.getAttribute('data-action')] || noop )();
    }, false);
  } );

  [].forEach.call(document.querySelectorAll('[data-animation]'), function (button) {

    var animation = button.getAttribute('data-animation');

    button.addEventListener('click', function () {

      if( editMode ) {
        button.classList.toggle('selected');

        localStorage.setItem( 'last-animations', [].reduce.call( document.querySelectorAll('[data-animation].selected'), function (prev, element) {
          return prev + ( prev ? ', ' : '' ) + '[data-animation=\"' + element.getAttribute('data-animation') + '\"]';
        }, '' ) );

      } else {
        if( lastAnimation ) {
          box.classList.remove( lastAnimation );
        }

        lastAnimation = 'animate-' + animation;

        setTimeout(function () {
          box.classList.add( lastAnimation );
        }, 1);
      }

    }, false);

  });

})(this);
