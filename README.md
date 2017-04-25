## gulp-ngc

Extremely simple and dummy gulp plugin who wraps @angular/compiler-cli

### Usage
In order to build your angular2 project with ngc simply pass path to your tsconfig.json file

Example:
```js
import ngc from 'gulp-ngc';

gulp.task('ngc', () => {
    return ngc('tsconfig.json');
});
```

More useful example:
```js
import gulp from 'gulp';
import rollup from 'rollup-stream';
import source from 'vinyl-source-stream';
import ngc from 'gulp-ngc';
import rollupConfig from './rollup-config';

gulp.task('ngc', () => {
    return ngc('tsconfig.json');
});

gulp.task('rollup', ['ngc'], () => {
    return rollup(rollupConfig)
        .pipe(source('index.js'))
        .pipe(gulp.dest('./dist'));
});
```

Using NGC options:
```js

gulp.task('ngc', () => {
    return ngc('tsconfig.json', {
         i18nFile: './src/locale/messages.fr.xlf',
         locale: 'fr',
         i18nFormat: 'xlf',
    });
});

```
