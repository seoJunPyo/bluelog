/* eslint-disable jsx-a11y/no-autofocus */
import { Flex, Group, TextInput, Title } from '@mantine/core';
import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { FillButton, OutLineButton, RemoveConfirmModal } from '..';

const CategoryTitle = ({ isMy, category, changeCategoryName, removeCategory }) => {
  const [edit, setEdit] = React.useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate();
  const { email } = useParams();

  const inputRef = React.useRef(null);

  const handleClickConfirm = async () => {
    const categoryName = inputRef.current.value;

    if (category === categoryName) return;

    await changeCategoryName(categoryName);
    navigate(`/category/${email}/${categoryName}`);
  };

  return (
    <>
      <Flex h="45px" justify="space-between" align="centers">
        {edit ? (
          <TextInput
            w="80%"
            ref={inputRef}
            defaultValue={category}
            sx={{
              input: {
                height: '100%',
                padding: 0,
                border: 'none',
                fontSize: '48px',
                fontWeight: '700',
                backgroundColor: 'var(--body-bg-color) !important',
              },
            }}
            autoFocus
          />
        ) : (
          <Title fz="48px" c="var(--font-color)">
            {category}
          </Title>
        )}

        {isMy && (
          <Group>
            {edit ? (
              <>
                <FillButton
                  label="확인"
                  onClick={() => {
                    handleClickConfirm();
                    setEdit(false);
                  }}
                />
                <OutLineButton label="취소" onClick={() => setEdit(false)} />
              </>
            ) : (
              <>
                <OutLineButton label="수정" onClick={() => setEdit(true)} />
                <OutLineButton label="삭제" onClick={open} />
              </>
            )}
          </Group>
        )}
      </Flex>
      <RemoveConfirmModal opened={opened} close={close} removeCategory={removeCategory} />
    </>
  );
};

export default CategoryTitle;
