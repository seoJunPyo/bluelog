import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useToast from '../hooks/useToast';
import { emptyImages } from '../slices/postImageSlice';
import PostEditor from './PostEditor';
import { useEditPostMutation, useGetPostQuery } from '../services/postApi';
import useUser from '../hooks/useUser';

const EditPost = () => {
  const { postId } = useParams();
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useGetPostQuery({ postId });
  const [editPost] = useEditPostMutation();
  const { user } = useUser();

  const handleClickWrite = async postInfo => {
    if (postInfo.title.trim() === '') {
      toast.error({ title: '제목을 입력해주세요.' });
      return;
    }

    await editPost({ email: user.email, postId, postInfo });

    dispatch(emptyImages());
    navigate(`/post/${postId}`);
  };

  return (
    <>
      {data && (
        <PostEditor post={data} onClickWrite={handleClickWrite} onClickCancel={() => navigate(`/post/${postId}`)} />
      )}
    </>
  );
};

export default EditPost;
