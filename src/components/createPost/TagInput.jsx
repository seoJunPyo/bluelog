import { Flex, TextInput } from '@mantine/core';
import React from 'react';
import { Badge } from '..';

const TagInput = ({ tagList, setTagList }) => {
  const handleKeyUp = e => {
    if (e.key !== 'Enter' && e.key !== ',') return;

    const tag = e.target.value.replace(/[\s,]+/, '');

    if (!tag || tagList.includes(tag)) {
      e.target.value = '';
      return;
    }

    setTagList([...tagList, tag]);
    e.target.value = '';
  };

  return (
    <Flex align="center" gap="8px" wrap="wrap">
      {tagList.map(tag => (
        <Badge
          key={tag}
          text={tag}
          onClose={() => setTagList(tagList.filter(_tag => _tag !== tag))}
          withoutAnimation
          withCloseBtn
        />
      ))}

      <TextInput
        onKeyUp={handleKeyUp}
        placeholder="태그를 추가해주세요."
        sx={{
          input: {
            border: 'none',
            fontSize: '16px',
            backgroundColor: 'var(--body-bg-color) !important',
          },
        }}
      />
    </Flex>
  );
};

export default TagInput;
