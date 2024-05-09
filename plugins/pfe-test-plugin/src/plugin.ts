import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const pfeTestPluginPlugin = createPlugin({
  id: 'pfe-test-plugin',
  routes: {
    root: rootRouteRef,
  },
});

export const PfeTestPluginPage = pfeTestPluginPlugin.provide(
  createRoutableExtension({
    name: 'PfeTestPluginPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
