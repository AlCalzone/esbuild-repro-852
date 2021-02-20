# esbuild-repro-852
Repro for https://github.com/evanw/esbuild/issues/852

This monorepo was setup with TypeScript, Yarn and Lerna. It consists of two scoped packages, `@monorepo/a` and `@monorepo/b`.
`@monorepo/b` depends on `@monorepo/a` and uses a method from it.

Tests:
* `yarn run test` - removes the compiled sources, then runs B's script with `esr`
* `yarn run test2` - compiles the sources, then runs B's script with `esr`