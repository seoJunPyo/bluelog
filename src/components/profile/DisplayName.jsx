import { Text, TextInput } from '@mantine/core';
import React from 'react';

const DisplayName = ({ edit, value, register }) => (
  <>{edit ? <TextInput w="100%" {...register} /> : <Text>{value}</Text>}</>
);

export default DisplayName;
