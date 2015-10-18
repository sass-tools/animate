'use strict';


module.exports = function (nitro) {

  nitro.task('sass', function (target) {

    var dev = target === 'dev';

    nitro.dir('demo')
      .load('{,**/}*.{sass,scss}')
      .process('sass', {
        includePaths: [
          '../styles'
        ],
        autoprefix: true,
        sourceComments: dev,
        outputStyle: dev ? 'nested' : 'compressed'
      })
      .write('demo');

  });

};
