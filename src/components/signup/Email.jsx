/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Flex, Stack, TextInput } from '@mantine/core';
import { useLocation, useNavigate } from 'react-router-dom';
import { ErrorText, LabelText, FillButton, InfoLinkText } from '..';
import { checkDuplicatedEmail } from '../../api/auth';

const emailScheme = z.object({
  email: z.string().email({ message: '적절하지 않은 이메일입니다.' }),
});

const Email = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: zodResolver(emailScheme),
    shouldFocusError: true,
  });

  const [isLoading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = async data => {
    setLoading(true);

    try {
      const { email } = data;

      await checkDuplicatedEmail(email);

      navigate('password', {
        state: { ...location.state, email },
      });
    } catch (e) {
      setError('email', { message: e.response.data.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing="lg">
        <TextInput
          size="lg"
          {...register('email')}
          defaultValue={location.state?.email ?? ''}
          placeholder="example@example.com"
          label={<LabelText text="Email" />}
          error={errors?.email && <ErrorText text={errors.email.message} />}
          disabled={isLoading}
          autoFocus
        />
        <Flex justify="space-between" align="center">
          <InfoLinkText infoText="로그인 시 사용될 이메일입니다." />
          <FillButton type="submit" label="다음" loading={isLoading} />
        </Flex>
      </Stack>
    </form>
  );
};

export default Email;
