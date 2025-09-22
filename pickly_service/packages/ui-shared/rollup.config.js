import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';

const packageJson = require('./package.json');

const createConfig = (input, output) => ({
  input,
  output: [
    {
      file: output.cjs,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: output.esm,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      browser: true,
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      exclude: ['**/*.test.ts', '**/*.test.tsx'],
    }),
    terser({
      compress: {
        drop_console: true,
      },
    }),
  ],
  external: ['react'],
});

export default [
  // Main bundle
  createConfig('src/index.ts', {
    cjs: packageJson.main,
    esm: packageJson.module,
  }),
  // Hooks-only bundle
  createConfig('src/hooks/index.ts', {
    cjs: './dist/hooks.js',
    esm: './dist/hooks.esm.js',
  }),
  // Utils-only bundle
  createConfig('src/utils/index.ts', {
    cjs: './dist/utils.js',
    esm: './dist/utils.esm.js',
  }),
];