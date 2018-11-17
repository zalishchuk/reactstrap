/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/newline-after-import: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';

import FlexExample from '../examples/Flex';
const FlexExampleSource = require('!!raw!../examples/Flex');

export default function FlexPage() {
  return (
    <div>
      <PageTitle title="Flex" />
      <p>
        Quickly manage the layout, alignment, and sizing of grid columns,
        navigation, components, and more with a full suite of responsive flexbox
        utilities. For more complex implementations, custom CSS may be
        necessary.
      </p>
      <div className="docs-example">
        <FlexExample />
      </div>
      <pre>
        <PrismCode className="language-jsx">{FlexExampleSource}</PrismCode>
      </pre>
    </div>
  );
}
