'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';
import through from 'through2';
import {main as ngc} from '@angular/compiler-cli/src/main';


export default (configPath, ngcArgs) => {

    let args = {};

    if (typeof configPath === 'object') {
        args = configPath;
    } else if (typeof ngcArgs === 'object') {
        args = ngcArgs;
    }
    args._ = args._ || [];
    args.p = args.p || configPath;

    return gulp.src(configPath)
        .pipe(through.obj((file, encoding, callback) => {
            ngc(args)
                .then((code) => {
                    let err = code === 0
                        ? null
                        : new gutil.PluginError(
                            'gulp-ngc',
                            `${gutil.colors.red('Compilation error.')}\nSee details in the ngc output`,
                            {fileName: file.path});

                    callback(err, file);
                });
        }));
};