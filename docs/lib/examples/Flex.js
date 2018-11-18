import React from 'react';
import { Flex } from 'reactstrap';

const Example = () => {
  return (
    <div>
      <Flex justify="start" align="center" wrap direction="row" reverse>
        <div>left</div>
        <div>middle</div>
        <div>right</div>
      </Flex>
      <Flex
        justify={{ xs: 'start', md: 'center' }}
        align={{ xs: 'start', md: 'center' }}
        wrap={{ xs: true, md: false }}
        direction={{ xs: 'column', md: 'row' }}
        reverse={{ lg: true, md: false }}
        inline
      >
        <div>left</div>
        <div>middle</div>
        <div>right</div>
      </Flex>
    </div>
  );
};

export default Example;
