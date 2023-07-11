import { Group, Modal, Stack, Text, Title } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FillButton, OutLineButton } from '../common';

const RemoveConfirmModal = ({ opened, close, removeCategory }) => {
  const navigate = useNavigate();

  return (
    <Modal
      size="lg"
      yOffset="20%"
      opened={opened}
      onClose={close}
      withCloseButton={false}
      radius="10px"
      sx={{ '.mantine-Modal-content': { background: 'var(--body-bg-color)' } }}>
      <Stack p="lg" spacing="sm">
        <Title c="var(--font-color)" fz="28px">
          해당 카테고리를 정말 삭제하시겠습니까?
        </Title>
        <Text c="var(--content-font-color)">카테고리 삭제 시, 카테고리에 해당하는 게시물도 삭제됩니다.</Text>
        <Group m="0 0 0 auto">
          <FillButton label="취소" onClick={close} />
          <OutLineButton
            label="삭제"
            onClick={() => {
              removeCategory();
              close();
              navigate('/my');
            }}
          />
        </Group>
      </Stack>
    </Modal>
  );
};

export default RemoveConfirmModal;
