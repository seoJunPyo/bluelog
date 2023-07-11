import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const LikeIcon = ({ checked }) => <>{checked ? <AiFillHeart /> : <AiOutlineHeart />}</>;

export default LikeIcon;
