import React from 'react';
import { Box, Flex, Group, Text, Title } from '@mantine/core';
import { Link } from 'react-router-dom';
import formatElapsedDate from '../../util/formatElapsedDate';
import { CardLayOut, Img, Badge, LikeIcon } from '..';

const PostCard = ({ id, title, thumbnail, name, like, createAt, tagList, commentCount, user }) => (
  <Box my="12px">
    <CardLayOut
      image={
        <Link to={`/post/${id}`}>
          <Img src={thumbnail} alt={title} />
        </Link>
      }>
      <Flex p="12px" h="30%" mt="4px" direction="column" gap="12px">
        <Title c="var(--font-color)" fz="24px">
          <Link to={`/post/${id}`}>{title}</Link>
        </Title>
        <Flex gap="8px">
          {tagList.map(tag => (
            <Badge key={tag} size="md" text={tag} useSearch />
          ))}
        </Flex>
      </Flex>
      <Flex px="12px" direction="column">
        <Text fz="12px">{formatElapsedDate(createAt)}</Text>
        <Flex h="10%" justify="space-between">
          <Text lineClamp={1}>post by {name}</Text>
          <Group>
            <Text
              display="flex"
              sx={{
                alignItems: 'center',
                gap: '6px',
                svg: {
                  color: 'var(--color-red1)',
                },
              }}>
              <LikeIcon checked={like.includes(user?.email)} />
              {like.length}
            </Text>
            <Text>댓글 {commentCount}</Text>
          </Group>
        </Flex>
      </Flex>
    </CardLayOut>
  </Box>
);

export default PostCard;
