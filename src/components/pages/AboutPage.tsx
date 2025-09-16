import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  Users, 
  Target, 
  Award, 
  Globe,
  Zap,
  Heart,
  Lightbulb,
  Shield
} from 'lucide-react';

export function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Marcus Rodriguez",
      role: "Chief Technology Officer", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Jennifer Park",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Elena Volkov",
      role: "Head of Business Development",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "James Thompson",
      role: "Chief Financial Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "Company Founded",
      description: "ChargeGrid was founded with a vision to create the world's most comprehensive EV charging platform."
    },
    {
      year: "2024",
      title: "Series A Funding",
      description: "Raised $15M Series A to accelerate platform development and market expansion."
    },
    {
      year: "2024",
      title: "First 1,000 Chargers",
      description: "Reached our first milestone of 1,000 charging points across 10 major cities."
    },
    {
      year: "2024",
      title: "100+ Cities Launch",
      description: "Expanded to over 100 cities with 10,000+ charging points in our network."
    },
    {
      year: "2025",
      title: "Series B Funding",
      description: "Secured $45M Series B to fuel international expansion and platform innovation."
    },
    {
      year: "2025",
      title: "Global Network",
      description: "Now serving 50+ cities worldwide with over 25,000 charging points."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-500/20 text-blue-100 border-blue-400/30">
              About ChargeEV
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Powering the electric revolution
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              We're building the infrastructure for a sustainable future, connecting users, 
              businesses, and communities through intelligent EV charging solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Vision: A World Powered by Clean Energy
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                At ChargeGrid, we believe that the transition to electric mobility shouldn't just be inevitable—it should be effortless. 
                We're creating a world where charging your electric vehicle is as simple and reliable as the technology that powers it.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our platform bridges the gap between the growing demand for electric vehicles and the infrastructure needed to support them. 
                By connecting users, businesses, and communities, we're not just building a charging network—we're building the foundation for a cleaner, more sustainable future.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">500K+</div>
                  <div className="text-sm text-gray-600">Happy Drivers</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">25K+</div>
                  <div className="text-sm text-gray-600">Charging Points</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Cities Served</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-8">
                  <div className="w-20 h-20 bg-blue-200 rounded-2xl flex items-center justify-center">
                    <Heart className="w-10 h-10 text-blue-600" />
                  </div>
                  <div className="w-20 h-20 bg-green-200 rounded-2xl flex items-center justify-center">
                    <Lightbulb className="w-10 h-10 text-green-600" />
                  </div>
                  <div className="w-20 h-20 bg-purple-200 rounded-2xl flex items-center justify-center">
                    <Shield className="w-10 h-10 text-purple-600" />
                  </div>
                  <div className="w-20 h-20 bg-orange-200 rounded-2xl flex items-center justify-center">
                    <Globe className="w-10 h-10 text-orange-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The values that drive us forward
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values shape everything we do, from product development to customer relationships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Innovation First</h3>
                <p className="text-gray-600 text-sm">
                  We constantly push boundaries to create solutions that don't just meet today's needs, but anticipate tomorrow's challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Human-Centric</h3>
                <p className="text-gray-600 text-sm">
                  Every decision we make starts with understanding and improving the customer experience of electric mobility.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Trust & Reliability</h3>
                <p className="text-gray-600 text-sm">
                  We build systems and relationships that people can depend on, ensuring our platform works when it matters most.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Global Impact</h3>
                <p className="text-gray-600 text-sm">
                  We're committed to making sustainable transportation accessible to communities around the world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Our Mission */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Join us in building the future
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We're always looking for passionate individuals who want to make a real impact 
            on the future of sustainable transportation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/careers"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              View Open Positions
            </a>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-base font-medium rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}