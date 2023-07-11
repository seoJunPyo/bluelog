import { Flex, Portal } from '@mantine/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { Toast } from '.';

const Toasts = () => {
  const list = useSelector(state => state.toast.list);

  return (
    <Portal>
      <Flex direction="column" gap="8px" pos="fixed" top="85px" right="8px">
        {list.map(toastInfo => (
          <Toast key={toastInfo.id} {...toastInfo} />
        ))}
      </Flex>
    </Portal>
  );
};

export default Toasts;
