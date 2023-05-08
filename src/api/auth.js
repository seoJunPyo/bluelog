import axios from 'axios';

const checkEmail = email => axios.post('/api/checkemail', { email });

const checkDuplicatedEmail = email => axios.post('/api/duplicatedcheckemail', { email });

const checkDuplicatedNickName = nickName => axios.post('/api/duplicatedchecknickname', { nickName });

const logIn = ({ email, password }) => axios.post('/api/login', { email, password });

const signUp = userInfo => axios.post('/api/signup', { userInfo });

const logOut = () => axios.get('/api/logout');

export { checkEmail, checkDuplicatedEmail, checkDuplicatedNickName, logIn, signUp, logOut };
