import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/random-username.cjs.development.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/random-username.cjs.production.min.js",
      format: "cjs",
      plugins: [terser()],
      sourcemap: true,
    },
    {
      file: "dist/random-username.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
          outDir: "dist",
        },
      },
    }),
  ],
};
