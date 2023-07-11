import React from 'react';
import { Container, Flex, TextInput } from '@mantine/core';
import { useInputState } from '@mantine/hooks';
import { useSelector } from 'react-redux';
import { ButtonFooter, TagInput, TextEditor, CategorySelect } from '../components';
import useTextEditor from '../hooks/useTextEditor';

const PostEditor = ({ post, onClickWrite, onClickCancel }) => {
  const [title, setTitle] = useInputState(post?.title ?? '');
  const [selectedCategory, selectCategory] = React.useState(post?.category ?? '');
  const [tagList, setTagList] = React.useState(post?.tagList ?? []);
  const images = useSelector(state => (post ? [post.thumbnail, ...state.images.list] : state.images.list));

  const editor = useTextEditor({ content: post?.content ?? '', placeholder: '내용을 입력해주세요.' });

  return (
    <>
      <Container mb="70px" mt="24px" size="xl">
        <CategorySelect selectedCategory={selectedCategory} selectCategory={selectCategory} />
        <TextInput
          value={title}
          onChange={setTitle}
          placeholder="제목을 입력해주세요."
          sx={{
            input: {
              border: 'none',
              height: '75px',
              fontSize: '32px',
              fontWeight: '700',
              backgroundColor: 'var(--body-bg-color) !important',
            },
          }}
        />
        <Flex w="100%" mb="lg">
          <TagInput tagList={tagList} setTagList={setTagList} />
        </Flex>
        <TextEditor editor={editor} />
      </Container>
      <ButtonFooter
        onClickCancel={onClickCancel}
        onClickWrite={() =>
          onClickWrite({
            title,
            category: selectedCategory,
            tagList,
            content: editor?.getHTML(),
            thumbnail: images[0] ?? null,
          })
        }
      />
    </>
  );
};

export default PostEditor;
