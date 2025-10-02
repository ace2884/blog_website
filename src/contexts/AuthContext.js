import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (from localStorage)
    const savedUser = localStorage.getItem('poetryUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Demo users for testing
        const demoUsers = [
          { id: 1, email: 'poet@example.com', password: 'password123', name: 'Maya Angelou', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face', bio: 'Phenomenal woman and poet laureate' },
          { id: 2, email: 'writer@example.com', password: 'password123', name: 'Rumi Soul', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face', bio: 'Sufi mystic and spiritual writer' },
          { id: 3, email: 'luna@poetry.com', password: 'moonlight', name: 'Luna Starwell', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face', bio: 'Night sky dreamer and verse weaver' },
          { id: 4, email: 'sage@thoughts.com', password: 'wisdom123', name: 'Sage Moonwright', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face', bio: 'Philosopher and mindfulness advocate' },
          { id: 5, email: 'river@stories.com', password: 'flowing', name: 'River Davidson', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face', bio: 'Storyteller of human connections' },
          { id: 6, email: 'nova@midnight.com', password: 'starlight', name: 'Nova Midnight', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face', bio: '3 AM philosopher and cosmic thinker' },
          { id: 7, email: 'autumn@nature.com', password: 'seasons', name: 'Autumn Rivers', avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face', bio: 'Nature lover and seasonal soul' },
          { id: 8, email: 'maya@reflections.com', password: 'silence', name: 'Maya Chen', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face', bio: 'Explorer of unspoken words' },
          { id: 9, email: 'admin@poetry.com', password: 'admin123', name: 'Poetry Admin', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face', bio: 'Platform administrator' },
          { id: 10, email: 'guest@demo.com', password: 'guest', name: 'Guest User', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face', bio: 'Welcome to our poetry community!' }
        ];
        
        const foundUser = demoUsers.find(u => u.email === email && u.password === password);
        
        if (foundUser) {
          const userData = { ...foundUser };
          delete userData.password; // Don't store password
          setUser(userData);
          localStorage.setItem('poetryUser', JSON.stringify(userData));
          resolve(userData);
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 1000);
    });
  };

  const signup = async (name, email, password) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Check if email already exists (simple demo check)
        if (email === 'poet@example.com' || email === 'writer@example.com') {
          reject(new Error('Email already exists'));
          return;
        }

        const newUser = {
          id: Date.now(),
          email,
          name,
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
        };
        
        setUser(newUser);
        localStorage.setItem('poetryUser', JSON.stringify(newUser));
        resolve(newUser);
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('poetryUser');
  };

  const value = {
    user,
    login,
    signup,
    logout,
    isLoading,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};