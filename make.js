#!/usr/bin/env node
'use strict';

require('nitro')(function (nitro) {

    nitro.task('demo', ['templates:dev', 'sass:dev']);

    function logTime () {
      console.log( new Date() );
    }

    nitro.task('dev', ['demo'], function () {
      nitro.watch('demo')
        .when('{,**/}*.{sass,scss}', ['sass:dev', logTime]);

      nitro.watch('styles', ['templates:dev', 'sass:dev', logTime]);
      nitro.watch('.demo-templates', ['templates:dev', 'sass:dev', logTime]);

      nitro.livereload('demo');
    });

    nitro.task('live', ['dev'], function () {
      nitro.server({
        root: 'demo',
        dirAlias: {
          styles: 'styles'
        },
        openInBrowser: true
      });
    });

    var pkgActions = {
      increaseVersion: function () {
        var version = nitro.package('npm').increaseVersion().version();
        nitro.package('bower').setVersion( version );
        process.stdout.write(version);
        process.exit(0);
      }
    };

    nitro.task('pkg', function (target) {
      if( pkgActions[target] ) {
        return pkgActions[target]();
      }

      var pkg = require('../package');
      process.stdout.write(pkg[target]);
      process.exit(0);
    });

  })
  .import('.make')
  .run();
