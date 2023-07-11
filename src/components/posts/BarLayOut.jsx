import React from 'react';
import { Box, Flex } from '@mantine/core';

const BarLayOut = ({ image, children }) => (
  <Flex
    h="200px"
    miw="800px"
    radius="md"
    c="var(--content-font-color)"
    bg="var(--input-bg-color)"
    sx={{
      border: '1px solid var(--hover-bg-color)',
      borderRadius: '10px',
      overflow: 'hidden',
    }}>
    <Box
      bg="var(--color-white1)"
      w="20%"
      miw="250px"
      h="100%"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        a: {
          width: '100%',
          height: '100%',
        },

        img: {
          height: '100%',
          width: '100%',
          objectFit: 'cover',
        },
      }}>
      {image}
    </Box>
    {children}
  </Flex>
);

export default BarLayOut;
