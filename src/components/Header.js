import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import Modal from './Modal';
import Login from './Login';
import Signup from './Signup';
import '../styles/Header.css';

const Header = ({ onBackToList, showBackButton, onCreatePost }) => {
  const { user, logout } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'

  const handleAuthClick = (mode) => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  const handleCloseModal = () => {
    setShowAuthModal(false);
  };

  const handleSwitchAuth = () => {
    setAuthMode(authMode === 'login' ? 'signup' : 'login');
  };

  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            {showBackButton && (
              <button className="back-button" onClick={onBackToList}>
                ← Back to Posts
              </button>
            )}
          </div>
          
          <div className="header-center">
            <h1 className="blog-title" onClick={onBackToList}>
              ✨ Poetry & Thoughts ✨
            </h1>
            <p className="blog-subtitle">Where words become art and thoughts take flight</p>
          </div>
          
          <div className="header-right">
            {user ? (
              <div className="user-menu">
                <button className="create-button" onClick={onCreatePost}>
                  ✍️ Create
                </button>
                <div className="user-profile">
                  <img src={user.avatar} alt={user.name} className="user-avatar" />
                  <span className="user-name">{user.name}</span>
                  <button className="logout-button" onClick={logout}>
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <nav className="nav">
                <button 
                  className="auth-link" 
                  onClick={() => handleAuthClick('login')}
                >
                  Sign In
                </button>
                <button 
                  className="auth-button" 
                  onClick={() => handleAuthClick('signup')}
                >
                  Join Us
                </button>
              </nav>
            )}
          </div>
        </div>
      </header>

      <Modal isOpen={showAuthModal} onClose={handleCloseModal}>
        {authMode === 'login' ? (
          <Login 
            onSwitchToSignup={handleSwitchAuth}
            onClose={handleCloseModal}
          />
        ) : (
          <Signup 
            onSwitchToLogin={handleSwitchAuth}
            onClose={handleCloseModal}
          />
        )}
      </Modal>
    </>
  );
};

export default Header;