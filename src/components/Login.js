import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import '../styles/Auth.css';

const Login = ({ onSwitchToSignup, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      await login(formData.email, formData.password);
      onClose();
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Sign in to share your thoughts and poems</p>
        </div>

        {errors.general && (
          <div className="error-message">
            {errors.general}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'error' : ''}
              placeholder="Enter your password"
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          <button type="submit" className="auth-button" disabled={isLoading}>
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="demo-info">
          <p><strong>Demo Accounts - Choose Any:</strong></p>
          <div className="demo-accounts-grid">
            <div className="demo-account">
              <strong>🌟 Poets:</strong>
              <p>📧 poet@example.com | 🔑 password123</p>
              <p>📧 luna@poetry.com | 🔑 moonlight</p>
              <p>📧 nova@midnight.com | 🔑 starlight</p>
            </div>
            <div className="demo-account">
              <strong>💭 Thinkers:</strong>
              <p>📧 sage@thoughts.com | 🔑 wisdom123</p>
              <p>📧 maya@reflections.com | 🔑 silence</p>
              <p>📧 autumn@nature.com | 🔑 seasons</p>
            </div>
            <div className="demo-account">
              <strong>📖 Storytellers:</strong>
              <p>📧 writer@example.com | 🔑 password123</p>
              <p>📧 river@stories.com | 🔑 flowing</p>
            </div>
            <div className="demo-account">
              <strong>🚀 Quick Access:</strong>
              <p>📧 guest@demo.com | 🔑 guest</p>
              <p>📧 admin@poetry.com | 🔑 admin123</p>
            </div>
          </div>
        </div>

        <div className="auth-switch">
          <p>Don't have an account? 
            <button type="button" className="link-button" onClick={onSwitchToSignup}>
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;