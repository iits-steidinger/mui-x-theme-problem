# Reproducer for RangeError in MUI-X DataGrid with custom theme

This project contains a stripped down version of one of our applications.

When we use a custom theme including an Autocomplete with a custom React component, e.g. for the clear icon, our tests fail with a RangeError. 
While the problem is hard to reproduce in the browser, the Jest tests fail reliably. We have also seen the same error in our Cypress tests, so it is probably not tied to jsdom.

```
> jest

 FAIL  src/App.spec.tsx
  App
    × should render (57 ms)

  ● App › should render

    RangeError: Maximum call stack size exceeded
        at JSON.stringify (<anonymous>)

      4 | describe("App", () => {
      5 |     it("should render", async () => {
    > 6 |         render(<App />)
        |               ^
      7 |     })
      8 | })

      at stringify (node_modules/@mui/x-internals/hash/stringify.js:14:15)
      at node_modules/@mui/x-data-grid/material/variables.js:15:52
      at mountMemo (node_modules/react-dom/cjs/react-dom-client.development.js:6603:23)
      at Object.useMemo (node_modules/react-dom/cjs/react-dom-client.development.js:22924:18)
      at Object.process.env.NODE_ENV.exports.useMemo (node_modules/react/cjs/react.development.js:1209:34)
      at Object.useMaterialCSSVariables [as useCSSVariables] (node_modules/@mui/x-data-grid/material/variables.js:14:16)
      at GridCSSVariablesContext (node_modules/@mui/x-data-grid/utils/css/context.js:41:36)
      at Object.react-stack-bottom-frame (node_modules/react-dom/cjs/react-dom-client.development.js:23863:20)
      at renderWithHooks (node_modules/react-dom/cjs/react-dom-client.development.js:5529:22)
      at updateFunctionComponent (node_modules/react-dom/cjs/react-dom-client.development.js:8897:19)
      at beginWork (node_modules/react-dom/cjs/react-dom-client.development.js:10522:18)
      at runWithFiberInDEV (node_modules/react-dom/cjs/react-dom-client.development.js:1522:13)
      at performUnitOfWork (node_modules/react-dom/cjs/react-dom-client.development.js:15140:22)
      at workLoopSync (node_modules/react-dom/cjs/react-dom-client.development.js:14956:41)
      at renderRootSync (node_modules/react-dom/cjs/react-dom-client.development.js:14936:11)
      at performWorkOnRoot (node_modules/react-dom/cjs/react-dom-client.development.js:14462:44)
      at performWorkOnRootViaSchedulerTask (node_modules/react-dom/cjs/react-dom-client.development.js:16216:7)
      at flushActQueue (node_modules/react/cjs/react.development.js:566:34)
      at process.env.NODE_ENV.exports.act (node_modules/react/cjs/react.development.js:859:10)
      at node_modules/@testing-library/react/dist/act-compat.js:47:25
      at renderRoot (node_modules/@testing-library/react/dist/pure.js:190:26)
      at render (node_modules/@testing-library/react/dist/pure.js:292:10)
      at call (src/App.spec.tsx:6:15)
 ```