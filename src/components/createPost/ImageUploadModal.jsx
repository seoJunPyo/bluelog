import { Box, Group, Modal, Stack, Text } from '@mantine/core';
import React from 'react';

const ImageUploadModal = ({ opened, progress }) => (
  <Modal
    yOffset="30%"
    padding="xl"
    radius="lg"
    opened={opened}
    withCloseButton={false}
    sx={{
      '.mantine-Modal-content': {
        color: 'var(--content-font-color)',
        background: 'var(--body-bg-color)',
      },
    }}>
    <Stack align="center">
      <Text>이미지 업로드 중...</Text>
      <Group>
        <Box
          bg="white"
          w="300px"
          h="12px"
          sx={{ overflow: 'hidden', borderRadius: '50px', boxShadow: 'var(--inset-box-shadow)' }}>
          <Box bg="green" w={`${progress}%`} h="100%" />
        </Box>
        <Text>{progress}%</Text>
      </Group>
    </Stack>
  </Modal>
);

export default ImageUploadModal;
