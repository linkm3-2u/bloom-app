import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import bloomImage from '../images/bloom.jpg'; // your logo
import { toast } from 'sonner';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem('userName');

  const routes = [
    { name: 'Home', path: '/home' },
    { name: 'Check-in', path: '/check-in' },
    { name: 'Journaling', path: '/journaling' },
    { name: 'Progress', path: '/progress' },
    { name: 'Resources', path: '/resources' },
    { name: 'Settings', path: '/settings' }
  ];

  const handleLogout = () => {
    localStorage.removeItem('userName');
    toast.success("Logged out successfully!");
    navigate('/');
  };

  if (!isLoggedIn) return null;

  return (
    <nav className="relative z-50">
      <div className="group flex items-center justify-between px-6 py-4 bg-white shadow-md transition-all duration-300 relative overflow-visible">
        {/* Left nav links */}
        <div className="flex space-x-4 absolute left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 animate-fade-in transition duration-500 pointer-events-none group-hover:pointer-events-auto">
          {routes.map((route) => {
            const isActive = location.pathname === route.path;
            return (
              <Button
                key={route.path}
                component={Link}
                to={route.path}
                style={{
                  borderRadius: '20px',
                  padding: '8px 16px',
                  backgroundColor: isActive ? 'var(--comfort-blue)' : 'transparent',
                  color: isActive ? '#333' : 'rgba(0, 0, 0, 0.6)',
                  fontWeight: 500,
                  textTransform: 'none'
                }}
              >
                {route.name}
              </Button>
            );
          })}
        </div>

        {/* Center Logo */}
        <div className="mx-auto z-20 relative group/logo">
          <img
            src={bloomImage}
            alt="Bloom Logo"
            className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover/logo:scale-110 animate-float"
          />
        </div>

        {/* Right Logout */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 animate-fade-in transition duration-500 pointer-events-none group-hover:pointer-events-auto">
          <Button
            onClick={handleLogout}
            style={{
              backgroundColor: '#FF4F4F',
              color: '#fff',
              fontWeight: 500,
              borderRadius: '20px',
              padding: '8px 16px',
              textTransform: 'none'
            }}
          >
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
