import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { FooterLayout, FillButton, OutLineButton } from '../common';

const ButtonFooter = ({ onClickWrite, onClickCancel }) => (
  <FooterLayout>
    <OutLineButton label="작성 취소" leftIcon={<IoIosArrowBack />} onClick={onClickCancel} />
    <FillButton label="작성하기" onClick={onClickWrite} />
  </FooterLayout>
);

export default ButtonFooter;
