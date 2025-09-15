import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  Zap, 
  Users, 
  Globe, 
  Shield, 
  Smartphone, 
  BarChart3,
  ArrowRight,
  Star,
  MapPin,
  Clock,
  Wallet,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

export function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-emerald-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-lg">
              <Badge className="mb-6 bg-emerald-500/20 text-emerald-300 border-emerald-500/30 backdrop-blur-sm">
                <Zap className="w-4 h-4 mr-2" />
                Powering the Future of Mobility
              </Badge>
              <h1 className="text-4xl lg:text-6xl mb-6 leading-tight">
                The Definitive Platform for Seamless EV Charging
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Experience effortless charging as a user, or unlock powerful network management 
                as a business. One platform, endless possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link to="/drivers">
                    For Users
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                  <Link to="/business">For Business</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-emerald-500/10 rounded-3xl p-8 backdrop-blur-sm border border-emerald-500/20 shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXR3b3JrfGVufDF8fHx8MTc1Nzg4MDEwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Abstract technology network"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-600 mb-8">Trusted by industry leaders worldwide</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl text-emerald-600 mb-2">25,000+</div>
              <div className="text-gray-600">Charging Points</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Cities</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl text-indigo-600 mb-2">500K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl text-purple-600 mb-2">99.5%</div>
              <div className="text-gray-600">Network Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* User Value Proposition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-emerald-50 text-emerald-700 border-emerald-200">
                <Users className="w-4 h-4 mr-2" />
                For EV Users
              </Badge>
              <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">
                Charging Made Effortless, Every Time
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Find, use, and pay for charging with complete peace of mind. 
                Our unified network puts thousands of chargers at your fingertips.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Effortless Discovery</h3>
                    <p className="text-gray-600 leading-relaxed">Find the perfect charger with real-time availability and intelligent route planning.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Total Control</h3>
                    <p className="text-gray-600 leading-relaxed">Manage sessions, payments, and history from our intuitive mobile app.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Unified Network</h3>
                    <p className="text-gray-600 leading-relaxed">Access thousands of chargers across multiple networks with a single account.</p>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Link to="/drivers">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-white rounded-2xl p-8 shadow-xl border-0">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-gray-900">ChargeEV App</h4>
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-100 rounded w-full"></div>
                    <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                    <div className="h-32 bg-emerald-50 rounded-xl flex items-center justify-center">
                      <MapPin className="w-12 h-12 text-emerald-600" />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-12 bg-gray-50 rounded-lg"></div>
                      <div className="h-12 bg-emerald-600 rounded-lg"></div>
                      <div className="h-12 bg-gray-50 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
                <BarChart3 className="w-4 h-4 mr-2" />
                For Business
              </Badge>
              <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">
                Empower Your Network. Grow Your Business.
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your charging infrastructure into a profitable, intelligent network 
                with our comprehensive management platform.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Revenue Generation</h3>
                    <p className="text-gray-600 leading-relaxed">Monetize your network with flexible pricing models and payment solutions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Fleet Management</h3>
                    <p className="text-gray-600 leading-relaxed">Unified view of your entire fleet's charging needs, costs, and utilization.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Operational Excellence</h3>
                    <p className="text-gray-600 leading-relaxed">Remote management and diagnostics ensure maximum uptime and efficiency.</p>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/business">
                  Partner with Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="lg:order-1 relative">
              <div className="bg-gray-900 rounded-2xl p-8 text-white shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h4>Network Dashboard</h4>
                    <div className="text-emerald-400 text-sm flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                      Live
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="text-2xl text-emerald-400 mb-1">1,247</div>
                      <div className="text-sm text-gray-400">Active Sessions</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="text-2xl text-blue-400 mb-1">$12.4K</div>
                      <div className="text-sm text-gray-400">Today's Revenue</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="text-2xl text-yellow-400 mb-1">96.8%</div>
                      <div className="text-sm text-gray-400">Uptime</div>
                    </div>
                  </div>
                  <div className="h-32 bg-gray-800 rounded-lg flex items-center justify-center">
                    <div className="text-gray-400">Network Analytics Chart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-8">
            Our Mission: Accelerating the Electric Future
          </h2>
          <p className="text-xl leading-relaxed text-white/90 max-w-3xl mx-auto">
            We believe that sustainable mobility should be accessible, reliable, and effortless for everyone. 
            By connecting users, businesses, and communities through our intelligent charging platform, 
            we're building the foundation for a cleaner, more connected world.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our partners and users are saying about ChargeEV
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "ChargeEV transformed our fleet operations. We've reduced charging costs by 30% while improving user satisfaction.",
                author: "Sarah Chen",
                role: "Fleet Manager",
                company: "GreenLogistics Corp",
                rating: 5
              },
              {
                quote: "The unified network approach is genius. One app for thousands of chargers - exactly what EV users needed.",
                author: "Marcus Rodriguez",
                role: "EV User",
                company: "San Francisco",
                rating: 5
              },
              {
                quote: "Revenue from our charging stations increased 150% after partnering with ChargeEV. The analytics are incredible.",
                author: "Jennifer Park",
                role: "Property Manager",
                company: "Metro Shopping Centers",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="text-gray-900 mb-1">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">
            Ready to Charge Into the Future?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of users and businesses already using ChargeEV 
            for their EV charging needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/drivers">Start as a User</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}