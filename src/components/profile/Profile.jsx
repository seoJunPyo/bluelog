import React from 'react';
import { Box, Container, Flex, Group, Stack, Text, Title } from '@mantine/core';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FillButton, OutLineButton, InterestTags, DisplayName, Introduce } from '..';
import { useUpdateUserInfoMutation } from '../../services/userApi';
import useToast from '../../hooks/useToast';

const SubTitle = ({ label }) => (
  <Title
    c="var(--font-color)"
    w="25%"
    order={3}
    sx={{
      alignSelf: 'flex-start',
    }}>
    {label}
  </Title>
);

const InfoBox = ({ children }) => (
  <Box
    w="75%"
    p="12px 20px"
    bg="var(--input-bg-color)"
    sx={{
      borderRadius: '10px',
      input: { border: 'none', fontSize: '20px', padding: 0 },
      textarea: {
        padding: 0,
        fontSize: '24px',
        color: 'var(--content-font-color)',
        background: 'var(--input-bg-color)',
        border: 'none',
      },
    }}>
    {children}
  </Box>
);

const userProfileScheme = z.object({
  displayName: z.string().min(1),
  interestedTags: z.string().array().optional(),
  introduce: z.string(),
});

const Profile = ({ user }) => {
  const { email, displayName, interestedTags, introduce } = user;

  const [updateUserInfo] = useUpdateUserInfoMutation();
  const toast = useToast();
  const [edit, setEdit] = React.useState(false);

  const { register, control, handleSubmit, reset } = useForm({
    resolver: zodResolver(userProfileScheme),
    defaultValues: {
      displayName,
      introduce,
      interestedTags,
    },
  });

  const onSubmit = async userInfo => {
    try {
      await updateUserInfo({ email, userInfo });
    } catch (e) {
      toast.error({ title: '유저 정보를 업데이트하는데 실패했습니다.' });
      reset();
    }
  };

  return (
    <Container size="md" fz="24px">
      <Stack>
        <Flex align="center">
          <SubTitle label="이름" />
          <InfoBox>
            <DisplayName value={displayName} edit={edit} register={register('displayName')} />
          </InfoBox>
        </Flex>
        <Flex align="center">
          <SubTitle label="이메일" />
          <InfoBox>
            <Text>{email}</Text>
          </InfoBox>
        </Flex>
        <Flex align="center">
          <SubTitle label="관심있는 태그" />
          <InfoBox>
            <InterestTags edit={edit} control={control} />
          </InfoBox>
        </Flex>
        <Flex align="center">
          <SubTitle label="자기소개" />
          <InfoBox>
            <Introduce edit={edit} value={introduce} register={register('introduce')} />
          </InfoBox>
        </Flex>
      </Stack>
      <Flex my="36px" justify="center">
        {edit ? (
          <Group>
            <OutLineButton label="취소" onClick={() => setEdit(false)} />
            <FillButton
              type="submit"
              label="확인"
              onClick={() => {
                handleSubmit(onSubmit)();
                setEdit(false);
              }}
            />
          </Group>
        ) : (
          <FillButton label="수정하기" onClick={() => setEdit(true)} />
        )}
      </Flex>
    </Container>
  );
};

export default Profile;
