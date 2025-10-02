import React, { useState, useEffect } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';
import Modal from './components/Modal';
import CreatePost from './components/CreatePost';
import { poetryPosts } from './data/poetryData';
import './styles/App.css';

const AppContent = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const [showCreatePost, setShowCreatePost] = useState(false);

  useEffect(() => {
    // Load poetry posts
    setPosts(poetryPosts);
  }, []);

  const handlePostSelect = (post) => {
    setSelectedPost(post);
  };

  const handleBackToList = () => {
    setSelectedPost(null);
  };

  const handleCreatePost = () => {
    setShowCreatePost(true);
  };

  const handleCloseCreatePost = () => {
    setShowCreatePost(false);
  };

  const handlePostCreated = (newPost) => {
    setPosts(prev => [newPost, ...prev]);
  };

  return (
    <div className="app">
      <Header 
        onBackToList={handleBackToList} 
        showBackButton={!!selectedPost}
        onCreatePost={handleCreatePost}
      />
      
      <main className="main-content">
        {selectedPost ? (
          <BlogPost post={selectedPost} onBack={handleBackToList} />
        ) : (
          <BlogList posts={posts} onPostSelect={handlePostSelect} />
        )}
      </main>
      
      <Footer />

      <Modal isOpen={showCreatePost} onClose={handleCloseCreatePost}>
        <CreatePost 
          onClose={handleCloseCreatePost}
          onPostCreated={handlePostCreated}
        />
      </Modal>
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;