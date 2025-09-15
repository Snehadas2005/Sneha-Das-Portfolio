import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const Blog = () => {
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  const categories = [
    { id: 'all', label: 'All Posts', count: blogPosts.length },
    { id: 'photography', label: 'Photography', count: blogPosts.filter(p => p.type === 'photography').length },
    { id: 'sketch', label: 'Sketches', count: blogPosts.filter(p => p.type === 'sketch').length },
    { id: 'writing', label: 'Writing', count: blogPosts.filter(p => p.type === 'writing').length }
  ];

  const filteredPosts = filter === 'all' ? blogPosts : blogPosts.filter(post => post.type === filter);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'photography': return '📷';
      case 'sketch': return '✏️';
      case 'writing': return '✍️';
      default: return '📝';
    }
  };

  const handlePostClick = (postId) => {
    navigate(`/blog/${postId}`);
  };

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.button
            onClick={goHome}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-black hover:text-gray-600 font-mirage"
          >
            <span>←</span>
            <span>HOME</span>
          </motion.button>
          
          <h1 className="text-2xl font-brogetta text-black">CREATIVE JOURNAL</h1>
          
          <div className="w-16"></div> {/* Spacer for center alignment */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl lg:text-8xl font-brogetta text-black mb-8">
            CREATIVE
            <br />
            JOURNAL
          </h1>
          
          <p className="text-xl font-mirage text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of my thoughts, sketches, and photographs. 
            This is where I share the creative process behind my work 
            and explore ideas that inspire me.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 font-mirage transition-all duration-300 ${
                filter === category.id
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Posts Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onClick={() => handlePostClick(post.id)}
              whileHover={{ scale: 1.05, y: -10 }}
              className="cursor-pointer group"
            >
              {/* Post Image */}
              <div className="aspect-[4/3] bg-gray-100 mb-6 relative overflow-hidden">
                {post.image ? (
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <span className="text-4xl">{getTypeIcon(post.type)}</span>
                  </div>
                )}
                
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 bg-white/90 text-gray-700 text-xs font-mirage uppercase tracking-wider">
                    {post.type}
                  </span>
                </div>
              </div>

              {/* Post Info */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm font-mirage text-gray-500">
                  <span>{formatDate(post.date)}</span>
                  <span>{post.tags.length} tags</span>
                </div>
                
                <h2 className="text-xl lg:text-2xl font-brogetta text-black group-hover:text-gray-700 transition-colors">
                  {post.title}
                </h2>
                
                <p className="font-mirage text-gray-600 leading-relaxed line-clamp-3">
                  {post.description}
                </p>
                
                <div className="flex items-center space-x-2 text-sm font-mirage text-black group-hover:text-gray-600 transition-colors">
                  <span>Read more</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <p className="text-xl font-mirage text-gray-500">
              No posts found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Blog;