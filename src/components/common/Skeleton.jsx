import React from 'react';
import { Skeleton as MantineSkelton } from '@mantine/core';

const Skeleton = ({ m, mt, mb, mr, ml, mx, my, width, height, radius, circle = false, visible, children }) => (
  <MantineSkelton
    visible={visible}
    animate={true}
    m={m}
    mt={mt}
    mb={mb}
    mr={mr}
    ml={ml}
    mx={mx}
    my={my}
    width={width}
    height={height}
    radius={radius}
    circle={circle}
    sx={{
      '::before': {
        background: 'none',
      },
      '::after': {
        background: 'var(--hover-bg-color)',
      },
    }}>
    {children}
  </MantineSkelton>
);

export default Skeleton;
