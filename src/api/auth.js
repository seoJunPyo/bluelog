import axios from 'axios';

const checkEmail = email => axios.post('/api/checkemail', { email });

const logIn = ({ email, password }) => axios.post('/api/login', { email, password });

export { checkEmail, logIn };
