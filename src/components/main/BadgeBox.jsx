import React from 'react';
import { Flex } from '@mantine/core';
import Badge from './Badge';

const tagList = [
  {
    id: 0,
    text: '게임',
  },
  {
    id: 1,
    text: 'React',
  },
  {
    id: 2,
    text: '블루 아카이브',
  },
  {
    id: 3,
    text: 'Redux',
  },
  {
    id: 4,
    text: '붕괴 스타레일',
  },
  {
    id: 5,
    text: '이런',
  },
];

const BadgeBox = () => (
  <Flex m="12px auto" w="80%" gap="sm" justify="center" align="center" wrap="wrap">
    {tagList.map(tag => (
      <Badge key={tag.id} text={tag.text} />
    ))}
  </Flex>
);

export default BadgeBox;
