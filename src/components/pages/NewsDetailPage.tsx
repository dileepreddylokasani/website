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
  Download,
  ExternalLink,
  Users,
  Building,
  TrendingUp,
  Zap
} from 'lucide-react';

export function NewsDetailPage() {
  const { id } = useParams();

  // Mock data - in real app this would come from API based on ID
  const newsArticle = {
    id: "45m-series-b-funding",
    date: "January 15, 2025",
    title: "ChargeEV Announces $45M Series B Funding Round",
    category: "Funding",
    featured: true,
    excerpt: "Leading venture capital firms invest in ChargeEV's mission to accelerate EV adoption through intelligent charging infrastructure.",
    content: `
      <p>ChargeEV, the leading electric vehicle charging platform, today announced the successful completion of its $45 million Series B funding round. The round was led by GreenTech Ventures, with participation from existing investors including Mobility Capital Partners and Clean Energy Fund.</p>

      <p>This significant investment will accelerate ChargeEV's expansion across North America and Europe, fund advanced AI-driven charging technologies, and support the development of next-generation infrastructure solutions.</p>

      <h2>Driving Innovation in EV Charging</h2>

      <p>"This funding represents a major milestone in our mission to make electric vehicle charging as convenient and reliable as traditional fueling," said Sarah Martinez, CEO of ChargeEV. "With this investment, we're not just expanding our network—we're reimagining the entire charging experience through intelligent technology and user-centered design."</p>

      <p>The company plans to use the funding to:</p>

      <ul>
        <li>Expand the charging network to over 50,000 points across 100+ cities</li>
        <li>Develop advanced AI algorithms for predictive charging and demand optimization</li>
        <li>Launch new enterprise products for fleet management and commercial real estate</li>
        <li>Accelerate international expansion into European markets</li>
        <li>Enhance the mobile app with new features including route optimization and social sharing</li>
      </ul>

      <h2>Market Leadership and Growth</h2>

      <p>ChargeEV has experienced tremendous growth over the past year, with key achievements including:</p>

      <ul>
        <li>Network expansion to 25,000+ charging points across 50 cities</li>
        <li>Mobile app downloads surpassing 500,000 active users</li>
        <li>150% year-over-year revenue growth</li>
        <li>Partnerships with major retail chains and commercial property developers</li>
        <li>99.5% network uptime maintaining industry-leading reliability</li>
      </ul>

      <p>"ChargeEV has demonstrated exceptional execution in building both the technology infrastructure and user experience needed to accelerate EV adoption," said Michael Chen, Partner at GreenTech Ventures. "Their platform approach to charging—connecting drivers, businesses, and infrastructure—positions them uniquely in this rapidly growing market."</p>

      <h2>Looking Ahead</h2>

      <p>The global EV charging market is projected to reach $100 billion by 2030, driven by accelerating electric vehicle adoption and supportive government policies. ChargeEV is positioned to capture a significant share of this growth through its integrated platform approach.</p>

      <p>"We're not just building charging stations—we're creating an ecosystem that makes electric mobility accessible, reliable, and enjoyable for everyone," added Martinez. "This funding allows us to accelerate that vision and serve the millions of new EV drivers joining the movement toward sustainable transportation."</p>

      <p>ChargeEV expects to complete its network expansion to 50,000 charging points by the end of 2025, with European operations launching in Q3 2025.</p>
    `,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=400&fit=crop",
    tags: ["Funding", "Growth", "Investment", "Expansion"],
    relatedLinks: [
      { title: "ChargeEV Network Reaches 25,000 Charging Points", url: "/news/25k-milestone" },
      { title: "Partnership with Major Retail Chain", url: "/news/retail-partnership" },
      { title: "ChargeEV App Surpasses 500,000 Users", url: "/news/500k-users" }
    ]
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Funding": "bg-emerald-50 text-emerald-700 border-emerald-200",
      "Growth": "bg-blue-50 text-blue-700 border-blue-200",
      "Partnership": "bg-purple-50 text-purple-700 border-purple-200",
      "Product": "bg-orange-50 text-orange-700 border-orange-200",
      "Awards": "bg-yellow-50 text-yellow-700 border-yellow-200"
    };
    return colors[category as keyof typeof colors] || "bg-gray-50 text-gray-700 border-gray-200";
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/news" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Newsroom
          </Link>
          
          <div className="flex items-center space-x-4 mb-6">
            <Badge className={getCategoryColor(newsArticle.category)}>
              {newsArticle.category}
            </Badge>
            {newsArticle.featured && (
              <Badge className="bg-blue-600 text-white">Featured</Badge>
            )}
            <div className="flex items-center text-gray-500">
              <Calendar className="w-4 h-4 mr-2" />
              {newsArticle.date}
            </div>
          </div>

          <h1 className="text-3xl lg:text-4xl text-gray-900 mb-6 leading-tight">
            {newsArticle.title}
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {newsArticle.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
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
              src={newsArticle.image}
              alt={newsArticle.title}
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
                dangerouslySetInnerHTML={{ __html: newsArticle.content }}
              />
              
              <div className="border-t pt-8 mt-12">
                <h3 className="text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {newsArticle.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-gray-50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Share */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-gray-900 mb-4">Share this article</h3>
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

                {/* Key Stats */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-gray-900 mb-4">Key Highlights</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <div className="text-2xl text-gray-900">$45M</div>
                          <div className="text-sm text-gray-600">Series B Funding</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                          <Zap className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-2xl text-gray-900">50,000+</div>
                          <div className="text-sm text-gray-600">Planned Charging Points</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center">
                          <Building className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div>
                          <div className="text-2xl text-gray-900">100+</div>
                          <div className="text-sm text-gray-600">Cities by 2025</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-gray-900 mb-4">Media Contact</h3>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">Sarah Martinez</p>
                      <p className="text-sm text-gray-600">Director of Communications</p>
                      <a href="mailto:press@chargeev.com" className="text-sm text-emerald-600 hover:text-emerald-700">
                        press@chargeev.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-gray-900 mb-8">Related News</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {newsArticle.relatedLinks.map((link, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-gray-900 mb-3 line-clamp-2">{link.title}</h3>
                  <Link to={link.url} className="text-emerald-600 hover:text-emerald-700 text-sm inline-flex items-center">
                    Read More
                    <ExternalLink className="w-3 h-3 ml-2" />
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
            Stay Updated with ChargeEV News
          </h2>
          <p className="text-lg mb-6 text-white/90">
            Get the latest company updates and industry insights delivered to your inbox.
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