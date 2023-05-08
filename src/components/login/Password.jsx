/* eslint-disable jsx-a11y/no-autofocus */
import { Group, PasswordInput, Stack } from '@mantine/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocation, useNavigate } from 'react-router-dom';
import { FillButton, OutLineButton } from '.';
import { ErrorText, LabelText } from '..';
import { logIn } from '../../api/auth';
import { updateUserInfo } from '../../slices/userSlice';

const passwordScheme = z.object({
  password: z.string().min(1, { message: '비밀번호를 입력해주세요' }),
});

const Password = () => {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(passwordScheme),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = async data => {
    const { password } = data;
    const { email } = location.state;

    try {
      const { data } = await logIn({ email, password });

      dispatch(updateUserInfo(data));
      navigate('/');
    } catch (e) {
      setError('password', { message: '비밀번호가 일치하지 않습니다.' });
      setValue('password', '');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing="lg">
        <PasswordInput
          size="lg"
          {...register('password')}
          placeholder="비밀번호를 입력해주세요."
          label={<LabelText text="Password" />}
          error={errors?.password && <ErrorText text={errors.password.message} autoComplete="cc-number" />}
          autoFocus
        />
        <Group sx={{ alignSelf: 'flex-end' }}>
          <OutLineButton label="뒤로가기" onClick={() => navigate('/login')} />
          <FillButton type="submit" label="다음" />
        </Group>
      </Stack>
    </form>
  );
};

export default Password;
