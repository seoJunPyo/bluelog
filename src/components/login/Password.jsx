/* eslint-disable jsx-a11y/no-autofocus */
import { Flex, Group, PasswordInput, Stack } from '@mantine/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocation, useNavigate } from 'react-router-dom';
import { ErrorText, LabelText, FillButton, OutLineButton, InfoLinkText } from '..';
import useUser from '../../hooks/useUser';

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

  const { userLogIn } = useUser();
  const [isLoading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = async data => {
    const { password } = data;
    const { email } = location.state;

    setLoading(true);

    try {
      await userLogIn({ email, password });

      navigate('/');
    } catch (e) {
      setError('password', { message: '계정이 존재하지 않거나 비밀번호가 일치하지 않습니다.' });
      setValue('password', '');
    } finally {
      setLoading(false);
    }
  };

  const handleClickGoBack = () => {
    navigate('/login', {
      state: location.state,
    });
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
          autoComplete="cc-number"
          autoFocus
          disabled={isLoading}
        />
        <Flex justify="space-between" align="center">
          <InfoLinkText infoText="비밀번호를 잊으셨나요?" linkText="비밀번호 찾기" to={'/'} />
          <Group>
            <OutLineButton label="뒤로가기" onClick={handleClickGoBack} />
            <FillButton type="submit" label="다음" loading={isLoading} />
          </Group>
        </Flex>
      </Stack>
    </form>
  );
};

export default Password;
