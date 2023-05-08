import React from 'react';
import { Badge as MantineBadge } from '@mantine/core';
import { Link } from 'react-router-dom';

const Badge = ({ text }) => (
  <Link>
    <MantineBadge
      c="var(--content-font-color)"
      size="xl"
      fw="400"
      fz="16px"
      sx={{
        border: 'none',
        background: 'var(--input-bg-color)',
        boxShadow: 'var(--box-shadow)',

        ':hover': {
          transform: 'scale3d(1.05,1.05,1.05)',
          transition: 'transform 0.2s',
        },
      }}>
      {text}
    </MantineBadge>
  </Link>
);

export default Badge;
