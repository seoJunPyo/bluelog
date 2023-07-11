import { Flex, TextInput } from '@mantine/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import FillButton from '../common/FillButton';

const linkScheme = z.object({
  link: z
    .string()
    .regex(/^(http|https):\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/, { message: '부적절한 링크형식입니다.' }),
});

const LinkInputGroup = ({ setLink }) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: zodResolver(linkScheme),
    shouldFocusError: true,
    mode: 'onChange',
  });

  const onSubmit = ({ link }) => {
    setLink({ href: link });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex align="center" gap="12px">
        <TextInput {...register('link')} w="240px" />
        <FillButton type="submit" label="확인" size="sm" radius="xl" disabled={!isValid} />
      </Flex>
    </form>
  );
};

export default LinkInputGroup;
