/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Flex, Group, Stack, TextInput } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';
import { ErrorText, LabelText, FillButton, InfoLinkText, OutLineButton } from '..';
import { checkDuplicatedNickName, signUp } from '../../api/auth';
import useToast from '../../hooks/useToast';

const nickNameScheme = z.object({
  nickName: z.string().min(2, { message: '2글자 이상의 이름을 사용해주세요' }),
});

const NickName = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: zodResolver(nickNameScheme),
    shouldFocusError: true,
  });

  const [isLoading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useToast();

  const onSubmit = async data => {
    setLoading(true);

    try {
      const { email, password } = location.state;
      const { nickName } = data;

      await checkDuplicatedNickName(nickName);
      await signUp({ email, password, nickName });

      toast.success({
        title: '회원가입에 성공하였습니다.',
        content: '관심있는 주제를 검색해보거나 새로운 글을 작성해보세요!',
      });
      navigate('/');
    } catch (e) {
      setError('nickName', { message: e.response.data.message });
    } finally {
      setLoading(false);
    }
  };

  const handleClickGoBack = () => {
    navigate('/signup/password', {
      state: location.state,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing="lg">
        <TextInput
          size="lg"
          {...register('nickName')}
          defaultValue={location.state?.nickName ?? ''}
          placeholder="닉네임을 입력해주세요"
          label={<LabelText text="Nick Name" />}
          error={errors?.nickName && <ErrorText text={errors.nickName.message} />}
          disabled={isLoading}
          autoFocus
        />
        <Flex justify="space-between" align="center">
          <InfoLinkText infoText="다른 사람에게 보여질 이름입니다." />
          <Group sx={{ alignSelf: 'flex-end' }}>
            <OutLineButton label="뒤로가기" onClick={handleClickGoBack} />
            <FillButton type="submit" label="다음" />
          </Group>
        </Flex>
      </Stack>
    </form>
  );
};

export default NickName;
