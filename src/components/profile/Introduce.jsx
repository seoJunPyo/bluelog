import { Text, Textarea } from '@mantine/core';
import React from 'react';

const Introduce = ({ edit, value, register }) => (
  <>
    {edit ? (
      <Textarea w="100%" placeholder="자기소개를 입력해주세요." {...register} />
    ) : (
      <Text opacity={value ? 1 : 0.3}>{value || '자기소개가 없습니다.'}</Text>
    )}
  </>
);

export default Introduce;
