import { useDispatch } from 'react-redux';
import { addToast, removeToast } from '../slices/toastSlice';

const useToast = () => {
  const dispatch = useDispatch();

  const create = toastInfo => {
    dispatch(addToast({ toastInfo }));
  };

  const remove = id => {
    dispatch(removeToast(id));
  };

  const success = toastInfo => {
    create({ type: 'success', ...toastInfo });
  };

  const error = toastInfo => {
    create({ type: 'error', ...toastInfo });
  };

  return { remove, success, error };
};

export default useToast;
