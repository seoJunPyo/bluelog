import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserReducer, signOutReducer } from '../slices/userSlice';
import { logIn, observeAuthStateChange, signOut, signUp } from '../../service/auth';
import { getUser } from '../../service/users';

const useUser = () => {
  const [isLoading, setLoading] = React.useState(true);
  const user = useSelector(state => state.user.current);
  const dispatch = useDispatch();

  const initUser = () => {
    const unObserve = observeAuthStateChange(async user => {
      if (user) {
        await getUser({ email: user.email });

        dispatch(updateUserReducer({ userInfo: user.providerData[0] }));
        setLoading(false);
      }
    });

    return unObserve;
  };

  const userSignUp = async ({ email, password, nickName }) => {
    await signUp({ email, password, nickName });
  };

  const userLogIn = async ({ email, password }) => {
    await logIn({ email, password });
  };

  const userSignOut = async () => {
    await signOut();

    dispatch(signOutReducer());
  };

  return { user, isLoading, initUser, userLogIn, userSignOut, userSignUp };
};

export default useUser;
