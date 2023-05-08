/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Group, Stack, TextInput } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import FillButton from './FillButton';
import { ErrorText, LabelText } from '..';
import { checkEmail } from '../../api/auth';

const emailScheme = z.object({
  email: z.string().email({ message: '적절하지 않은 이메일입니다.' }),
});

const Email = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({ resolver: zodResolver(emailScheme), shouldFocusError: true });

  const [isLoading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const onSubmit = async data => {
    const { email } = data;
    setLoading(true);

    try {
      await checkEmail(email);

      navigate('password', {
        state: { email },
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
          placeholder="example@example.com"
          label={<LabelText text="Email" />}
          error={errors?.email && <ErrorText text={errors.email.message} />}
          disabled={isLoading}
          autoFocus
        />
        <Group sx={{ alignSelf: 'flex-end' }}>
          <FillButton type="submit" label="다음" loading={isLoading} />
        </Group>
      </Stack>
    </form>
  );
};

export default Email;
