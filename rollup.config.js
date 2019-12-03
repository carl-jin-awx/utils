import typescript from 'rollup-plugin-typescript';

export default {
  input: './main.ts',
  plugins: [
    typescript()
  ],
  output: {
    file: './index.js',
    format: 'umd',
    name: 'bundle'
  }
}