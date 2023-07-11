import React from 'react';
import { ActionIcon, Flex, Group } from '@mantine/core';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { FooterLayout, LikeButton, OutLineButton, Skeleton } from '../common';
import { useToggleLikeMutation } from '../../services/postApi';
import useToast from '../../hooks/useToast';

const Footer = ({ post, user, isLoading }) => {
  const navigate = useNavigate();
  const [toggleLikePost] = useToggleLikeMutation();
  const checked = post?.like.includes(user?.email);
  const toast = useToast();

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
              onClick={() => {
                if (!user) {
                  toast.error({ title: '로그인 후 이용해주세요' });
                  return;
                }

                toggleLikePost({ postId: post.id, checked, email: post.email });
              }}
            />

            <ActionIcon
              fz="24px"
              size="xl"
              onClick={async () => {
                await navigator.clipboard.writeText(window.location.href);

                toast.success({ title: '클립보드 주소가 저장되었습니다.' });
              }}>
              <AiOutlineShareAlt />
            </ActionIcon>
          </Flex>
        </Group>
      )}
    </FooterLayout>
  );
};

export default Footer;
