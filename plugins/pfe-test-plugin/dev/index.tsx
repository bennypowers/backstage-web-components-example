import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { pfeTestPluginPlugin, PfeTestPluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(pfeTestPluginPlugin)
  .addPage({
    element: <PfeTestPluginPage />,
    title: 'Root Page',
    path: '/pfe-test-plugin',
  })
  .render();
