import React from 'react';
import { ActionIcon, Flex, Group } from '@mantine/core';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { FillButton, FooterLayout, LikeButton, OutLineButton, Skeleton } from '../common';
import { useToggleLikeMutation } from '../../services/postApi';

const Footer = ({ post, user, isLoading }) => {
  const navigate = useNavigate();
  const [toggleLikePost] = useToggleLikeMutation();
  const checked = post?.like.includes(user?.email);

  return (
    <FooterLayout>
      <OutLineButton label="뒤로 가기" leftIcon={<IoIosArrowBack />} onClick={() => navigate(-1)} />

      {isLoading ? (
        <Skeleton width={240} height={40} />
      ) : (
        <Group>
          <Flex>
            <LikeButton
              checked={checked}
              onClick={() => toggleLikePost({ postId: post.id, checked, email: post.email })}
            />

            <ActionIcon fz="24px" size="xl">
              <AiOutlineShareAlt />
            </ActionIcon>
          </Flex>
          <FillButton label="댓글 작성하기" />
        </Group>
      )}
    </FooterLayout>
  );
};

export default Footer;
