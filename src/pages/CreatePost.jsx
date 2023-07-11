import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useToast from '../hooks/useToast';
import { createPost } from '../../service/post';
import PostEditor from './PostEditor';
import { emptyImages } from '../slices/postImageSlice';

const CreatePost = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickWrite = async postInfo => {
    if (postInfo.title.trim() === '') {
      toast.error({ title: '제목을 입력해주세요.' });
      return;
    }

    const postId = await createPost(postInfo);

    dispatch(emptyImages());
    navigate(`/post/${postId}`);
  };

  return <PostEditor onClickWrite={handleClickWrite} onClickCancel={() => navigate('/')} />;
};

export default CreatePost;
