import React from 'react';
import { handleImageUploadState } from '../../service/storage';

const useImageUpload = () => {
  const [progress, setProgress] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const uploadImage = async imageFile => {
    const imgUrl = await handleImageUploadState({ imageFile, setProgress, setError, setLoading });

    return imgUrl;
  };

  return { uploadImage, progress: Math.floor(progress), loading, error };
};

export default useImageUpload;
