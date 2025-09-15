import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  Calendar, 
  ArrowLeft, 
  Share2, 
  BookOpen,
  User,
  Clock,
  Heart,
  MessageCircle,
  TrendingUp,
  Zap,
  Users
} from 'lucide-react';

export function BlogDetailPage() {
  const { id } = useParams();

  // Mock data - in real app this would come from API based on ID
  const blogPost = {
    id: "future-ev-infrastructure-2025",
    title: "The Future of Electric Vehicle Infrastructure: Trends to Watch in 2025",
    excerpt: "Explore the key technological and market trends that will shape the EV charging landscape this year, from ultra-fast charging to smart grid integration.",
    author: "Sarah Chen",
    authorBio: "Sarah is a senior technology analyst specializing in sustainable transportation and energy systems. She has over 8 years of experience covering the EV industry.",
    authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612c7c2?w=150&h=150&fit=crop&crop=face",
    date: "January 10, 2025",
    readTime: "8 min read",
    category: "Industry Insights",
    image: "https://images.unsplash.com/photo-1593941707874-ef0b1f9d4a49?w=800&h=400&fit=crop",
    content: `
      <p>The electric vehicle charging landscape is evolving at breakneck speed, driven by technological innovation, policy changes, and shifting consumer expectations. As we look ahead to 2025, several key trends are emerging that will fundamentally reshape how we think about EV infrastructure.</p>

      <h2>Ultra-Fast Charging: The Race to Reduce Wait Times</h2>

      <p>One of the most significant developments in EV charging technology is the continued advancement of ultra-fast charging capabilities. We're seeing the emergence of 350kW+ charging stations that can add 200+ miles of range in just 10-15 minutes.</p>

      <blockquote>
        "The goal is to make charging an EV as convenient as filling up a gas tank. Ultra-fast charging gets us much closer to that reality." - Dr. Maria Gonzalez, EV Technology Research Institute
      </blockquote>

      <p>Key developments in ultra-fast charging include:</p>

      <ul>
        <li>Liquid-cooled cables that can handle higher power levels safely</li>
        <li>Dynamic power sharing that optimizes charging across multiple vehicles</li>
        <li>Vehicle-to-grid (V2G) capabilities that allow EVs to feed power back to the grid</li>
        <li>Advanced battery management systems that prevent degradation during fast charging</li>
      </ul>

      <h2>Smart Grid Integration and Load Management</h2>

      <p>As EV adoption accelerates, the integration of charging infrastructure with smart grid technology becomes increasingly critical. This integration enables:</p>

      <ul>
        <li><strong>Demand Response:</strong> Charging can be automatically adjusted based on grid conditions and electricity prices</li>
        <li><strong>Load Balancing:</strong> Intelligent distribution of power across multiple charging points</li>
        <li><strong>Renewable Energy Integration:</strong> Preferential charging when solar and wind power are abundant</li>
        <li><strong>Grid Stability:</strong> EVs acting as mobile energy storage to support grid resilience</li>
      </ul>

      <h2>The Rise of Destination and Workplace Charging</h2>

      <p>While fast charging along highways grabs headlines, the real growth in 2025 will be in destination and workplace charging. This trend is driven by:</p>

      <ul>
        <li>Employers seeking to attract and retain talent with EV benefits</li>
        <li>Retail and hospitality businesses using charging as a customer acquisition tool</li>
        <li>Real estate developers adding charging to increase property values</li>
        <li>Fleet operators optimizing charging for maximum efficiency and cost savings</li>
      </ul>

      <h2>Wireless and Autonomous Charging</h2>

      <p>Looking further ahead, wireless charging technology is beginning to show commercial viability. While still in early stages, we expect to see:</p>

      <ul>
        <li>Pilot programs for wireless charging in parking lots and garages</li>
        <li>Integration with autonomous vehicles for fully automated charging</li>
        <li>Dynamic wireless charging on select highway segments</li>
        <li>Home wireless charging systems for overnight charging</li>
      </ul>

      <h2>Policy and Regulatory Developments</h2>

      <p>Government policy continues to be a major driver of infrastructure development:</p>

      <ul>
        <li>Increased federal funding for charging infrastructure deployment</li>
        <li>New building codes requiring EV-ready electrical capacity</li>
        <li>Right-to-charge legislation for apartment dwellers and condo owners</li>
        <li>Standardization efforts for charging protocols and payment systems</li>
      </ul>

      <h2>What This Means for Consumers and Businesses</h2>

      <p>These trends point to a future where EV charging becomes increasingly seamless, intelligent, and integrated into our daily lives. For consumers, this means:</p>

      <ul>
        <li>Reduced charging anxiety as networks become more reliable and ubiquitous</li>
        <li>Lower charging costs through smart grid integration and competition</li>
        <li>More convenient charging options at work, shopping, and dining destinations</li>
        <li>Better user experiences through improved apps and payment systems</li>
      </ul>

      <p>For businesses, the opportunities are equally compelling:</p>

      <ul>
        <li>New revenue streams from charging services and energy management</li>
        <li>Enhanced customer engagement and loyalty through charging amenities</li>
        <li>Operational cost savings through intelligent fleet charging</li>
        <li>Competitive advantages in attracting environmentally conscious consumers and employees</li>
      </ul>

      <h2>Looking Ahead</h2>

      <p>The transformation of EV charging infrastructure is just beginning. As technology continues to advance and adoption accelerates, we can expect even more innovation in areas like energy storage integration, AI-driven optimization, and seamless user experiences.</p>

      <p>The companies and communities that embrace these trends early will be best positioned to benefit from the electric mobility revolution. Whether you're a business owner considering EV charging, a policy maker planning infrastructure investments, or a consumer thinking about your next vehicle purchase, understanding these trends is crucial for making informed decisions.</p>

      <p>The future of transportation is electric, and the infrastructure to support it is becoming more intelligent, efficient, and user-friendly every day.</p>
    `,
    tags: ["EV Infrastructure", "Technology", "Smart Grid", "Innovation", "2025 Trends"],
    likes: 342,
    comments: 28,
    relatedPosts: [
      { title: "How Smart Charging is Revolutionizing Fleet Operations", url: "/blog/smart-charging-fleets" },
      { title: "EV Adoption Accelerates: What the Data Tells Us", url: "/blog/ev-adoption-data" },
      { title: "Building Sustainable Charging Infrastructure", url: "/blog/sustainable-infrastructure" }
    ]
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Technology": "bg-blue-50 text-blue-700 border-blue-200",
      "Industry Insights": "bg-emerald-50 text-emerald-700 border-emerald-200",
      "Market Analysis": "bg-purple-50 text-purple-700 border-purple-200",
      "User Experience": "bg-orange-50 text-orange-700 border-orange-200",
      "Sustainability": "bg-teal-50 text-teal-700 border-teal-200",
      "Business": "bg-red-50 text-red-700 border-red-200"
    };
    return colors[category as keyof typeof colors] || "bg-gray-50 text-gray-700 border-gray-200";
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex items-center space-x-4 mb-6">
            <Badge className={getCategoryColor(blogPost.category)}>
              {blogPost.category}
            </Badge>
            <div className="flex items-center text-gray-500 space-x-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {blogPost.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {blogPost.readTime}
              </div>
            </div>
          </div>

          <h1 className="text-3xl lg:text-4xl text-gray-900 mb-6 leading-tight">
            {blogPost.title}
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {blogPost.excerpt}
          </p>

          {/* Author Info */}
          <div className="flex items-center justify-between border-t border-b py-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <ImageWithFallback
                  src={blogPost.authorImage}
                  alt={blogPost.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-900">By {blogPost.author}</p>
                <p className="text-sm text-gray-600">{blogPost.authorBio}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <div 
                className="prose prose-lg max-w-none prose-emerald"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
              
              {/* Engagement */}
              <div className="border-t pt-8 mt-12">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                      <span>{blogPost.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span>{blogPost.comments}</span>
                    </button>
                  </div>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Article
                  </Button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-gray-900">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {blogPost.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="bg-gray-50 hover:bg-gray-100 cursor-pointer">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Share */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-gray-900 mb-4">Share this post</h3>
                    <div className="space-y-3">
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Share2 className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Share2 className="w-4 h-4 mr-2" />
                        Twitter
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Share2 className="w-4 h-4 mr-2" />
                        Email
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Table of Contents */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-gray-900 mb-4">In this article</h3>
                    <div className="space-y-2 text-sm">
                      <a href="#ultra-fast" className="block text-gray-600 hover:text-emerald-600 transition-colors">
                        Ultra-Fast Charging
                      </a>
                      <a href="#smart-grid" className="block text-gray-600 hover:text-emerald-600 transition-colors">
                        Smart Grid Integration
                      </a>
                      <a href="#destination" className="block text-gray-600 hover:text-emerald-600 transition-colors">
                        Destination Charging
                      </a>
                      <a href="#wireless" className="block text-gray-600 hover:text-emerald-600 transition-colors">
                        Wireless Charging
                      </a>
                      <a href="#policy" className="block text-gray-600 hover:text-emerald-600 transition-colors">
                        Policy Developments
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="bg-gradient-to-br from-emerald-50 to-blue-50">
                  <CardContent className="p-6">
                    <h3 className="text-gray-900 mb-2">Stay Updated</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Get the latest insights on EV technology and sustainability.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Your email"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                      />
                      <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700">
                        Subscribe
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={blogPost.authorImage}
                    alt={blogPost.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-gray-900 mb-2">About {blogPost.author}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {blogPost.authorBio} She regularly speaks at industry conferences and has been featured in major technology publications.
                  </p>
                  <div className="flex items-center space-x-4">
                    <Button variant="outline" size="sm">
                      <User className="w-4 h-4 mr-2" />
                      View Profile
                    </Button>
                    <Button variant="outline" size="sm">
                      <BookOpen className="w-4 h-4 mr-2" />
                      More Articles
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-gray-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPost.relatedPosts.map((post, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <Link to={post.url} className="text-emerald-600 hover:text-emerald-700 text-sm inline-flex items-center">
                    Read Article
                    <ArrowLeft className="w-3 h-3 ml-2 rotate-180" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl mb-4">
            Enjoy this article?
          </h2>
          <p className="text-lg mb-6 text-white/90">
            Subscribe to our newsletter for more insights on EV technology and sustainable transportation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <Button className="bg-white text-emerald-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}