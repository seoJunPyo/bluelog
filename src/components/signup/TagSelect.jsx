/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import { ActionIcon, Box, Flex, Group, Tooltip } from '@mantine/core';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDisclosure } from '@mantine/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { FillButton, InfoLinkText, LabelText, OutLineButton, CreateTagModal, SelectedTagList, TagList } from '..';
import useTags from '../../hooks/useTags';
import { createTags } from '../../../service/tags';
import { updateInterestedTagList } from '../../../service/users';

const AddButton = ({ onClick }) => (
  <Tooltip label="원하는 태그를 추가하세요!" offset={10}>
    <ActionIcon
      onClick={onClick}
      w="40px"
      h="40px"
      sx={{
        borderRadius: '10px',
      }}>
      <AiOutlinePlus size="32px" />
    </ActionIcon>
  </Tooltip>
);

const Success = () => {
  const tags = useTags();
  const [selectedTags, setSelectedTags] = React.useState([]);
  const [opened, { open, close }] = useDisclosure(false);
  const location = useLocation();
  const navigate = useNavigate();

  const addSelectedTag = tag => {
    if (selectedTags.includes(tag)) return;

    setSelectedTags([...selectedTags, tag]);
  };

  const removeSelectedTag = tag => () => {
    setSelectedTags(selectedTags.filter(_tag => _tag !== tag));
  };

  const handleClickComplete = async () => {
    const { email } = location.state;

    navigate('/');
    await updateInterestedTagList({ email, tags: selectedTags });
    await createTags(selectedTags);
  };

  return (
    <>
      <Box mb="24px">
        <LabelText text="관심있는 주제를 선택해주세요." />
        <Flex align="center" gap="8px">
          <SelectedTagList selectedTags={selectedTags} removeSelectedTag={removeSelectedTag} />
          <AddButton onClick={open} />
        </Flex>
        <TagList tags={tags} addSelectedTag={addSelectedTag} />
      </Box>
      <Flex justify="space-between" align="center">
        <InfoLinkText infoText="최대 10개까지 선택할 수 있습니다." />
        <Group sx={{ alignSelf: 'flex-end' }}>
          <OutLineButton label="건너뛰기" onClick={() => navigate('/')} />
          <FillButton label="가입완료" onClick={handleClickComplete} />
        </Group>
      </Flex>
      <CreateTagModal opened={opened} close={close} addSelectedTag={addSelectedTag} />
    </>
  );
};

export default Success;
