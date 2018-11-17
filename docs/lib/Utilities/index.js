import React from 'react';
import Content from '../UI/Content';

const items = [
  {
    name: 'Colors',
    to: '/utilities/colors/'
  },
  {
    name: 'Clearfix',
    to: '/utilities/clearfix/'
  },
  {
    name: 'Flex',
    to: '/utilities/flex/'
  }
];

function Utilities(props) {
  return <Content title="Utilities" items={items} {...props} />;
}

export default Utilities;
