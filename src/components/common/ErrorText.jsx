import { Flex } from '@mantine/core';
import React from 'react';
import { BsExclamationCircle } from 'react-icons/bs';

const ErrorText = ({ text }) => (
  <Flex mt="8px" align="center" gap="4px" fz="16px">
    <BsExclamationCircle />
    {text}
  </Flex>
);

export default ErrorText;
