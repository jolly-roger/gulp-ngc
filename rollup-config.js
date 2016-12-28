import rollup      from 'rollup';

export default {
    entry: 'src/index.js',
    dest: 'dist/index.js',
    sourceMap: false,
    format: 'cjs'
}