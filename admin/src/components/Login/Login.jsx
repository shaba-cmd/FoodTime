import { useState } from 'react';
import { login } from '../../utils/api';
import { LoginContainer, Box, FormGroup, Error } from './Login.styled';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleClick = async () => {
  setError('');

  if (!formData.username.trim() || !formData.password.trim()) {
    setError('Fill in all fields');
    return;
  }

  try {
    const data = await login(formData.username, formData.password);
    
    if (!data || !data.user) {
      setError('Invalid server response');
      return;
    }
    
    if (data.user.role !== 'admin') {
      setError('Access denied. Admin only.');
      return;
    }
    
    localStorage.setItem('adminToken', data.token);
    localStorage.setItem('adminUser', JSON.stringify(data.user));
    onLogin(data.user);
  } catch (err) {
    setError(err.message);
  }
};

  return (
    <LoginContainer>
      <Box>
        <h2>FoodTime Admin</h2>
        <div>
          <FormGroup>
            <label>Username</label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <label>Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </FormGroup>
          {error && <Error>{error}</Error>}
          <button onClick={handleClick}>Sign In</button>
        </div>
      </Box>
    </LoginContainer>
  );
};

export default Login;