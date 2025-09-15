import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  Calendar, 
  User,
  ArrowRight,
  Clock,
  TrendingUp,
  Zap,
  Globe,
  Users
} from 'lucide-react';

export function BlogPage() {
  const featuredPost = {
    title: "The Future of Electric Vehicle Infrastructure: Trends to Watch in 2025",
    excerpt: "Explore the key technological and market trends that will shape the EV charging landscape this year, from ultra-fast charging to smart grid integration.",
    author: "Sarah Chen",
    date: "January 10, 2025",
    readTime: "8 min read",
    category: "Industry Insights",
    image: "https://images.unsplash.com/photo-1593941707874-ef0b1f9d4a49?w=800&h=400&fit=crop"
  };

  const blogPosts = [
    {
      title: "How Smart Charging is Revolutionizing Fleet Operations",
      excerpt: "Discover how intelligent charging algorithms are helping fleet managers optimize costs and improve operational efficiency.",
      author: "Marcus Rodriguez",
      date: "January 8, 2025", 
      readTime: "6 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop"
    },
    {
      title: "EV Adoption Accelerates: What the Data Tells Us",
      excerpt: "A deep dive into the latest EV adoption statistics and what they mean for the future of transportation.",
      author: "Jennifer Park",
      date: "January 5, 2025",
      readTime: "5 min read", 
      category: "Market Analysis",
      image: "https://images.unsplash.com/photo-1560979022-33b6f89acee3?w=400&h=250&fit=crop"
    },
    {
      title: "Building Sustainable Charging Infrastructure: Best Practices",
      excerpt: "Learn how to design and implement EV charging networks that balance environmental impact with business needs.",
      author: "David Kim",
      date: "January 3, 2025",
      readTime: "7 min read",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=250&fit=crop"
    },
    {
      title: "The User Experience Revolution in EV Charging",
      excerpt: "How design thinking and user-centered approaches are transforming the EV charging experience for drivers.",
      author: "Elena Volkov",
      date: "December 30, 2024",
      readTime: "4 min read",
      category: "User Experience",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      title: "Charging Network Optimization: AI and Machine Learning",
      excerpt: "Explore how artificial intelligence is being used to predict demand, optimize pricing, and improve network reliability.",
      author: "James Thompson",
      date: "December 28, 2024",
      readTime: "9 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop"
    },
    {
      title: "Partnership Success Stories: Retail and Charging",
      excerpt: "How strategic partnerships between charging providers and retailers are creating win-win scenarios.",
      author: "Sarah Chen",
      date: "December 25, 2024",
      readTime: "6 min read",
      category: "Business",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop"
    }
  ];

  const categories = [
    { name: "All", count: 47, icon: Globe },
    { name: "Technology", count: 12, icon: Zap },
    { name: "Industry Insights", count: 15, icon: TrendingUp },
    { name: "User Experience", count: 8, icon: Users },
    { name: "Sustainability", count: 7, icon: Globe },
    { name: "Market Analysis", count: 5, icon: TrendingUp }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Technology": "bg-blue-100 text-blue-700",
      "Industry Insights": "bg-green-100 text-green-700",
      "Market Analysis": "bg-purple-100 text-purple-700",
      "User Experience": "bg-orange-100 text-orange-700",
      "Sustainability": "bg-teal-100 text-teal-700",
      "Business": "bg-red-100 text-red-700"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-500/20 text-blue-100 border-blue-400/30">
              ChargeEV Blog
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              The Future of Mobility
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Insights, trends, and thought leadership from the world of electric vehicle 
              charging and sustainable transportation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Article
            </h2>
            <p className="text-xl text-gray-600">
              Our latest insights on the evolving EV charging landscape
            </p>
          </div>

          <Card className="overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-[4/3] lg:aspect-auto">
                <ImageWithFallback
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge className={getCategoryColor(featuredPost.category)} style={{ alignSelf: 'flex-start' }}>
                  {featuredPost.category}
                </Badge>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-4 mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-8">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <Button size="lg" className="self-start">
                  <Link to="/blog/future-ev-infrastructure-2025">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <Card className="bg-white sticky top-8">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => {
                      const Icon = category.icon;
                      return (
                        <button
                          key={index}
                          className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 text-left transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <Icon className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-700">{category.name}</span>
                          </div>
                          <span className="text-xs text-gray-400">{category.count}</span>
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Articles Grid */}
            <div className="lg:w-3/4">
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="bg-white overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-[16/10]">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge className={getCategoryColor(post.category)} style={{ alignSelf: 'flex-start' }}>
                        {post.category}
                      </Badge>
                      <h3 className="font-bold text-gray-900 mt-3 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="w-3 h-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Link to={`/blog/blog-post-${index}`}>
                          Read More
                          <ArrowRight className="w-3 h-3 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button size="lg" variant="outline">
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Stay informed with our newsletter
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get the latest insights on EV charging, sustainability, and the future of transportation 
            delivered to your inbox monthly.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            No spam, unsubscribe at any time. Read our privacy policy.
          </p>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="font-semibold text-gray-900 mb-6">Popular Topics</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "EV Charging", "Fleet Management", "Smart Grid", "Sustainability",
                "User Experience", "Market Trends", "Technology", "Infrastructure",
                "Business Strategy", "Innovation", "Clean Energy", "Mobility"
              ].map((tag, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}