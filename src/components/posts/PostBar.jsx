import { Avatar, Flex, Group, Stack, Text, Title } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { BarLayOut, Img, VerticalDivider, Badge, LikeIcon } from '..';
import formatElapsedDate from '../../util/formatElapsedDate';

const formatDisplayContent = content => content.replace(/<[^>]+>|<\/[^>]+>/g, '');

const PostBar = ({ toPost, title, tagList, thumbnail, content, name, createAt, like, commentCount, user }) => (
  <BarLayOut
    image={
      <Link to={toPost}>
        <Img src={thumbnail} alt={title} />
      </Link>
    }>
    <Flex w="70%" p="20px" direction="column" justify="space-between">
      <Stack w="80%" spacing="sm">
        <Title c="var(--font-color)">
          <Link to={toPost}>{title}</Link>
        </Title>
        <Flex gap="8px">
          {tagList.map(tag => (
            <Badge key={tag} size="md" text={tag} useSearch />
          ))}
        </Flex>
        <Text lineClamp={1}>{formatDisplayContent(content)}</Text>
      </Stack>

      <Flex align="center" gap="4px">
        <Flex align="center" gap="8px">
          <Avatar size="sm" radius="xl" />
          <Text lineClamp={1}>post by {name}</Text>
        </Flex>
        <VerticalDivider />
        <Text fz="12px">{formatElapsedDate(createAt)}</Text>
      </Flex>
    </Flex>

    <Group w="10%" miw="120px" p="20px 20px 0 0" sx={{ alignSelf: 'flex-start', flexShrink: 0 }}>
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
  </BarLayOut>
);

export default PostBar;
