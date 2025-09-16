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
  MapPin,
  Clock,
  Wallet,
  CheckCircle,
  TrendingUp,
  Star,
  Play,
  ChevronRight,
  Battery,
  Gauge,
  Network,
  Award
} from 'lucide-react';

export function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden min-h-screen flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #4A3AFF 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #00C853 0%, transparent 50%)`
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <Badge className="mb-8 bg-gradient-to-r from-blue-500/20 to-green-500/20 text-white border-white/20 backdrop-blur-sm px-4 py-2 text-sm">
                <Zap className="w-4 h-4 mr-2" />
                The Future of EV Charging is Here
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent">
                Power Your Journey
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-200 mb-12 leading-relaxed">
                The world's most intelligent EV charging platform. Seamless for drivers, 
                powerful for businesses, transformative for the future of mobility.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg"
                >
                  <Link to="/drivers" className="flex items-center text-white">
                    Start Charging Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
              
              <div className="flex items-center space-x-8 text-slate-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Free to use</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>25K+ stations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>24/7 support</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Main Device Mockup */}
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="bg-slate-900 rounded-2xl p-6 aspect-[3/4]">
                    {/* App Interface Mockup */}
                    <div className="text-white space-y-4">
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-lg font-semibold">ChargeEV</h4>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-sm text-green-400">Live</span>
                        </div>
                      </div>
                      
                      {/* Map Area */}
                      <div className="bg-gradient-to-br from-blue-600/20 to-green-600/20 rounded-xl p-6 h-40 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10"></div>
                        <div className="relative z-10 text-center">
                          <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                          <p className="text-sm text-slate-300">12 stations nearby</p>
                        </div>
                        {/* Floating charging icons */}
                        <div className="absolute top-4 left-4 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                        <div className="absolute bottom-6 right-6 w-3 h-3 bg-blue-400 rounded-full animate-ping delay-500"></div>
                      </div>
                      
                      {/* Quick Actions */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-4 text-center">
                          <Zap className="w-6 h-6 mx-auto mb-2" />
                          <span className="text-sm">Quick Charge</span>
                        </div>
                        <div className="bg-slate-800 rounded-xl p-4 text-center border border-slate-700">
                          <Clock className="w-6 h-6 mx-auto mb-2 text-slate-400" />
                          <span className="text-sm text-slate-400">Schedule</span>
                        </div>
                      </div>
                      
                      {/* Status Bar */}
                      <div className="bg-slate-800 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-slate-400">Current Session</span>
                          <span className="text-green-400 text-sm">Active</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <Battery className="w-5 h-5 text-green-400" />
                          <div className="flex-1">
                            <div className="w-full bg-slate-700 rounded-full h-2">
                              <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full" style={{ width: '75%' }}></div>
                            </div>
                          </div>
                          <span className="text-white text-sm">75%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-3xl blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-slate-100 text-slate-700 border-slate-200">
              Platform Features
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Built for the Electric Future
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Advanced technology meets intuitive design to deliver the world's most 
              comprehensive EV charging experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Intelligent Discovery
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  AI-powered station finder with real-time availability, predictive routing, 
                  and personalized recommendations based on your driving patterns.
                </p>
                <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-700">
                  <span className="text-sm font-medium">Learn more</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Ultra-Fast Charging
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Access to 350kW+ charging speeds with smart power management 
                  that optimizes charging time while protecting your battery.
                </p>
                <div className="flex items-center justify-center text-green-600 group-hover:text-green-700">
                  <span className="text-sm font-medium">Learn more</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Network className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Unified Network
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  One platform connecting thousands of charging stations across multiple 
                  networks with seamless payment and session management.
                </p>
                <div className="flex items-center justify-center text-purple-600 group-hover:text-purple-700">
                  <span className="text-sm font-medium">Learn more</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* For Drivers Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200 px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                For EV Drivers
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Charging Made 
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Effortless</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Experience the future of EV charging with our intelligent platform that learns 
                your habits, predicts your needs, and delivers seamless charging every time.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Smart Mobile Experience</h3>
                    <p className="text-slate-600 leading-relaxed">Find, reserve, and pay for charging with our award-winning mobile app. Real-time updates keep you informed every step of the way.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Global Network Access</h3>
                    <p className="text-slate-600 leading-relaxed">Access 25,000+ charging points across 50+ cities with a single account. No more juggling multiple apps or payment methods.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Reliable & Secure</h3>
                    <p className="text-slate-600 leading-relaxed">99.5% network uptime with enterprise-grade security. Your data and payments are always protected with industry-leading encryption.</p>
                  </div>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/drivers" className="flex items-center text-white">
                  Explore for Drivers
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              {/* Phone Mockup */}
              <div className="relative mx-auto w-80">
                <div className="bg-slate-900 rounded-[3rem] p-4 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] p-6 aspect-[9/16]">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <h4 className="text-slate-900 font-semibold">Find Chargers</h4>
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <MapPin className="w-4 h-4 text-blue-600" />
                        </div>
                      </div>
                      
                      {/* Search */}
                      <div className="bg-slate-50 rounded-xl p-3 flex items-center space-x-3">
                        <div className="w-6 h-6 bg-slate-200 rounded-full"></div>
                        <div className="flex-1 h-4 bg-slate-200 rounded"></div>
                      </div>
                      
                      {/* Map */}
                      <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl h-32 flex items-center justify-center relative">
                        <div className="absolute top-4 left-4 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-4 right-4 w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                      </div>
                      
                      {/* Station List */}
                      <div className="space-y-3">
                        <div className="bg-slate-50 rounded-lg p-3 flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <div>
                              <div className="w-20 h-3 bg-slate-300 rounded mb-1"></div>
                              <div className="w-16 h-2 bg-slate-200 rounded"></div>
                            </div>
                          </div>
                          <div className="text-green-600 text-xs font-medium">Available</div>
                        </div>
                        <div className="bg-slate-50 rounded-lg p-3 flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div>
                              <div className="w-24 h-3 bg-slate-300 rounded mb-1"></div>
                              <div className="w-20 h-2 bg-slate-200 rounded"></div>
                            </div>
                          </div>
                          <div className="text-blue-600 text-xs font-medium">2 min wait</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Business Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-green-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              {/* Dashboard Mockup */}
              <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl">
                <div className="text-white space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-semibold">Network Dashboard</h4>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm">Live Data</span>
                    </div>
                  </div>
                  
                  {/* KPI Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-green-600/20 to-green-700/20 rounded-xl p-4 border border-green-500/20">
                      <div className="text-3xl font-bold text-green-400 mb-1">$47.2K</div>
                      <div className="text-sm text-slate-300">Monthly Revenue</div>
                      <div className="text-xs text-green-400 flex items-center mt-1">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        +23%
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-600/20 to-blue-700/20 rounded-xl p-4 border border-blue-500/20">
                      <div className="text-3xl font-bold text-blue-400 mb-1">1,847</div>
                      <div className="text-sm text-slate-300">Active Sessions</div>
                      <div className="text-xs text-blue-400">Real-time</div>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="bg-slate-800 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-slate-400">Network Utilization</span>
                      <span className="text-white font-semibold">87%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-green-400 to-blue-400 h-3 rounded-full" style={{ width: '87%' }}></div>
                    </div>
                  </div>

                  {/* Station Status */}
                  <div className="space-y-3">
                    <div className="bg-slate-800 rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm">Downtown Hub</span>
                      </div>
                      <span className="text-green-400 text-sm">8/10 Active</span>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-3 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                        <span className="text-sm">Airport Plaza</span>
                      </div>
                      <span className="text-blue-400 text-sm">12/12 Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Badge className="mb-6 bg-green-100 text-green-700 border-green-200 px-4 py-2">
                <BarChart3 className="w-4 h-4 mr-2" />
                For Business
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Scale Your Network with 
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Intelligence</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Transform your charging infrastructure into a profitable, data-driven network 
                with our comprehensive management platform built for CPOs and fleet operators.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Revenue Optimization</h3>
                    <p className="text-slate-600 leading-relaxed">Dynamic pricing, demand forecasting, and revenue analytics that maximize profitability while maintaining competitive rates.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Gauge className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Operational Excellence</h3>
                    <p className="text-slate-600 leading-relaxed">Remote monitoring, predictive maintenance, and automated alerts ensure maximum uptime and operational efficiency.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Data-Driven Insights</h3>
                    <p className="text-slate-600 leading-relaxed">Comprehensive analytics and reporting provide actionable insights for network optimization and strategic planning.</p>
                  </div>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/business" className="flex items-center text-white">
                  Explore for Business
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-green-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Powering the Electric Revolution
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Real numbers from real impact across our global network
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">25K+</div>
              <div className="text-slate-300">Charging Points</div>
              <div className="text-sm text-slate-400 mt-1">Across 50+ cities</div>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">500K+</div>
              <div className="text-slate-300">Active Users</div>
              <div className="text-sm text-slate-400 mt-1">Growing daily</div>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">99.5%</div>
              <div className="text-slate-300">Network Uptime</div>
              <div className="text-sm text-slate-400 mt-1">Industry leading</div>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">4.9★</div>
              <div className="text-slate-300">User Rating</div>
              <div className="text-sm text-slate-400 mt-1">App Store & Google Play</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-8 bg-white/20 text-white border-white/30 backdrop-blur-sm px-6 py-3">
            Our Mission
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Accelerating the Electric Future
          </h2>
          <p className="text-xl lg:text-2xl leading-relaxed text-white/90 max-w-4xl mx-auto">
            We believe sustainable mobility should be accessible, reliable, and effortless for everyone. 
            By connecting users, businesses, and communities through intelligent technology, 
            we're building the foundation for a cleaner, more connected world.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 lg:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                Ready to Charge Into the Future?
              </h2>
              <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join the electric revolution with the world's most advanced charging platform. 
                Whether you're a driver or a business, we have the perfect solution for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg"
                >
                  <Link to="/drivers" className="flex items-center text-white">
                    Start as a Driver
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg"
                >
                  <Link to="/business" className="flex items-center text-white">
                    Partner with Us
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-slate-400 mt-8">
                Free to get started • No setup fees • 24/7 support included
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}