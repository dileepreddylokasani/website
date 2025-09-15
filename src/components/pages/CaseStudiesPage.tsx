import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  TrendingUp, 
  Users, 
  DollarSign,
  Clock,
  ArrowRight,
  CheckCircle,
  Building,
  Truck,
  ShoppingCart,
  Zap,
  Star,
  Calendar
} from 'lucide-react';

export function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Metro Shopping Centers: 150% Revenue Boost Through Smart Charging",
      client: "Metro Shopping Centers",
      industry: "Retail",
      description: "How a major retail chain transformed their parking lots into profitable EV charging destinations, increasing customer dwell time and creating new revenue streams.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      icon: ShoppingCart,
      results: [
        { metric: "150%", label: "Revenue Increase", icon: TrendingUp },
        { metric: "85%", label: "User Satisfaction", icon: Users },
        { metric: "40+", label: "New Charging Points", icon: Zap }
      ],
      duration: "3 months",
      featured: true,
      tags: ["Retail", "Revenue Growth", "User Experience"],
      testimonial: "ChargeEV transformed our shopping centers into EV destinations. The results exceeded our expectations."
    },
    {
      title: "GreenLogistics: Optimizing Fleet Charging for Maximum Efficiency",
      client: "GreenLogistics Corp",
      industry: "Transportation & Logistics", 
      description: "A logistics company reduced operational costs by 30% while improving delivery times through intelligent fleet charging solutions.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      icon: Truck,
      results: [
        { metric: "30%", label: "Cost Reduction", icon: DollarSign },
        { metric: "99.5%", label: "Uptime Achieved", icon: Clock },
        { metric: "200+", label: "Fleet Vehicles", icon: Truck }
      ],
      duration: "6 months",
      tags: ["Fleet Management", "Cost Optimization", "Logistics"],
      testimonial: "The platform's intelligent routing saved us thousands in operational costs."
    },
    {
      title: "Downtown Business District: Creating an EV-Friendly Ecosystem",
      client: "Downtown Business Improvement District",
      industry: "Municipal",
      description: "How a business district increased foot traffic and property values by becoming an EV charging hub for the community.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      icon: Building,
      results: [
        { metric: "25%", label: "Foot Traffic Increase", icon: Users },
        { metric: "12%", label: "Property Value Growth", icon: TrendingUp },
        { metric: "60+", label: "Charging Sessions Daily", icon: Zap }
      ],
      duration: "4 months",
      tags: ["Municipal", "Urban Planning", "Economic Development"],
      testimonial: "ChargeEV helped us create a thriving, sustainable downtown environment."
    },
    {
      title: "TechCorp Campus: Employee-First EV Charging Strategy",
      client: "TechCorp Solutions",
      industry: "Technology",
      description: "A tech company enhanced employee satisfaction and attracted top talent with comprehensive EV charging benefits.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      icon: Building,
      results: [
        { metric: "95%", label: "Employee Satisfaction", icon: Users },
        { metric: "40%", label: "EV Adoption Rate", icon: TrendingUp },
        { metric: "24/7", label: "Available Charging", icon: Clock }
      ],
      duration: "2 months",
      tags: ["Corporate", "Employee Benefits", "Sustainability"],
      testimonial: "Our employees love the convenience. It's become a key recruitment advantage."
    },
    {
      title: "Highway Rest Stop Network: Enabling Long-Distance EV Travel",
      client: "Interstate Travel Centers",
      industry: "Travel & Hospitality",
      description: "Rest stop operator increased revenue and user dwell time by installing high-speed charging stations across their network.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop",
      icon: Zap,
      results: [
        { metric: "200%", label: "Revenue Per Visit", icon: DollarSign },
        { metric: "45 min", label: "Average Dwell Time", icon: Clock },
        { metric: "350kW", label: "Max Charging Speed", icon: Zap }
      ],
      duration: "8 months",
      tags: ["Hospitality", "Highway", "Fast Charging"],
      testimonial: "The fast charging stations transformed our business model completely."
    },
    {
      title: "University Campus: Supporting the Next Generation of EV Users",
      client: "State University",
      industry: "Education",
      description: "University created a model campus charging program that supports students, faculty, and visitors with sustainable transportation.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
      icon: Users,
      results: [
        { metric: "500+", label: "Daily Active Users", icon: Users },
        { metric: "80%", label: "Utilization Rate", icon: TrendingUp },
        { metric: "$50K", label: "Annual Revenue", icon: DollarSign }
      ],
      duration: "5 months",
      tags: ["Education", "Campus", "Community"],
      testimonial: "ChargeEV helped us create a truly sustainable campus environment."
    }
  ];

  const getIconColor = (industry: string) => {
    const colors = {
      "Retail": "bg-blue-50 text-blue-600",
      "Transportation & Logistics": "bg-green-50 text-green-600",
      "Municipal": "bg-purple-50 text-purple-600",
      "Technology": "bg-orange-50 text-orange-600",
      "Travel & Hospitality": "bg-red-50 text-red-600",
      "Education": "bg-teal-50 text-teal-600"
    };
    return colors[industry as keyof typeof colors] || "bg-gray-50 text-gray-600";
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              <Star className="w-4 h-4 mr-2" />
              Success Stories
            </Badge>
            <h1 className="text-4xl lg:text-6xl mb-6 leading-tight">
              Real Results from Real Partners
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Discover how businesses across industries are driving growth, reducing costs, 
              and enhancing user experiences with ChargeEV's intelligent charging platform.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics Overview */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl text-emerald-600 mb-2">150%</div>
              <div className="text-gray-600">Average Revenue Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">User Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl text-indigo-600 mb-2">30%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl text-purple-600 mb-2">6 weeks</div>
              <div className="text-gray-600">Average Implementation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Featured Success Story
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              How Metro Shopping Centers achieved 150% revenue growth
            </p>
          </div>

          {caseStudies
            .filter(study => study.featured)
            .map((study, index) => {
              const Icon = study.icon;
              return (
                <Card key={index} className="overflow-hidden shadow-xl border-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="aspect-[4/3] lg:aspect-auto">
                      <ImageWithFallback
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-8 lg:p-12 flex flex-col justify-center bg-white">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getIconColor(study.industry)}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge variant="outline" className="bg-white">{study.industry}</Badge>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            {study.duration}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-2xl lg:text-3xl text-gray-900 mb-4">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {study.description}
                      </p>
                      
                      <div className="grid grid-cols-3 gap-6 mb-8">
                        {study.results.map((result, idx) => {
                          const ResultIcon = result.icon;
                          return (
                            <div key={idx} className="text-center">
                              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                                <ResultIcon className="w-6 h-6 text-emerald-600" />
                              </div>
                              <div className="text-2xl text-gray-900 mb-1">{result.metric}</div>
                              <div className="text-sm text-gray-600">{result.label}</div>
                            </div>
                          );
                        })}
                      </div>

                      <blockquote className="text-gray-700 italic mb-6 border-l-4 border-emerald-200 pl-4">
                        "{study.testimonial}"
                      </blockquote>
                      
                      <Button size="lg" className="self-start bg-emerald-600 hover:bg-emerald-700">
                        <Link to="/case-studies/metro-shopping-centers">
                          Read Full Case Study
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
        </div>
      </section>

      {/* All Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              More Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore how businesses across different industries are transforming their operations with ChargeEV
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies
              .filter(study => !study.featured)
              .map((study, index) => {
                const Icon = study.icon;
                return (
                  <Card key={index} className="bg-white overflow-hidden hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                    <div className="aspect-[16/10]">
                      <ImageWithFallback
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getIconColor(study.industry)}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <Badge variant="outline" className="text-xs bg-white">
                            {study.industry}
                          </Badge>
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="w-3 h-3 mr-1" />
                          {study.duration}
                        </div>
                      </div>
                      <h3 className="text-gray-900 mb-3 line-clamp-2 leading-snug">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                        {study.description}
                      </p>
                      
                      <div className="grid grid-cols-3 gap-3 mb-6">
                        {study.results.map((result, idx) => {
                          const ResultIcon = result.icon;
                          return (
                            <div key={idx} className="text-center">
                              <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-2">
                                <ResultIcon className="w-4 h-4 text-gray-600" />
                              </div>
                              <div className="text-lg text-gray-900 mb-1">{result.metric}</div>
                              <div className="text-xs text-gray-600 leading-tight">{result.label}</div>
                            </div>
                          );
                        })}
                      </div>

                      <blockquote className="text-gray-600 text-sm italic mb-4 line-clamp-2">
                        "{study.testimonial}"
                      </blockquote>
                      
                      <Button variant="outline" size="sm" className="w-full">
                        <Link to={`/case-studies/case-study-${index}`}>
                          View Case Study
                          <ArrowRight className="w-3 h-3 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              What Drives Success with ChargeEV
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The key factors that contribute to our partners' exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-gray-900 mb-4">Strategic Planning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Collaborative strategy development that aligns charging infrastructure with your business goals and user needs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-gray-900 mb-4">Platform Integration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Seamless integration with existing systems and operations for maximum efficiency and minimal disruption.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-gray-900 mb-4">Ongoing Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  24/7 technical support and dedicated account management to ensure continued success and optimization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join these industry leaders and discover how ChargeEV can transform your business with intelligent charging solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              Schedule a Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Download Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}