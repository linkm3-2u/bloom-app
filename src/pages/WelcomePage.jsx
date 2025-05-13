import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import bloomImage from '../images/bloom.jpg'; // Ensure path is correct

const WelcomePage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-gradient-to-b from-blue-50 via-white to-blue-100">
    
    {/* Logo */}
    <div className="mb-6 animate-float">
      <img
        src={bloomImage}
        alt="Bloom Logo"
        className="w-28 h-28 rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* Brand Name */}
    <h1 className="text-4xl font-extrabold text-gray-800 mb-2 tracking-tight">
      Welcome to <span className="text-blue-600">Bloom</span>
    </h1>

    {/* Motto */}
    <p className="text-blue-700 font-medium italic text-lg mb-4">
      "Grow through what you go through."
    </p>

    {/* Message */}
    <p className="text-gray-600 max-w-xl mb-8 text-lg">
      At Bloom, we help you understand your emotions, track your mental health journey, and nurture self-growth — one day at a time.
    </p>

    {/* Buttons */}
    <div className="flex gap-6">
      <Link to="/login">
        <Button variant="contained" color="primary" size="large" style={{ borderRadius: 20, padding: '8px 24px' }}>
          Login
        </Button>
      </Link>
      <Link to="/signup">
        <Button variant="contained" color="secondary" size="large" style={{ borderRadius: 20, padding: '8px 24px' }}>
          Sign Up
        </Button>
      </Link>
    </div>

    {/* Footer Tagline */}
    <div className="mt-12 text-sm text-gray-400">
      Empowering mindful living, one moment at a time 🌿
    </div>
  </div>
);

export default WelcomePage;
