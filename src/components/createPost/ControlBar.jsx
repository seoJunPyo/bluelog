import React from 'react';
import { Flex, Text } from '@mantine/core';
import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineStrikethrough,
  AiOutlineUnderline,
  AiOutlineAlignLeft,
  AiOutlineAlignCenter,
  AiOutlineAlignRight,
} from 'react-icons/ai';
import { BiLink, BiUnlink, BiImage } from 'react-icons/bi';
import { RiHeading } from 'react-icons/ri';
import { ControlButton, PopoverInput, ImageUploadButton } from '.';
import VerticalDivider from '../common/VerticalDivider';

const HeadingIcon = ({ order }) => (
  <>
    <RiHeading size="20px" />
    <Text
      fz="12px"
      sx={{
        transform: 'translateY(12%)',
      }}>
      {order}
    </Text>
  </>
);

const AlignmentIcon = ({ alignment }) =>
  alignment === 'left' ? (
    <AiOutlineAlignLeft />
  ) : alignment === 'center' ? (
    <AiOutlineAlignCenter />
  ) : (
    <AiOutlineAlignRight />
  );

const ButtonGroup = ({ children }) => (
  <Flex justify="flex-start" align="center" gap="4px">
    {children}
  </Flex>
);

const ControlBar = ({ editor }) => (
  <Flex justify="flex-start" align="center" gap="4px">
    <ButtonGroup>
      <ControlButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        isActive={editor.isActive('bold')}
        icon={<AiOutlineBold />}
      />
      <ControlButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        isActive={editor.isActive('italic')}
        icon={<AiOutlineItalic />}
      />
      <ControlButton
        onClick={() => editor.chain().focus().toggleStrike().run()}
        isActive={editor.isActive('strike')}
        icon={<AiOutlineStrikethrough />}
      />
      <ControlButton
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        isActive={editor.isActive('underline')}
        icon={<AiOutlineUnderline />}
      />
    </ButtonGroup>

    <VerticalDivider />

    <ButtonGroup>
      {['left', 'center', 'right'].map(alignment => (
        <ControlButton
          key={alignment}
          onClick={() => editor.chain().focus().setTextAlign(alignment).run()}
          isActive={editor.isActive({ textAlign: alignment })}
          icon={<AlignmentIcon alignment={alignment} />}
        />
      ))}
    </ButtonGroup>

    <VerticalDivider />

    <ButtonGroup>
      {Array.from({ length: 4 }, (_, idx) => (
        <ControlButton
          key={idx + 1}
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleHeading({ level: idx + 1 })
              .run()
          }
          isActive={editor.isActive('heading', { level: idx + 1 })}
          icon={<HeadingIcon order={idx + 1} />}
        />
      ))}
    </ButtonGroup>

    <VerticalDivider />

    <ButtonGroup>
      <PopoverInput setLink={editor.commands.setLink} renderButton={() => <ControlButton icon={<BiLink />} />} />
      <ControlButton onClick={() => editor.chain().focus().unsetLink().run()} icon={<BiUnlink />} />
      <ImageUploadButton
        setImage={editor.commands.setImage}
        renderButton={props => <ControlButton {...props} icon={<BiImage />} />}
      />
    </ButtonGroup>
  </Flex>
);

export default ControlBar;
