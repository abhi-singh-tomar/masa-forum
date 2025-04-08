import React, { useState } from 'react';
import Footer from '../components/Footer';
import blogImage1 from "../assets/blog-imgs/ira.JPG"; // Replace with your actual blog images
import blogImage2 from "../assets/blog-imgs/tandon.jpg"
import blogImage3 from "../assets/blog-imgs/biswarup.JPG";
import blogImage4 from "../assets/blog-imgs/pragya.JPG";

const BlogsPage = () => {
  const [expandedBlog, setExpandedBlog] = useState(null); // Track expanded blog by ID

  // Sample blog data with full content
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Startups in 2025",
      excerpt: "Exploring trends and predictions for the startup ecosystem in the coming year.",
      fullContent: "The startup landscape in 2025 is poised for significant evolution. With advancements in AI, blockchain, and sustainable tech, entrepreneurs are finding new opportunities to innovate. This article explores key trends, including the rise of remote-first companies, increased investor focus on ESG (Environmental, Social, Governance) factors, and the growing importance of community-driven business models. We’ll also discuss predictions from industry experts and how startups can position themselves for success in this dynamic environment.",
      date: "March 25, 2025",
      author: "Ira Saha",
      image: blogImage1,
    },
    {
      id: 3,
      title: "AI Revolution: What It Means for Entrepreneurs",
      excerpt: "A deep dive into how AI is reshaping business opportunities.",
      fullContent: "Artificial Intelligence is no longer a futuristic concept—it’s here, and it’s transforming entrepreneurship. From automating mundane tasks to providing deep customer insights, AI offers tools that level the playing field for small businesses. This article dives into practical applications of AI for entrepreneurs, such as predictive analytics, personalized marketing, and operational efficiency. We’ll also explore the ethical considerations and future implications of this tech revolution.",
      date: "March 15, 2025",
      author: "Biswarup Chatterjee",
      image: blogImage3,
    },
    {
      id: 4,
      title: "Scaling Your Business: Lessons Learned",
      excerpt: "Key takeaways from successful founders on growing sustainably.",
      fullContent: "Scaling a business is a delicate balance of growth and stability. In this post, we share lessons from founders who’ve successfully scaled their ventures. Topics include hiring the right team, maintaining company culture, leveraging data-driven decisions, and securing funding without losing control. These insights are backed by real-world case studies, offering actionable advice for entrepreneurs at any stage of their journey.",
      date: "March 10, 2025",
      author: "Pragya Jhunjhunwala",
      image: blogImage4,
    },{
      id: 2,
      title: "How to Pitch to Investors Like a Pro",
      excerpt: "Tips and strategies to nail your next investor pitch.",
      fullContent: "Pitching to investors can be daunting, but with the right approach, you can turn it into a winning opportunity. This post covers essential tips: crafting a compelling story, focusing on your unique value proposition, preparing for tough questions, and mastering your delivery. Learn from real-world examples of successful pitches and avoid common pitfalls that turn investors away. Whether you’re a first-time founder or a seasoned entrepreneur, these strategies will help you shine.",
      date: "March 20, 2025",
      author: "Vibhor Tandon",
      image: blogImage2,
    },
  ];

  // Toggle blog expansion
  const toggleBlogExpansion = (blogId) => {
    setExpandedBlog(expandedBlog === blogId ? null : blogId);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative h-72 bg-gray-800 ">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-white mb-2">
              MASA <span className="text-teal-400">Blog</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-lg mx-auto">
              Dive into insights, tips, and stories from our community.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="space-y-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-64">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">{post.title}</h2>
                  <p className="text-gray-300 mb-4">
                    {expandedBlog === post.id ? '' : post.excerpt}
                  </p>

                  {expandedBlog === post.id && (
                    <div className="mt-4 text-gray-300 leading-relaxed animate-fade-in">
                      {post.fullContent}
                    </div>
                  )}

                  <button
                    className={`text-teal-400 hover:text-teal-300 font-semibold transition-colors duration-300 ${
                      expandedBlog === post.id ? 'mt-4' : ''
                    }`}
                    onClick={() => toggleBlogExpansion(post.id)}
                  >
                    {expandedBlog === post.id ? 'Show Less' : 'Read More'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogsPage;