import React from 'react';
import '../styles/BlogCard.css';

const BlogCard = ({ post, onSelect, isFeatured = false }) => {
  const handleClick = () => {
    onSelect(post);
  };

  return (
    <article className={`blog-card ${isFeatured ? 'featured' : ''}`} onClick={handleClick}>
      <div className="blog-card-image">
        <img src={post.image} alt={post.title} />
        <div className="blog-card-category">{post.category}</div>
      </div>
      
      <div className="blog-card-content">
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        
        <div className="blog-card-meta">
          <div className="author-info">
            <img src={post.author.avatar} alt={post.author.name} className="author-avatar" />
            <span className="author-name">{post.author.name}</span>
          </div>
          <div className="post-date">{post.date}</div>
        </div>
        
        <div className="blog-card-tags">
          {post.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogCard;