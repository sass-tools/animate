'use strict';

module.exports = function (nitro) {

  nitro.task('templates', function (target) {

    var animateSass = nitro.file.read('styles/animate.sass'),
        templatesScope = nitro.tools.scope({
          dev: target === 'dev',
          animations: animateSass.match(/@keyframes\s+(\S+)/g).slice(1).map(function (animation) {
            return animation.replace('@keyframes ', '');
          })
        });

    nitro.file.write('demo/index.html', nitro.template( nitro.file.read('.demo-templates/template-index.html') )(templatesScope) );

    nitro.file.write('.tmp/_animations.sass', nitro.template( nitro.file.read('.demo-templates/template-animations.sass') )(templatesScope) );

  });

};
