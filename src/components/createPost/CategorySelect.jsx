import React from 'react';
import { Flex, Input, Modal, TextInput, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import useUser from '../../hooks/useUser';
import { useGetCategoryNamesQuery } from '../../services/userApi';
import { FillButton, OutLineButton, MyCategoryList } from '..';

const SelectModal = ({ user, opened, selectedCategory, close, handleSelectedCategory }) => {
  const { data: categoryNames, isLoading } = useGetCategoryNamesQuery({ email: user?.email });
  const inputRef = React.useRef(null);

  if (isLoading) return null;

  return (
    <Modal
      padding="xl"
      opened={opened}
      onClose={close}
      withCloseButton={false}
      sx={{ '.mantine-Modal-content': { background: 'var(--body-bg-color)' } }}>
      <TextInput
        size="lg"
        ref={inputRef}
        onKeyUp={e => {
          if (e.key !== 'Enter') return;

          handleSelectedCategory(e.target.value);
        }}
        defaultValue={selectedCategory}
        placeholder="카테고리를 입력해주세요"
        sx={{ input: { border: '1px solid var(--hover-bg-color)' } }}
      />

      <Title mt="24px" c="var(--font-color)" order={3}>
        내 카테고리 목록
      </Title>
      <MyCategoryList categoryList={categoryNames} handleSelectedCategory={handleSelectedCategory} />

      <Flex gap="12px" justify="flex-end">
        <OutLineButton label="취소" onClick={close} />
        <FillButton label="확인" onClick={() => handleSelectedCategory(inputRef.current.value)} />
      </Flex>
    </Modal>
  );
};

const CategorySelect = ({ selectedCategory, selectCategory }) => {
  const { user } = useUser();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Input
        size="md"
        value={selectedCategory}
        placeholder="카테고리 선택"
        sx={{ input: { border: 'none', fontSize: '20px', cursor: 'pointer' } }}
        onClick={open}
        readOnly
      />
      {user && (
        <SelectModal
          user={user}
          opened={opened}
          close={close}
          selectedCategory={selectedCategory}
          handleSelectedCategory={category => {
            selectCategory(category);
            close();
          }}
        />
      )}
    </>
  );
};

export default CategorySelect;
