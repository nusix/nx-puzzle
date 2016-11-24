import gulp from 'gulp';
import shell from 'gulp-shell';
import clean from 'gulp-clean';

gulp.task('serve', shell.task([
  'webpack-dev-server --config ./config/webpack.dev.babel.js --colors --progress'
]));


gulp.task('test:watch', shell.task([
  'karma start ./config/karma/karma.conf.js --colors'
]));


gulp.task('test:run', shell.task([
  'karma start ./config/karma/karma.conf.js --colors --single-run --fail-on-hint'
]));


gulp.task('test', gulp.task('test:run'));


gulp.task('clean', () => gulp.src(['reports', 'node_modules'], { base: './', read: false}).pipe(clean()));
