import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'
import deleteDist from 'rollup-plugin-delete'
import resolve from '@rollup/plugin-node-resolve'
export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
        },
        {
            file: 'dist/index.umd.js',
            format: 'umd',
            name: 'jslibScaffolding',
        },
    ],
    plugins: [typescript(), terser(), deleteDist({ targets: 'dist/*', verbose: true }), resolve()],
}
