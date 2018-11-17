import React from 'react';
import { Flex } from 'reactstrap';

const Example = () => {
  return (
    <div>
      <Flex justify="start" align="center" wrap>
        <div>left</div>
        <div>right</div>
      </Flex>
      <Flex justify="start" align="center" wrap={{ md: true, xs: false }}>
        <div>left</div>
        <div>right</div>
      </Flex>
      <Flex justify="start" align="center" wrap={false}>
        <div>left</div>
        <div>right</div>
      </Flex>
      <Flex justify="start" content wrap={false}>
        <div>left</div>
        <div>right</div>
      </Flex>
      {/* <Flex direction={{ md: 'column', xs: 'row' }} reverse={{ md: true }}>
        <div>left</div>
        <div>right</div>
      </Flex>
      <Flex direction={{ md: 'column', xs: 'row' }} reverse>
        <div>left</div>
        <div>right</div>
      </Flex> */}
    </div>
  );
};

export default Example;
