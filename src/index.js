'use strict';

import gulp from 'gulp';
import through from 'through2';
import {main as ngc} from '@angular/compiler-cli/src/main';


export default (configPath) => {
    let args = {
        _: [],
        p: configPath
    };
    
    return gulp.src(configPath)
        .pipe(through.obj((file, encoding, callback) => {
            ngc(args).then(() => {
                callback(null, file); 
            }); 
        }));
};