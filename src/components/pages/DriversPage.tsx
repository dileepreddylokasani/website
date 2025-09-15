import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  MapPin, 
  Smartphone, 
  Globe, 
  CreditCard,
  Clock,
  Shield,
  Zap,
  Navigation,
  Battery,
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp
} from 'lucide-react';

export function DriversPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <Badge className="mb-6 bg-emerald-500/20 text-emerald-100 border-emerald-400/30 backdrop-blur-sm">
                <Users className="w-4 h-4 mr-2" />
                For EV Users
              </Badge>
              <h1 className="text-4xl lg:text-6xl mb-6 leading-tight">
                Effortless Charging, Every Time
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Find, use, and pay for EV charging with complete confidence. 
                Our intelligent platform makes charging as simple as fueling up used to be.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  Download App
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                  Find Chargers Near Me
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-white/10 rounded-3xl p-8 backdrop-blur-sm border border-emerald-400/20 shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1672542128826-5f0d578713d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBjaGFyZ2luZyUyMHN0YXRpb258ZW58MXx8fHwxNzU3OTIwNDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Electric vehicle charging station"
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl text-emerald-600 mb-2">25,000+</div>
              <div className="text-gray-600">Charging Points</div>
              <div className="text-sm text-gray-500 mt-1">Across 50+ cities</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl text-blue-600 mb-2">99.5%</div>
              <div className="text-gray-600">Network Uptime</div>
              <div className="text-sm text-gray-500 mt-1">Reliable when you need it</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl text-indigo-600 mb-2">30s</div>
              <div className="text-gray-600">Average Start Time</div>
              <div className="text-sm text-gray-500 mt-1">From app to charging</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
              <div className="text-sm text-gray-500 mt-1">Always here to help</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Everything You Need for Seamless Charging
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform removes every friction point from the EV charging experience, 
              so you can focus on the road ahead.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-4">
                  Effortless Discovery
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Find the perfect charger, every time, with our real-time network map. 
                  Filter by speed, availability, and pricing to match your exact needs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-4">
                  Total Control
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Manage your charging sessions, payments, and history from our intuitive app. 
                  Start, stop, and monitor charging remotely with complete control.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-4">
                  Unified Network
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Access a vast network of chargers with a single account. 
                  No more juggling multiple apps or payment methods.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CreditCard className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-4">
                  Simple Payments
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Transparent pricing with automatic payments. See costs upfront, 
                  pay securely, and get detailed receipts instantly.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-4">
                  Reliable & Safe
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every charger on our network meets strict safety standards. 
                  24/7 support ensures you're never stranded.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-4">
                  Smart Charging
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Intelligent routing and predictive availability help you charge efficiently. 
                  Save time and reduce range anxiety.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Your Charging Companion
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The ChargeEV app puts powerful charging tools in your pocket
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Navigation className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Smart Route Planning</h3>
                    <p className="text-gray-600 leading-relaxed">Plan your journey with charging stops automatically calculated based on your vehicle's range and real-time traffic.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Real-time Availability</h3>
                    <p className="text-gray-600 leading-relaxed">See which chargers are available right now. Reserve your spot ahead of time to guarantee access.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Battery className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Charging History</h3>
                    <p className="text-gray-600 leading-relaxed">Track your charging patterns, costs, and carbon savings with detailed analytics and insights.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 mb-2">Personalized Experience</h3>
                    <p className="text-gray-600 leading-relaxed">Set your preferences for charging speed, pricing, and location types to get tailored recommendations.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-900 rounded-3xl p-8 aspect-[3/4] flex flex-col shadow-2xl">
                <div className="flex items-center justify-between mb-6 text-white">
                  <h4>ChargeEV</h4>
                  <div className="flex items-center space-x-1">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-600 to-blue-600 rounded-2xl p-6 mb-6 flex-1">
                  <div className="text-white mb-4">
                    <div className="text-sm opacity-75">Current Session</div>
                    <div className="text-2xl">Fast Charging</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-white">
                    <div>
                      <div className="text-sm opacity-75">Time Remaining</div>
                      <div className="text-lg">23 min</div>
                    </div>
                    <div>
                      <div className="text-sm opacity-75">Power</div>
                      <div className="text-lg">150 kW</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-gray-800 rounded-lg p-3 flex items-center justify-between text-white">
                    <span className="text-sm">Find Chargers</span>
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 flex items-center justify-between text-white">
                    <span className="text-sm">Payment Methods</span>
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 flex items-center justify-between text-white">
                    <span className="text-sm">Charging History</span>
                    <Battery className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Get Started in Three Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Begin your seamless charging experience today
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl shadow-lg">
                1
              </div>
              <h3 className="text-xl text-gray-900 mb-4">Download & Setup</h3>
              <p className="text-gray-600 leading-relaxed">
                Download the ChargeEV app, create your account, and add your payment method. 
                Setup takes less than 2 minutes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl shadow-lg">
                2
              </div>
              <h3 className="text-xl text-gray-900 mb-4">Find & Reserve</h3>
              <p className="text-gray-600 leading-relaxed">
                Use our map to find nearby chargers, check availability, and reserve your spot. 
                Navigate directly using your preferred maps app.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl shadow-lg">
                3
              </div>
              <h3 className="text-xl text-gray-900 mb-4">Plug In & Relax</h3>
              <p className="text-gray-600 leading-relaxed">
                Scan the QR code or tap your phone to start charging. 
                Monitor progress and receive notifications when complete.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300">
              Download ChargeEV App
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">
            Ready to Transform Your EV Experience?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join over 500,000 users who trust ChargeEV for their charging needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
              Download for iOS
            </Button>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
              Download for Android
            </Button>
          </div>
          <p className="text-sm mt-6 text-white/75">
            Free to download • No subscription fees • Pay only for what you use
          </p>
        </div>
      </section>
    </div>
  );
}