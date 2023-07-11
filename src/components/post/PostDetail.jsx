import React from 'react';
import { ActionIcon, Avatar, Container, Divider, Flex, Text, Title } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { LikeButton, OutLineButton, VerticalDivider } from '../common';
import { Badge } from '..';
import PostContent from './PostContent';
import { useRemovePostMutation, useToggleLikeMutation } from '../../services/postApi';
import { useGetUserQuery, useToggleSaveMutation } from '../../services/userApi';

const PostDetail = ({ post, user }) => {
  const navigate = useNavigate();
  const { data: userInfo } = useGetUserQuery({ email: user?.email ?? '' });
  const [removePost] = useRemovePostMutation();
  const [toggleLikePost] = useToggleLikeMutation();
  const [toggleSavePost] = useToggleSaveMutation();
  const likeChecked = post.like.includes(user?.email);
  const saveChecked = userInfo?.savedPosts?.includes(post.id) ?? false;

  const handleClickRemove = async () => {
    await removePost({ postId: post.id });

    navigate('/');
  };

  return (
    <Container mb="70px" c="var(--content-font-color)" p="48px" size="xl" fz="20px">
      <Link to={`/category/${post.email}/${post.category}`}>
        <Text fz="16px" c="gray">
          {post.category}
        </Text>
      </Link>
      <Flex justify="space-between">
        <Title mb="24px" fz="48px" c="var(--font-color)">
          {post.title}
        </Title>

        <Flex align="center">
          <ActionIcon
            fz="24px"
            size="xl"
            onClick={() => {
              toggleSavePost({ email: user?.email, checked: saveChecked, postId: post.id });
            }}>
            {saveChecked ? <BsBookmarkFill /> : <BsBookmark />}
          </ActionIcon>
          <LikeButton
            gap="4px"
            checked={likeChecked}
            count={post.like.length}
            onClick={() => toggleLikePost({ postId: post.id, checked: likeChecked, email: user?.email })}
          />
        </Flex>
      </Flex>

      <Flex justify="space-between">
        <Flex fz="16px" align="center" gap="4px">
          <Flex align="center" gap="8px">
            <Avatar size="sm" radius="xl" />
            post by {post.name}
          </Flex>
          <VerticalDivider />
          <Text>{new Intl.DateTimeFormat('ko-KR').format(post.createAt)}</Text>
        </Flex>
        {user?.email === post.email && (
          <Flex gap="12px">
            <OutLineButton label="수정" onClick={() => navigate(`/editpost/${post.id}`)} />
            <OutLineButton label="삭제" onClick={handleClickRemove} />
          </Flex>
        )}
      </Flex>

      <Divider my="xl" variant="dotted" />

      <PostContent content={post.content} />

      <Divider my="xl" variant="dotted" />

      <Flex mb="lg" align="center" gap="8px">
        <Text mr="8px">태그 : </Text>
        {post.tagList.map(tag => (
          <Badge key={tag} text={tag} useSearch />
        ))}
      </Flex>
    </Container>
  );
};

export default PostDetail;
