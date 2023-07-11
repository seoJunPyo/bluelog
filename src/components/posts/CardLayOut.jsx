import { Card } from '@mantine/core';
import React from 'react';

const CardLayOut = ({ image, children }) => (
  <Card
    c="var(--content-font-color)"
    w="320px"
    h="400px"
    bg="var(--input-bg-color)"
    radius="md"
    sx={{
      border: '1px solid var(--hover-bg-color)',

      ':hover': {
        transform: 'scale3d(0.99,0.99,0.99)',
        boxShadow: 'var(--box-shadow)',
        transition: 'all 0.2s',
      },
    }}>
    <Card.Section
      bg="var(--color-white1)"
      h="60%"
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
    </Card.Section>
    {children}
  </Card>
);

export default CardLayOut;
