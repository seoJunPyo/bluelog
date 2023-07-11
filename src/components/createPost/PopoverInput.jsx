import React from 'react';
import { Popover, Text } from '@mantine/core';
import LinkInputGroup from './LinkInputGroup';

const PopoverInput = ({ renderButton, setLink }) => (
  <Popover position="bottom-start">
    <Popover.Target>{renderButton()}</Popover.Target>
    <Popover.Dropdown
      p="24px"
      sx={{
        border: 'none',
        borderRadius: '10px',
        background: 'var(--input-bg-color)',
        boxShadow: 'var(--box-shadow)',

        input: {
          padding: 0,
          border: 'none',
          borderRadius: 0,
          borderBottom: '1px solid var(--font-color)',
        },
      }}>
      <Text c="var(--content-font-color)" mb="8px">
        링크로 지정할 텍스트를 입력해주세요.
      </Text>
      <LinkInputGroup setLink={setLink} />
    </Popover.Dropdown>
  </Popover>
);

export default PopoverInput;
