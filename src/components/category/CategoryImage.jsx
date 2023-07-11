import { Box, Group, keyframes, FileButton } from '@mantine/core';
import React from 'react';
import { FillButton, Img, OutLineButton } from '..';
import useImageUpload from '../../hooks/useImageUpload';

const opacity = keyframes`
  from {
    opacity : 0
  }

  to {
    opacity : 1
  }
`;

const CategoryImage = ({ isMy, thumbnail, updateImage }) => {
  const [visible, setVisible] = React.useState(false);
  const { uploadImage } = useImageUpload();

  const handleChange = async imageFile => {
    const imageUrl = await uploadImage(imageFile);

    await updateImage(imageUrl);
  };

  return (
    <Box
      pos="relative"
      h="300px"
      sx={{ img: { width: '100%', height: '100%', objectFit: 'cover' } }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}>
      <Img src={thumbnail} />
      {isMy && visible && (
        <Group
          pos="absolute"
          bottom="5%"
          right="1%"
          sx={{
            animation: `${opacity} 0.3s`,
          }}>
          <OutLineButton label="이미지 삭제" onClick={() => updateImage(null)} />
          <FileButton onChange={handleChange}>{props => <FillButton {...props} label="이미지 변경" />}</FileButton>
        </Group>
      )}
    </Box>
  );
};

export default CategoryImage;
