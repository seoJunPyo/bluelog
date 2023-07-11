import React from 'react';
import { Badge as MantineBadge, CloseButton } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const Badge = ({
  size = 'xl',
  text,
  withCloseBtn = false,
  onClose,
  onClick,
  useSearch,
  withoutAnimation,
  withoutPointer,
}) => {
  const navigate = useNavigate();

  return (
    <MantineBadge
      c="var(--content-font-color)"
      size={size}
      fw="400"
      sx={{
        border: 'none',
        background: 'var(--input-bg-color)',
        boxShadow: 'var(--box-shadow)',
        cursor: !withoutPointer && 'pointer',

        ':hover': !withoutAnimation && {
          transform: 'scale3d(1.05,1.05,1.05)',
          transition: 'transform 0.2s',
        },
      }}
      onClick={e => {
        if (useSearch) navigate(`/posts/search/${text}/1`);
        if (onClick) onClick(e);
      }}
      rightSection={withCloseBtn && <CloseButton onClick={onClose} />}>
      {text}
    </MantineBadge>
  );
};

export default Badge;
