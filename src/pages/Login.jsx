import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Button, Grid, TextField } from '@mui/material';
import bloomImage from '../images/bloom.jpg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const validateInputs = () => {
    let isValid = true;

    if (!username) {
      setUsernameError('Username is required');
      isValid = false;
    } else {
      setUsernameError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleLogin = () => {
    if (!validateInputs()) return;
    localStorage.setItem('userName', username);
    toast.success(`Welcome back, ${username}!`);
    navigate('/home');
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 via-white to-blue-100 px-4 overflow-hidden">
      <div className="bg-white shadow-2xl p-8 rounded-2xl max-w-md w-full text-center transform transition-all duration-700 animate-slide-fade">
        
        {/* Logo and Title */}
        <div className="mb-6 animate-float">
          <img
            src={bloomImage}
            alt="Bloom Logo"
            className="w-20 h-20 mx-auto rounded-full shadow-md mb-2 transition-transform hover:scale-110"
          />
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome Back to <span className="text-blue-600">Bloom</span>
          </h2>
          <p className="text-gray-500 text-sm mt-1">Let’s check in and take care of you 🌿</p>
        </div>

        {/* Grid for Input Fields */}
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={!!usernameError}
              helperText={usernameError}
              sx={{
                '& .MuiOutlinedInput-root': {
                  height: 56, // Set a fixed height to prevent resizing
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!passwordError}
              helperText={passwordError}
              sx={{
                '& .MuiOutlinedInput-root': {
                  height: 56, // Set a fixed height to prevent resizing
                },
              }}
            />
          </Grid>
        </Grid>

        {/* Separate Grid for Buttons */}
        <Grid container spacing={2} justifyContent="center" className="mt-4">
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              disableElevation
              className="hover:scale-[1.02] transition-transform duration-300 text-white"
              style={{ borderRadius: 20, padding: '10px 0' }}
              onClick={handleLogin}
            >
              Log In
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="outlined"
              fullWidth
              disableElevation
              className="hover:scale-[1.02] transition-transform duration-300 border-blue-600 text-blue-700 hover:bg-blue-50"
              style={{ borderRadius: 20, padding: '10px 0', borderWidth: 2 }}
              onClick={handleBack}
            >
              Go Back
            </Button>
          </Grid>
        </Grid>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          @keyframes slideFadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-fade {
            animation: slideFadeIn 1s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Login;
