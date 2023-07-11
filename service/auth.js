import {
  EmailAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  reauthenticateWithCredential,
} from 'firebase/auth';
import { createUser } from './users';
import { auth } from './app';

const signUp = async ({ email, password, nickName }) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);

  await updateProfile(userCredential.user, { displayName: nickName, providerData: { name: nickName } });

  await createUser({ email });

  return userCredential.user.id;
};

const logIn = async ({ email, password }) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);

  return userCredential.user.providerData[0];
};

const signOut = async () => {
  await firebaseSignOut(auth);
};

const getCurrentUser = () => auth.currentUser;

const observeAuthStateChange = (onExistUser, onNoUser) => onAuthStateChanged(auth, onExistUser, onNoUser);

const reAuth = async password => {
  if (!auth.currentUser) return;

  await reauthenticateWithCredential(auth.currentUser, EmailAuthProvider.credential(auth.currentUser.email, password));
};

export { signUp, logIn, signOut, getCurrentUser, observeAuthStateChange, reAuth };
