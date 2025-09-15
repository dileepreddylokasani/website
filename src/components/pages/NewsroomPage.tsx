import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { 
  Calendar, 
  ExternalLink,
  Download,
  FileText,
  Camera,
  Award,
  TrendingUp
} from 'lucide-react';

export function NewsroomPage() {
  const pressReleases = [
    {
      date: "January 15, 2025",
      title: "ChargeEV Announces $45M Series B Funding Round",
      excerpt: "Leading venture capital firms invest in ChargeEV's mission to accelerate EV adoption through intelligent charging infrastructure.",
      category: "Funding",
      featured: true
    },
    {
      date: "December 8, 2024",
      title: "ChargeEV Network Reaches 25,000 Charging Points Milestone",
      excerpt: "Company celebrates major infrastructure milestone as network expands across 50 cities worldwide.",
      category: "Growth"
    },
    {
      date: "November 20, 2024",
      title: "Partnership with Major Retail Chain Adds 500 New Charging Locations",
      excerpt: "Strategic partnership brings convenient charging to shopping centers across North America.",
      category: "Partnership"
    },
    {
      date: "October 12, 2024",
      title: "ChargeEV Launches Fleet Management Dashboard",
      excerpt: "New enterprise features help businesses optimize their electric fleet operations and reduce costs.",
      category: "Product"
    },
    {
      date: "September 3, 2024",
      title: "ChargeEV App Surpasses 500,000 Active Users",
      excerpt: "Mobile application reaches major user milestone as EV adoption accelerates nationwide.",
      category: "Growth"
    },
    {
      date: "August 15, 2024",
      title: "ChargeEV Recognized as Best EV Charging Platform by Tech Awards",
      excerpt: "Industry recognition highlights platform's innovation in sustainable transportation technology.",
      category: "Awards"
    }
  ];

  const mediaKit = [
    {
      title: "Company Logos",
      description: "High-resolution ChargeEV logos in various formats",
      type: "ZIP",
      size: "2.4 MB"
    },
    {
      title: "Executive Photos",
      description: "Professional headshots of leadership team",
      type: "ZIP", 
      size: "8.1 MB"
    },
    {
      title: "Product Screenshots",
      description: "App interface and dashboard screenshots",
      type: "ZIP",
      size: "12.3 MB"
    },
    {
      title: "Company Fact Sheet",
      description: "Key metrics, milestones, and company overview",
      type: "PDF",
      size: "180 KB"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Funding": "bg-green-100 text-green-700",
      "Growth": "bg-blue-100 text-blue-700",
      "Partnership": "bg-purple-100 text-purple-700",
      "Product": "bg-orange-100 text-orange-700",
      "Awards": "bg-yellow-100 text-yellow-700"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-500/20 text-blue-100 border-blue-400/30">
              Newsroom
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Latest news & updates
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Stay informed about ChargeEV's latest developments, partnerships, 
              and milestones in the electric mobility space.
            </p>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Press Releases
            </h2>
            <p className="text-xl text-gray-600">
              The latest announcements and updates from ChargeEV
            </p>
          </div>

          <div className="space-y-8">
            {pressReleases.map((release, index) => (
              <Card key={index} className={`transition-shadow hover:shadow-lg ${release.featured ? 'border-blue-200 bg-blue-50/30' : 'bg-white'}`}>
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <Badge className={getCategoryColor(release.category)}>
                          {release.category}
                        </Badge>
                        {release.featured && (
                          <Badge className="bg-blue-600 text-white">Featured</Badge>
                        )}
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-2" />
                          {release.date}
                        </div>
                      </div>
                      <h3 className={`font-bold mb-3 ${release.featured ? 'text-2xl' : 'text-xl'} text-gray-900`}>
                        {release.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {release.excerpt}
                      </p>
                    </div>
                    <div className="lg:ml-8">
                      <Button asChild variant="outline" className="w-full lg:w-auto">
                        <Link to={`/news/${release.featured ? '45m-series-b-funding' : 'news-' + index}`}>
                          Read Full Release
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Press Releases
            </Button>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ChargeEV by the numbers
            </h2>
            <p className="text-xl text-gray-600">
              Key metrics showcasing our impact on electric mobility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">$45M</div>
                <div className="text-gray-600">Series B Funding</div>
                <div className="text-sm text-gray-500 mt-1">January 2025</div>
              </CardContent>
            </Card>

            <Card className="bg-white text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">25,000+</div>
                <div className="text-gray-600">Charging Points</div>
                <div className="text-sm text-gray-500 mt-1">Across 50+ cities</div>
              </CardContent>
            </Card>

            <Card className="bg-white text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">500K+</div>
                <div className="text-gray-600">Active Users</div>
                <div className="text-sm text-gray-500 mt-1">Mobile app downloads</div>
              </CardContent>
            </Card>

            <Card className="bg-white text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">150%</div>
                <div className="text-gray-600">Revenue Growth</div>
                <div className="text-sm text-gray-500 mt-1">Year over year</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Media Resources
            </h2>
            <p className="text-xl text-gray-600">
              Download assets, photos, and information for media coverage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaKit.map((item, index) => (
              <Card key={index} className="bg-gray-50 hover:bg-gray-100 transition-colors border-0">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      {item.type === 'ZIP' ? (
                        <Camera className="w-6 h-6 text-blue-600" />
                      ) : (
                        <FileText className="w-6 h-6 text-blue-600" />
                      )}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {item.type}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{item.size}</span>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Download Complete Media Kit
              <Download className="w-4 h-4 ml-2" />
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              For additional materials or interview requests, contact <br />
              <strong>press@chargegrid.com</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Recent Awards */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600">
              Industry recognition for innovation and excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Best EV Charging Platform</h3>
                <p className="text-sm text-gray-600 mb-1">Tech Innovation Awards 2024</p>
                <p className="text-xs text-gray-500">August 2024</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Sustainable Tech Leader</h3>
                <p className="text-sm text-gray-600 mb-1">Clean Energy Awards 2024</p>
                <p className="text-xs text-gray-500">June 2024</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Innovation in Mobility</h3>
                <p className="text-sm text-gray-600 mb-1">Transportation Excellence Awards</p>
                <p className="text-xs text-gray-500">March 2024</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Press */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Media Inquiries
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            For press inquiries, interview requests, or additional information
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Press Contact</h3>
              <p className="text-gray-300 text-sm mb-1">Sarah Martinez</p>
              <p className="text-gray-300 text-sm mb-3">Director of Communications</p>
              <a href="mailto:press@chargegrid.com" className="text-blue-400 hover:text-blue-300">
                press@chargegrid.com
              </a>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Partnership Inquiries</h3>
              <p className="text-gray-300 text-sm mb-1">Michael Chen</p>
              <p className="text-gray-300 text-sm mb-3">VP Business Development</p>
              <a href="mailto:partnerships@chargegrid.com" className="text-blue-400 hover:text-blue-300">
                partnerships@chargegrid.com
              </a>
            </div>
          </div>

          <p className="text-sm text-gray-400">
            We typically respond to media inquiries within 2 hours during business hours
          </p>
        </div>
      </section>
    </div>
  );
}