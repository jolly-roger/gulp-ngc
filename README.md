## gulp-ngc

Extremely simple and dummy gulp plugin who wraps @angular/compiler-cli

### Usage
In order to build your angular2 project with ngc simply pass path to your tsconfig.json file

Example:
```js
import ngc from 'gulp-ngc';

gulp.task('ngc', (cb) => {
    return ngc('tsconfig.json');
});
```