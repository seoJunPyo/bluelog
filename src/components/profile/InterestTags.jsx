import { Flex, Text, TextInput } from '@mantine/core';
import React from 'react';
import { useController } from 'react-hook-form';
import { Badge, FillButton } from '..';

const InterestedTags = ({ edit, control }) => {
  const inputRef = React.useRef(null);
  const {
    field: { value: tagList, onChange },
  } = useController({ name: 'interestedTags', control });

  const addTag = () => {
    onChange([...tagList, inputRef.current.value]);
    inputRef.current.value = '';
  };

  const removeTag = tag => () => {
    onChange(tagList.filter(_tag => _tag !== tag));
  };

  return (
    <>
      {edit && (
        <Flex py="12px" gap="12px">
          <TextInput
            w="100%"
            ref={inputRef}
            sx={{ borderBottom: '1px solid var(--hover-bg-color)' }}
            onKeyUp={e => {
              if (e.key !== 'Enter') return;

              addTag();
            }}
          />
          <FillButton label="추가" onClick={addTag} />
        </Flex>
      )}

      <Flex my="8px" gap="8px">
        {tagList.length !== 0 ? (
          tagList.map(tag => (
            <Badge key={tag} text={tag} onClose={removeTag(tag)} withCloseBtn={edit} withoutAnimation withoutPointer />
          ))
        ) : (
          <Text opacity="0.3">관심있는 태그가 없습니다.</Text>
        )}
      </Flex>
    </>
  );
};

export default InterestedTags;
