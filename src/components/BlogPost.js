import React from 'react';
import '../styles/BlogPost.css';

const BlogPost = ({ post, onBack }) => {
  return (
    <article className="blog-post">
      <div className="container">
        <button className="back-button-mobile" onClick={onBack}>
          ← Back to Posts
        </button>
        
        <header className="post-header">
          <div className="post-category">{post.category}</div>
          <h1 className="post-title">{post.title}</h1>
          <p className="post-excerpt">{post.excerpt}</p>
          
          <div className="post-meta">
            <div className="author-info">
              <img src={post.author.avatar} alt={post.author.name} className="author-avatar" />
              <div className="author-details">
                <span className="author-name">{post.author.name}</span>
                <span className="post-date">{post.date}</span>
              </div>
            </div>
            <div className="reading-time">{post.readingTime} min read</div>
          </div>
        </header>
        
        <div className="post-image">
          <img src={post.image} alt={post.title} />
        </div>
        
        <div className="post-content">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        
        <footer className="post-footer">
          <div className="post-tags">
            <h4>Tags:</h4>
            <div className="tags-list">
              {post.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
          
          <div className="post-actions">
            <button className="action-button">
              ❤️ Like ({post.likes})
            </button>
            <button className="action-button">
              💬 Comments ({post.comments})
            </button>
            <button className="action-button">
              📤 Share
            </button>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default BlogPost;