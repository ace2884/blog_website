import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import '../styles/CreatePost.css';

const CreatePost = ({ onClose, onPostCreated }) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    type: 'poem', // poem, thought, story
    tags: '',
    isPublic: true
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
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
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.content.trim()) {
      newErrors.content = 'Content is required';
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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newPost = {
        id: Date.now(),
        title: formData.title.trim(),
        content: formData.content.trim(),
        type: formData.type,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        author: {
          name: user.name,
          avatar: user.avatar
        },
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        likes: 0,
        comments: 0,
        isPublic: formData.isPublic,
        readingTime: Math.ceil(formData.content.split(' ').length / 200)
      };
      
      onPostCreated(newPost);
      onClose();
    } catch (error) {
      setErrors({ general: 'Failed to create post. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const postTypes = [
    { value: 'poem', label: '📝 Poem', icon: '🌸' },
    { value: 'thought', label: '💭 Thought', icon: '💡' },
    { value: 'story', label: '📖 Story', icon: '✨' }
  ];

  return (
    <div className="create-post-container">
      <div className="create-post-header">
        <h2>Share Your {formData.type === 'poem' ? 'Poetry' : formData.type === 'thought' ? 'Thoughts' : 'Story'}</h2>
        <p>Express yourself and connect with others</p>
      </div>

      {errors.general && (
        <div className="error-message">
          {errors.general}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>What would you like to share?</label>
          <div className="post-type-selector">
            {postTypes.map(type => (
              <label key={type.value} className={`post-type-option ${formData.type === type.value ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="type"
                  value={type.value}
                  checked={formData.type === type.value}
                  onChange={handleChange}
                />
                <span className="post-type-icon">{type.icon}</span>
                <span>{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="title">
            Title {formData.type === 'poem' && <span className="optional">(optional for poems)</span>}
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={errors.title ? 'error' : ''}
            placeholder={`Give your ${formData.type} a title...`}
          />
          {errors.title && <span className="error-text">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="content">
            Your {formData.type === 'poem' ? 'Poem' : formData.type === 'thought' ? 'Thoughts' : 'Story'}
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className={`content-textarea ${errors.content ? 'error' : ''}`}
            placeholder={
              formData.type === 'poem' 
                ? "Pour your heart into verse...\n\nRoses are red,\nViolets are blue,\nYour poetry matters,\nAnd so do you." 
                : formData.type === 'thought'
                ? "Share what's on your mind...\n\nSometimes the smallest thoughts can have the biggest impact on our lives."
                : "Tell your story...\n\nOnce upon a time, in a world not so different from ours..."
            }
            rows={formData.type === 'poem' ? 12 : 8}
          />
          {errors.content && <span className="error-text">{errors.content}</span>}
          <div className="character-count">
            {formData.content.length} characters
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="tags">
            Tags <span className="optional">(comma-separated)</span>
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="love, nature, inspiration, life..."
          />
          <small className="form-help">Help others find your work with relevant tags</small>
        </div>

        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="isPublic"
              checked={formData.isPublic}
              onChange={handleChange}
            />
            <span className="checkmark"></span>
            Make this post public
            <small>Public posts can be seen by all visitors</small>
          </label>
        </div>

        <div className="form-actions">
          <button type="button" className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? 'Publishing...' : `Publish ${formData.type === 'poem' ? 'Poem' : formData.type === 'thought' ? 'Thought' : 'Story'}`}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;