import React from 'react';
import { Grid } from '@material-ui/core';
import { Card } from '@patternfly/elements/react/pf-card/pf-card.js';
// import { Button } from '@patternfly/elements/react/pf-button/pf-button.js';
import {
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core-components';

import './styles.css';

import {BatZion} from './bat-zion';

BatZion;

export const ExampleComponent = () => (
  <Page themeId="tool">
    <Header title="Welcome to pfe-test-plugin!" subtitle="Optional subtitle">
      <HeaderLabel label="Owner" value="Team X" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>
      <ContentHeader title="Plugin title">
        <SupportButton>A description of your plugin goes here.</SupportButton>
      </ContentHeader>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <Card size="compact">
            <h2 slot="header" style={{ color:'black' }}>PFE Card</h2>
            <p>It's just HTML</p>
          </Card>
        </Grid>
        <Grid item>
          <bat-zion mood=""/>
        </Grid>
      </Grid>
    </Content>
  </Page>
);


declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bat-zion': Partial<BatZion>;
    }
  }
}
