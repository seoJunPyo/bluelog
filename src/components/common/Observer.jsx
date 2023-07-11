import { Center, Loader } from '@mantine/core';
import React from 'react';
import useInterSection from '../../hooks/useInterSection';

const Observer = ({ fetchNextPage }) => {
  const observerRef = useInterSection(fetchNextPage);

  return (
    <Center p="24px" ref={observerRef}>
      <Loader />
    </Center>
  );
};

export default Observer;
