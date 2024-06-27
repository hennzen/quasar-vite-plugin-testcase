# What is this?

With this minimal setup I try to reproduce an error in our project setup (using [Quasar framework](https://quasar.dev/)), where a `QSelect` closes on user user interaction instead of opening the options dropdown.

# Background
While patching Quasar's `QSelect` component (as described in Quasar issue [a11y: handle ARIA error state in form field components #17306 ](https://github.com/quasarframework/quasar/issues/17306)) to solve some WCAG related things, I changed the way we import `QSelect` within a custom wrapper component.

This alone (without a patch actually being applied!), causes the behaviour I found described in this older issue:  
[QSelect multiple closes on every user action (selection/deselection) #12901](https://github.com/quasarframework/quasar/issues/12901)

# TL;DR
In order to be able to patch a component via `npx patch-package quasar`, instead of doing a

```js
import { QSelect, QIcon } from 'quasar'
```

in a custom component wrapping `QSelect`, I directly import from `src` like so:
```js
import { QIcon } from 'quasar'
import { QSelect } from '../../node_modules/quasar/src/components/select'
```

# Setup

We use Quasar's [Vite plugin flavour](https://quasar.dev/start/vite-plugin#creating-a-vite-project), so the setup steps were as follows:

```bash
npm init vite my-vue-app -- --template vue
cd my-vue-app
npm install --save quasar @quasar/extras
npm install --save-dev @quasar/vite-plugin sass@^1.33.0
```

Then apply changes to `main.js` and `vite.config.js` and create `src/quasar-variables.sass` as described in [Quasar's setup instructions](https://quasar.dev/start/vite-plugin#using-quasar)

