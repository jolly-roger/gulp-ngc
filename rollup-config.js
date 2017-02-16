export default {
    entry: 'src/index.js',
    dest: 'dist/index.js',
    sourceMap: false,
    format: 'cjs',
    external: [
        'gulp',
        'through2',
        '@angular/compiler-cli/src/main'
    ]
}