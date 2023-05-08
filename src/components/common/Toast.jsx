import React from 'react';
import { Notification, keyframes } from '@mantine/core';
import { BsCheckLg, BsXLg } from 'react-icons/bs';
import useToast from '../../hooks/useToast';

const entry = keyframes`
  from {
    transform : translate3d(100%, 0 , 0)
  }

  to {
    transform : translate3d(0, 0 , 0)
  }
`;

const dismiss = keyframes`
  from {
    transform : translate3d(0, 0 , 0)
  }

  to {
    transform : translate3d(100%, 0 , 0)
  }
`;

const Toast = ({ id, type, title, content, autoClose = true, autoCloseDelay = 3000 }) => {
  const [remove, setRemove] = React.useState(false);
  const toast = useToast();

  return (
    <Notification
      w="360px"
      bg="var(--input-bg-color)"
      title={title}
      icon={type === 'success' ? <BsCheckLg /> : <BsXLg />}
      color={type === 'success' ? 'teal' : 'red'}
      onClose={() => setRemove(true)}
      onAnimationEnd={() => {
        if (!remove && autoClose) setTimeout(() => setRemove(true), autoCloseDelay);
        if (remove) toast.remove(id);
      }}
      sx={{
        borderRadius: '10px',
        boxShadow: 'var(--box-shadow)',
        animation: `${remove ? dismiss : entry} 0.3s both`,
        '.mantine-Notification-title': {
          fontSize: '18px',
          color: 'var(--font-color)',
        },
        '.mantine-Notification-description': {
          color: 'var(--content-font-color)',
          wordBreak: 'keep-all',
        },
        button: {
          width: '32px',
          height: '32px',
        },
      }}>
      {content}
    </Notification>
  );
};

export default Toast;
