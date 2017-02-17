export default {
    entry: 'src/index.js',
    dest: 'dist/index.js',
    sourceMap: false,
    format: 'cjs',
    external: [
        'gulp',
        'through2',
        'gulp-util',
        '@angular/compiler-cli/src/main'
    ]
}