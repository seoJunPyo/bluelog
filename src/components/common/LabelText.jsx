import React from 'react';
import { Text } from '@mantine/core';

const LabelText = ({ text }) => (
  <Text pl="8px" mb="4px" c="var(--content-font-color)">
    {text}
  </Text>
);

export default LabelText;
