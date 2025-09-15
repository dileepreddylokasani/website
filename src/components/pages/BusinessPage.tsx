import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  BarChart3, 
  Users, 
  Shield, 
  Zap,
  TrendingUp,
  Settings,
  Globe,
  DollarSign,
  ArrowRight,
  CheckCircle,
  Wrench,
  Target
} from 'lucide-react';

export function BusinessPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <Badge className="mb-6 bg-green-500/20 text-green-100 border-green-400/30">
                For Business
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Empower your network. Grow your business.
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Transform your charging infrastructure into an intelligent, profitable network 
                with our comprehensive management platform designed for CPOs and fleet operators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Contact Sales
                </Button>
                <Button size="lg" variant="outline" className="border-green-300/30 text-white hover:bg-white/10">
                  Request Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-3xl p-8 aspect-[4/5]">
                <div className="text-white space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Network Dashboard</h4>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-400">$47.2K</div>
                      <div className="text-sm text-gray-400">Monthly Revenue</div>
                      <div className="text-xs text-green-400">↗ +23%</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-400">1,847</div>
                      <div className="text-sm text-gray-400">Active Sessions</div>
                      <div className="text-xs text-blue-400">Live</div>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-400">Network Utilization</span>
                      <span className="text-white font-semibold">87%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: '87%' }}></div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-gray-800 rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm">Station Alpha-01</span>
                      </div>
                      <span className="text-green-400 text-sm">Online</span>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-sm">Station Beta-05</span>
                      </div>
                      <span className="text-yellow-400 text-sm">Maintenance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Transform your charging business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform provides everything you need to operate, optimize, and scale 
              your EV charging network profitably.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Revenue Generation
                </h3>
                <p className="text-gray-600 mb-6">
                  Monetize your network with flexible business models, dynamic pricing, 
                  and comprehensive payment solutions that maximize profitability.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Dynamic pricing optimization</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Multiple payment methods</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Revenue analytics & forecasting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Fleet Management
                </h3>
                <p className="text-gray-600 mb-6">
                  Gain unified visibility into your entire fleet's charging needs, costs, 
                  and utilization patterns with intelligent fleet optimization.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Centralized fleet dashboard</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Cost tracking & optimization</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Usage analytics & reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Operational Excellence
                </h3>
                <p className="text-gray-600 mb-6">
                  Ensure maximum uptime and efficiency with powerful remote management 
                  and diagnostic tools that prevent issues before they occur.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Remote monitoring & control</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">Predictive maintenance alerts</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">24/7 technical support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Data-Driven Insights
                </h3>
                <p className="text-gray-600 mb-6">
                  Leverage comprehensive analytics to optimize performance, understand 
                  usage patterns, and plan for future growth with confidence.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">Real-time performance metrics</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">Utilization & demand analysis</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <span className="text-gray-700">Growth planning tools</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard Visual */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Your command center for EV charging
            </h2>
            <p className="text-xl text-gray-600">
              Monitor, manage, and optimize your entire network from one powerful dashboard
            </p>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="text-green-400 text-sm">+18%</span>
                </div>
                <div className="text-2xl font-bold mb-1">$127.4K</div>
                <div className="text-gray-400 text-sm">Monthly Revenue</div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="text-blue-400 text-sm">Live</span>
                </div>
                <div className="text-2xl font-bold mb-1">3,247</div>
                <div className="text-gray-400 text-sm">Active Sessions</div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <span className="text-purple-400 text-sm">94%</span>
                </div>
                <div className="text-2xl font-bold mb-1">847</div>
                <div className="text-gray-400 text-sm">Total Stations</div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5" />
                  </div>
                  <span className="text-green-400 text-sm">99.2%</span>
                </div>
                <div className="text-2xl font-bold mb-1">838</div>
                <div className="text-gray-400 text-sm">Online Stations</div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-xl p-6">
                <h4 className="font-semibold mb-4">Network Performance</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Utilization Rate</span>
                      <span className="text-white">87%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: '87%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Peak Hour Usage</span>
                      <span className="text-white">94%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Customer Satisfaction</span>
                      <span className="text-white">96%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full" style={{ width: '96%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6">
                <h4 className="font-semibold mb-4">Station Status</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-sm">Downtown Hub</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-400">8/10 Active</span>
                      <span className="text-green-400 text-sm">Online</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-sm">Airport Plaza</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-400">12/12 Active</span>
                      <span className="text-green-400 text-sm">Online</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <span className="text-sm">Mall District</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-400">5/6 Active</span>
                      <span className="text-yellow-400 text-sm">Maintenance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Proven results for our partners
            </h2>
            <p className="text-xl text-gray-600">
              See the impact ChargeGrid has on charging network performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">150%</div>
              <div className="text-gray-900 font-medium">Revenue Increase</div>
              <div className="text-sm text-gray-600 mt-1">Average partner growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">99.2%</div>
              <div className="text-gray-900 font-medium">Network Uptime</div>
              <div className="text-sm text-gray-600 mt-1">Industry-leading reliability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">30%</div>
              <div className="text-gray-900 font-medium">Cost Reduction</div>
              <div className="text-sm text-gray-600 mt-1">In operational expenses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">2x</div>
              <div className="text-gray-900 font-medium">Faster ROI</div>
              <div className="text-sm text-gray-600 mt-1">Compared to alternatives</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner with Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to transform your charging business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join industry leaders who trust ChargeGrid to power their EV charging networks. 
              Our team of experts will help you maximize your ROI and deliver exceptional customer experiences.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">White-Glove Setup</h3>
                <p className="text-gray-600 text-sm">Our experts handle the complete integration process</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Dedicated Support</h3>
                <p className="text-gray-600 text-sm">24/7 technical support and account management</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Scalable Growth</h3>
                <p className="text-gray-600 text-sm">Platform grows with your business needs</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Contact Sales Team
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Demo
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 mt-6">
              No setup fees • Transparent pricing • 30-day trial available
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to write your success story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join these industry leaders and discover how ChargeEV can transform your business.
          </p>
          <Button size="lg" asChild className="bg-white text-green-600 hover:bg-gray-100">
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}