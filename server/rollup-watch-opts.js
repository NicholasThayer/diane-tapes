const json = require('rollup-plugin-json');
const html = require('rollup-plugin-html');
const resolve = require('rollup-plugin-node-resolve');
const image = require('rollup-plugin-image');
const text = require('rollup-plugin-string').string;
const postCss = require('rollup-plugin-postcss')
const postcssPresetEnv = require('postcss-preset-env');

const path = require('path');
const input = path.resolve('src/index.js')

console.log('input path', input);

const validate = [
  json,
  html,
  resolve,
  image,
  text,
  postCss,
  postcssPresetEnv,
].filter( arg => typeof arg != 'function')
.map( arg => console.log('invalid rollup plugin:', arg) || arg )
.length > 0 ? false : true;

module.exports = {
  input: input,
  plugins:[
    json(),
    html(),
    resolve(),
    image(),
    text({ include: "**/*.txt" }),
    postCss([ postcssPresetEnv() ])

  ],
  output: {
    format: 'iife',
    name: 'bundle',
    file: 'public/bundle/index.js'
  }
}
