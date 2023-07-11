import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { storage } from './app';

const uploadImage = async imageFile => {
  const imagesRef = ref(storage, `images/${imageFile.name}`);

  const snapshot = await uploadBytes(imagesRef, imageFile);

  return getDownloadURL(snapshot.ref);
};

const handleImageUploadState = async ({ imageFile, setProgress, setLoading, setError }) => {
  setLoading(true);

  const imagesRef = ref(storage, `images/${imageFile.name}`);

  const uploadTask = uploadBytesResumable(imagesRef, imageFile);

  uploadTask.on(
    'state_changed',
    snapshot => {
      setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    },
    error => setError(error),
    () => {
      setLoading(false);
    }
  );

  const imgUrl = await getDownloadURL(uploadTask.snapshot.ref);

  return imgUrl;
};

export { uploadImage, handleImageUploadState };
