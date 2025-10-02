import React from 'react';
import BlogCard from './BlogCard';
import '../styles/BlogList.css';

const BlogList = ({ posts, onPostSelect }) => {
  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <div className="blog-list">
      <div className="container">
        {featuredPost && (
          <section className="featured-section">
            <h2 className="section-title">Featured Post</h2>
            <BlogCard 
              post={featuredPost} 
              onSelect={onPostSelect} 
              isFeatured={true}
            />
          </section>
        )}
        
        <section className="posts-section">
          <h2 className="section-title">Recent Posts</h2>
          <div className="posts-grid">
            {regularPosts.map(post => (
              <BlogCard 
                key={post.id} 
                post={post} 
                onSelect={onPostSelect}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogList;