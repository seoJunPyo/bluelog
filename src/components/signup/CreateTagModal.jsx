import { Input, Modal } from '@mantine/core';

const PopupModal = ({ opened, close, addSelectedTag }) => {
  const handleKeyUp = e => {
    if (e.key !== 'Enter') return;

    const name = e.target.value.trim();

    if (!name) return;

    addSelectedTag({ name });
    close();
  };

  return (
    <Modal
      size="xl"
      radius="lg"
      padding="24px"
      yOffset="25vh"
      opened={opened}
      onClose={close}
      title="원하는 태그를 추가하세요!"
      sx={{
        '.mantine-Modal-content': {
          background: 'var(--body-bg-color)',
        },
        '.mantine-Modal-header ': {
          color: 'var(--content-font-color)',
          background: 'var(--body-bg-color)',
        },
      }}>
      <Input
        data-autofocus
        onKeyUp={handleKeyUp}
        sx={{
          input: {
            height: '50px',
            borderRadius: '10px',
            borderColor: 'var(--font-color)',
          },
        }}
      />
    </Modal>
  );
};

export default PopupModal;
