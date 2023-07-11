import { ActionIcon, Flex, Text } from '@mantine/core';
import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const LikeButton = ({ checked, count, onClick, disabled, size = 'xl', gap }) => (
  <Flex align="center" gap={gap}>
    <ActionIcon
      onClick={onClick}
      fz="24px"
      size={size}
      disabled={disabled}
      sx={{
        ':disabled': {
          background: 'none',
          border: 'none',
        },
      }}>
      {checked ? <AiFillHeart color="red" /> : <AiOutlineHeart color="red" />}
    </ActionIcon>

    <Text>{count}</Text>
  </Flex>
);

export default LikeButton;
