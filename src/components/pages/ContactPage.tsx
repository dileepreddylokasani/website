import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageCircle,
  Users,
  Building,
  ArrowRight
} from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-500/20 text-blue-100 border-blue-400/30">
              Contact Us
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Let's talk about your EV charging needs
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Whether you're a user looking for support, a business interested in our platform, 
              or a partner ready to collaborate, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h2>
                  <p className="text-gray-600 mb-8">
                    Our team is ready to help you succeed with ChargeEV. 
                    Choose the best way to reach us based on your needs.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                      <p className="text-gray-600 text-sm mb-2">For general inquiries and support</p>
                      <a href="mailto:hello@chargegrid.com" className="text-blue-600 hover:text-blue-700">
                        hello@chargegrid.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Sales Team</h3>
                      <p className="text-gray-600 text-sm mb-2">For partnerships and business inquiries</p>
                      <a href="mailto:sales@chargegrid.com" className="text-green-600 hover:text-green-700">
                        sales@chargegrid.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Customer Support</h3>
                      <p className="text-gray-600 text-sm mb-2">24/7 support for our users</p>
                      <a href="mailto:support@chargegrid.com" className="text-purple-600 hover:text-purple-700">
                        support@chargegrid.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone Support</h3>
                      <p className="text-gray-600 text-sm mb-2">Available Monday - Friday, 9AM - 6PM PST</p>
                      <a href="tel:+1-800-CHARGE-1" className="text-orange-600 hover:text-orange-700">
                        +1 (800) CHARGE-1
                      </a>
                    </div>
                  </div>
                </div>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Response Times</h3>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Sales inquiries: Within 2 hours</li>
                          <li>• Support tickets: Within 4 hours</li>
                          <li>• Partnership requests: Within 1 business day</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
                    <p className="text-gray-600">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="Enter your email address"
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Enter your company name"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="inquiry-type">Inquiry Type *</Label>
                        <Select onValueChange={(value) => handleInputChange('inquiryType', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Question</SelectItem>
                            <SelectItem value="sales">Sales Inquiry</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="press">Press & Media</SelectItem>
                            <SelectItem value="careers">Career Opportunities</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        placeholder="Enter the subject of your message"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600">
                        By submitting this form, you agree to our privacy policy and terms of service. 
                        We'll only use your information to respond to your inquiry and may contact you 
                        about relevant ChargeGrid updates.
                      </p>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Send Message
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Visit our headquarters
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Silicon Valley's clean energy ecosystem
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-gray-50 border-0">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">ChargeEV Headquarters</h3>
                      <p className="text-gray-600">
                        1234 Innovation Drive, Suite 200<br/>
                        San Francisco, CA 94105<br/>
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM PST
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-600">
                        +1 (415) 555-CHARGE
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-600">
                        visits@chargegrid.com
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-700">
                      <strong>Visiting us?</strong> Please schedule an appointment in advance. 
                      Our office features EV charging stations for all visitors.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <div className="bg-gray-200 rounded-2xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <p>Interactive Map</p>
                  <p className="text-sm">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Common questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to questions you might have before reaching out
            </p>
          </div>

          <div className="space-y-6">
            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  How quickly can I get started with ChargeGrid?
                </h3>
                <p className="text-gray-600">
                  Drivers can download our app and start charging immediately. For businesses, 
                  our onboarding process typically takes 2-4 weeks depending on your network size and requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Do you offer 24/7 customer support?
                </h3>
                <p className="text-gray-600">
                  Yes! Our customer support team is available 24/7 for charging-related issues. 
                  For general inquiries, our business hours are Monday-Friday, 9AM-6PM PST.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  What's included in a partnership with ChargeGrid?
                </h3>
                <p className="text-gray-600">
                  Our partnerships include platform access, hardware integration support, 
                  ongoing technical support, marketing collaboration, and revenue sharing opportunities.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button variant="outline">
              <MessageCircle className="w-4 h-4 mr-2" />
              View All FAQs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}