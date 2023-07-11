import React from 'react';
import { FileButton } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { addImage } from '../../slices/postImageSlice';
import useImageUpload from '../../hooks/useImageUpload';
import { ImageUploadModal } from '.';

const ImageUploadButton = ({ setImage, renderButton }) => {
  const ref = React.useRef();
  const dispatch = useDispatch();
  const { uploadImage, loading, progress } = useImageUpload();

  return (
    <>
      <FileButton
        resetRef={ref}
        onChange={async file => {
          const imageUrl = await uploadImage(file, setImage);

          setImage({ src: imageUrl, alt: file.name });
          dispatch(addImage(imageUrl));
          ref.current?.();
        }}>
        {props => renderButton(props)}
      </FileButton>
      <ImageUploadModal opened={loading} progress={progress} />
    </>
  );
};

export default ImageUploadButton;
