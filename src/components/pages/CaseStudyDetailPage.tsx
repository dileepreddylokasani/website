import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  ArrowLeft, 
  Calendar,
  MapPin,
  Users,
  TrendingUp,
  DollarSign,
  Zap,
  Clock,
  Building,
  Share2,
  Download,
  CheckCircle,
  Quote
} from 'lucide-react';

export function CaseStudyDetailPage() {
  const { id } = useParams();

  // Mock data - in real app this would come from API based on ID
  const caseStudy = {
    id: "metro-shopping-centers",
    title: "Metro Shopping Centers: 150% Revenue Boost Through Smart Charging",
    client: "Metro Shopping Centers",
    industry: "Retail",
    location: "North America",
    duration: "3 months",
    description: "How a major retail chain transformed their parking lots into profitable EV charging destinations, increasing customer dwell time and creating new revenue streams.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop",
    results: [
      { metric: "150%", label: "Revenue Increase", icon: TrendingUp, description: "Total revenue from charging services exceeded initial projections" },
      { metric: "85%", label: "User Satisfaction", icon: Users, description: "Customer satisfaction scores for charging experience" },
      { metric: "40+", label: "New Charging Points", icon: Zap, description: "Fast-charging stations installed across the network" }
    ],
    tags: ["Retail", "Revenue Growth", "User Experience"],
    testimonial: {
      quote: "ChargeEV transformed our shopping centers into EV destinations. The results exceeded our expectations in every way - from revenue generation to customer satisfaction. Our customers love the convenience, and we've seen a measurable increase in dwell time and spending.",
      author: "Jennifer Park",
      role: "VP of Operations",
      company: "Metro Shopping Centers",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612c7c2?w=150&h=150&fit=crop&crop=face"
    },
    challenge: `
      <p>Metro Shopping Centers operated 45 retail locations across major metropolitan areas, serving millions of customers annually. However, they faced several challenges:</p>
      
      <ul>
        <li>Declining foot traffic as customers increasingly shopped online</li>
        <li>Underutilized parking areas, especially during off-peak hours</li>
        <li>Growing demand from customers for EV charging amenities</li>
        <li>Pressure to find new revenue streams beyond traditional retail leasing</li>
        <li>Need to differentiate from competitors and attract environmentally conscious consumers</li>
      </ul>

      <p>The company recognized that EV charging could address multiple challenges simultaneously - creating new revenue, attracting customers, and positioning the brand as forward-thinking and sustainable.</p>
    `,
    solution: `
      <p>ChargeEV partnered with Metro Shopping Centers to design and implement a comprehensive charging solution tailored to the retail environment:</p>

      <h3>Strategic Placement</h3>
      <ul>
        <li>40+ Level 2 and DC fast charging stations positioned near store entrances</li>
        <li>Premium parking spots with charging to encourage longer visits</li>
        <li>Clear signage and wayfinding to guide customers to charging areas</li>
      </ul>

      <h3>Technology Integration</h3>
      <ul>
        <li>Smart charging management to optimize power distribution and reduce costs</li>
        <li>Mobile app integration for seamless payment and session management</li>
        <li>Real-time availability updates and reservation capabilities</li>
        <li>Dynamic pricing based on demand and time of day</li>
      </ul>

      <h3>Customer Experience</h3>
      <ul>
        <li>Dedicated charging areas with comfortable seating and WiFi</li>
        <li>Integration with the shopping center's loyalty program</li>
        <li>Special promotions for charging customers (discounts, extended parking)</li>
        <li>24/7 customer support and maintenance</li>
      </ul>
    `,
    implementation: `
      <p>The rollout was executed in three phases over 12 weeks:</p>

      <h3>Phase 1: Site Assessment and Planning (Weeks 1-4)</h3>
      <ul>
        <li>Detailed electrical infrastructure assessment at all locations</li>
        <li>Traffic pattern analysis to optimize charger placement</li>
        <li>Permit acquisition and utility coordination</li>
        <li>Staff training and operational procedures development</li>
      </ul>

      <h3>Phase 2: Installation (Weeks 5-8)</h3>
      <ul>
        <li>Electrical infrastructure upgrades where needed</li>
        <li>Charger installation and network connectivity setup</li>
        <li>Signage installation and parking area modifications</li>
        <li>System testing and quality assurance</li>
      </ul>

      <h3>Phase 3: Launch and Optimization (Weeks 9-12)</h3>
      <ul>
        <li>Soft launch with limited customer access for testing</li>
        <li>Marketing campaign to promote new charging amenities</li>
        <li>Staff training on customer support procedures</li>
        <li>Performance monitoring and optimization based on usage data</li>
      </ul>
    `,
    results_detailed: `
      <p>The implementation delivered exceptional results across all key metrics:</p>

      <h3>Financial Performance</h3>
      <ul>
        <li><strong>Revenue Growth:</strong> 150% increase in charging-related revenue within 6 months</li>
        <li><strong>Customer Spending:</strong> 23% increase in average spend per visit for charging customers</li>
        <li><strong>Dwell Time:</strong> 35% longer average visit duration for customers who charge</li>
        <li><strong>ROI:</strong> 18-month payback period, exceeding initial 24-month projections</li>
      </ul>

      <h3>Customer Experience</h3>
      <ul>
        <li><strong>Satisfaction Scores:</strong> 85% customer satisfaction rating for charging experience</li>
        <li><strong>Usage Rates:</strong> 78% average utilization across all charging stations</li>
        <li><strong>Repeat Customers:</strong> 67% of charging customers returned within 30 days</li>
        <li><strong>Net Promoter Score:</strong> +42 for the charging experience</li>
      </ul>

      <h3>Operational Benefits</h3>
      <ul>
        <li><strong>Foot Traffic:</strong> 12% increase in overall shopping center visits</li>
        <li><strong>Brand Perception:</strong> 89% of customers view Metro as more innovative and sustainable</li>
        <li><strong>Competitive Advantage:</strong> Differentiation from nearby shopping centers without charging</li>
        <li><strong>Future Planning:</strong> Data insights driving expansion to additional locations</li>
      </ul>
    `,
    lessons_learned: `
      <p>Several key insights emerged from this successful implementation:</p>

      <h3>Critical Success Factors</h3>
      <ul>
        <li><strong>Location Matters:</strong> Chargers placed near high-traffic entrances saw 40% higher utilization</li>
        <li><strong>Customer Communication:</strong> Clear signage and app notifications were crucial for user adoption</li>
        <li><strong>Staff Training:</strong> Well-informed staff significantly improved customer satisfaction</li>
        <li><strong>Pricing Strategy:</strong> Dynamic pricing optimized both revenue and utilization</li>
      </ul>

      <h3>Unexpected Benefits</h3>
      <ul>
        <li>Charging customers became brand ambassadors, recommending the centers to other EV owners</li>
        <li>The charging amenity attracted new retail tenants interested in the eco-friendly customer base</li>
        <li>Media coverage of the initiative generated significant positive PR for the brand</li>
        <li>Employee satisfaction increased due to pride in working for an innovative, sustainable company</li>
      </ul>
    `,
    next_steps: `
      <p>Building on this success, Metro Shopping Centers is expanding their EV charging program:</p>

      <ul>
        <li><strong>Network Expansion:</strong> Rolling out charging to 25 additional locations over the next 12 months</li>
        <li><strong>Technology Upgrades:</strong> Adding ultra-fast 350kW chargers at flagship locations</li>
        <li><strong>Enhanced Services:</strong> Exploring valet charging and delivery services for charging customers</li>
        <li><strong>Sustainability Goals:</strong> Integrating solar canopies and energy storage for renewable charging</li>
        <li><strong>Partnership Growth:</strong> Developing relationships with EV manufacturers for exclusive promotions</li>
      </ul>

      <p>The success at Metro Shopping Centers demonstrates the significant business potential of retail EV charging when implemented strategically with the right technology partner.</p>
    `
  };

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
      {/* Header */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/case-studies" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getIconColor(caseStudy.industry)}`}>
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <Badge variant="outline" className="mb-2">{caseStudy.industry}</Badge>
                  <h2 className="text-gray-600">{caseStudy.client}</h2>
                </div>
              </div>

              <h1 className="text-3xl lg:text-4xl text-gray-900 mb-6 leading-tight">
                {caseStudy.title}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {caseStudy.description}
              </p>

              <div className="flex items-center space-x-4">
                <Button variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Case Study
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-gray-900 mb-4">Project Overview</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Building className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-600">Industry</p>
                        <p className="text-gray-900">{caseStudy.industry}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-600">Location</p>
                        <p className="text-gray-900">{caseStudy.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-600">Duration</p>
                        <p className="text-gray-900">{caseStudy.duration}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl text-gray-900 mb-4">
              Key Results
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Measurable impact across all key performance indicators
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudy.results.map((result, index) => {
              const Icon = result.icon;
              return (
                <Card key={index} className="bg-white text-center shadow-lg border-0">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div className="text-3xl text-gray-900 mb-2">{result.metric}</div>
                    <div className="text-gray-600 mb-3">{result.label}</div>
                    <p className="text-sm text-gray-500">{result.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Quote className="w-12 h-12 text-white/60 mx-auto mb-8" />
            <blockquote className="text-xl lg:text-2xl leading-relaxed mb-8">
              "{caseStudy.testimonial.quote}"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <ImageWithFallback
                  src={caseStudy.testimonial.image}
                  alt={caseStudy.testimonial.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-white">{caseStudy.testimonial.author}</p>
                <p className="text-white/80">{caseStudy.testimonial.role}</p>
                <p className="text-white/60">{caseStudy.testimonial.company}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              {/* Challenge */}
              <div className="mb-12">
                <h2 className="text-2xl text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-red-600">1</span>
                  </div>
                  The Challenge
                </h2>
                <div 
                  className="prose prose-lg max-w-none prose-gray"
                  dangerouslySetInnerHTML={{ __html: caseStudy.challenge }}
                />
              </div>

              {/* Solution */}
              <div className="mb-12">
                <h2 className="text-2xl text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-blue-600">2</span>
                  </div>
                  The Solution
                </h2>
                <div 
                  className="prose prose-lg max-w-none prose-gray"
                  dangerouslySetInnerHTML={{ __html: caseStudy.solution }}
                />
              </div>

              {/* Implementation */}
              <div className="mb-12">
                <h2 className="text-2xl text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-orange-600">3</span>
                  </div>
                  Implementation
                </h2>
                <div 
                  className="prose prose-lg max-w-none prose-gray"
                  dangerouslySetInnerHTML={{ __html: caseStudy.implementation }}
                />
              </div>

              {/* Results */}
              <div className="mb-12">
                <h2 className="text-2xl text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-emerald-600">4</span>
                  </div>
                  Detailed Results
                </h2>
                <div 
                  className="prose prose-lg max-w-none prose-gray"
                  dangerouslySetInnerHTML={{ __html: caseStudy.results_detailed }}
                />
              </div>

              {/* Lessons Learned */}
              <div className="mb-12">
                <h2 className="text-2xl text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-purple-600">5</span>
                  </div>
                  Lessons Learned
                </h2>
                <div 
                  className="prose prose-lg max-w-none prose-gray"
                  dangerouslySetInnerHTML={{ __html: caseStudy.lessons_learned }}
                />
              </div>

              {/* Next Steps */}
              <div className="mb-12">
                <h2 className="text-2xl text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-teal-600">6</span>
                  </div>
                  What's Next
                </h2>
                <div 
                  className="prose prose-lg max-w-none prose-gray"
                  dangerouslySetInnerHTML={{ __html: caseStudy.next_steps }}
                />
              </div>

              {/* Tags */}
              <div className="border-t pt-8">
                <h3 className="text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tags.map((tag, index) => (
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
                    <h3 className="text-gray-900 mb-4">Share this study</h3>
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
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact */}
                <Card className="bg-gradient-to-br from-emerald-50 to-blue-50">
                  <CardContent className="p-6">
                    <h3 className="text-gray-900 mb-2">Interested in similar results?</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Learn how ChargeEV can help your business succeed.
                    </p>
                    <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700">
                      Contact Sales
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-gray-900 mb-8">Related Case Studies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "GreenLogistics: 30% Cost Reduction Through Fleet Optimization", industry: "Transportation" },
              { title: "TechCorp Campus: Employee-First EV Strategy", industry: "Technology" },
              { title: "University Campus: Supporting Next Generation Users", industry: "Education" }
            ].map((study, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">{study.industry}</Badge>
                  <h3 className="text-gray-900 mb-4 line-clamp-2">{study.title}</h3>
                  <Button variant="outline" size="sm" className="w-full">
                    View Case Study
                  </Button>
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-6 text-white/90">
            Join Metro Shopping Centers and other industry leaders who are driving growth with ChargeEV.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-emerald-600 hover:bg-gray-100">
              Schedule a Consultation
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Download All Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}