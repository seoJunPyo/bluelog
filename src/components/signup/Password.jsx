/* eslint-disable jsx-a11y/no-autofocus */
import { Flex, Group, PasswordInput, Stack } from '@mantine/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocation, useNavigate } from 'react-router-dom';
import { ErrorText, LabelText, FillButton, OutLineButton, InfoLinkText } from '..';

const passwordScheme = z
  .object({
    password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/, {
      message: '안전하지 않은 비밀번호입니다.',
    }),
    confirmPassword: z.string(),
  })
  .refine(value => value.confirmPassword === value.password, {
    path: ['confirmPassword'],
    message: '비밀번호가 일치하지 않습니다.',
  });

const Password = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: zodResolver(passwordScheme),
  });

  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = async data => {
    const { password } = data;

    navigate('/signup/nickname', {
      state: { ...location.state, password },
    });
  };

  const handleClickGoBack = () =>
    navigate('/signup', {
      state: location.state,
    });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing="lg">
        <PasswordInput
          size="lg"
          {...register('password')}
          placeholder="비밀번호를 입력해주세요."
          defaultValue={location.state?.password}
          label={<LabelText text="Password" />}
          error={errors?.password && <ErrorText text={errors.password.message} autoComplete="cc-number" />}
          autoComplete="cc-number"
          autoFocus
        />
        <PasswordInput
          size="lg"
          {...register('confirmPassword')}
          placeholder="비밀번호 확인을 위해 다시 입력해주세요."
          label={<LabelText text="Reenter Password" />}
          error={
            errors?.confirmPassword && <ErrorText text={errors.confirmPassword.message} autoComplete="cc-number" />
          }
          autoComplete="cc-number"
        />
        <Flex justify="space-between" align="center">
          <InfoLinkText infoText="비밀번호는 숫자, 대소문자, 특수문자를 포함해야 합니다." />
          <Group sx={{ alignSelf: 'flex-end' }}>
            <OutLineButton label="뒤로가기" onClick={handleClickGoBack} />
            <FillButton type="submit" label="다음" />
          </Group>
        </Flex>
      </Stack>
    </form>
  );
};

export default Password;
