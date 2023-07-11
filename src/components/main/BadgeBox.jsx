import React from 'react';
import { Flex } from '@mantine/core';
import { Badge } from '..';
import { useGetTagsQuery } from '../../services/tagsApi';

const BadgeBox = () => {
  const { data: tags, isLoading } = useGetTagsQuery();

  if (isLoading) return null;

  return (
    <Flex m="12px auto" w="80%" gap="sm" justify="center" align="center" wrap="wrap">
      {tags?.map(({ name }) => (
        <Badge key={name} text={name} useSearch />
      ))}
    </Flex>
  );
};

export default BadgeBox;
