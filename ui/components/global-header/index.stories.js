import React from 'react';
import { storiesOf } from '@storybook/react';
import * as Base from './base/example';
import { getAllDisplayCollectionsByType } from '../../shared/helpers';
import StoryFrame from '../../../shared/components/StoryFrame';

import '../../index.scss';

const examples = [Base];

const kitchenSink = getAllDisplayCollectionsByType(examples, [
  'default',
  'examples',
  'states'
]);

storiesOf('Components/Global Header', module).add('Kitchen Sink', () =>
  kitchenSink.map((element, idx) =>
    element.map(({ label, component }) => (
      <StoryFrame
        component={component}
        isViewport
        styles={`height: 340px;`}
        label={label}
        key={`kitchen-sink-${label}-${idx}`}
      />
    ))
  )
);
