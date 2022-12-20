// import babel from '@rollup/plugin-babel'
// import commonjs from '@rollup/plugin-commonjs'; // 支持 commonjs 语法
// import resolve from '@rollup/plugin-node-resolve'; // 告诉 Rollup 如何查找外部模块
import vue from 'rollup-plugin-vue'

export default {
  // input: 'src/components/index.js',
  // input: 'src/components/test2/index.js',
  input: 'src/components/index.js',
  external: ['element-plus'],
  plugins: [
    vue(),
    // babel({ babelHelpers: 'bundled' }),
    // resolve(),
    // commonjs(),
  ],
  output: [{
    file: 'dist/bundle-b1.js',
    format: 'cjs'
  },
  {
    file: 'dist/bundle-b2.mjs',
    format: 'es'
  }]
}