import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { 
  Upload,
  ArrowRight,
  Zap,
  Users,
  Globe
} from 'lucide-react';

export function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    resume: null as File | null,
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Careers at ChargeEV
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Join us. Charge the future.
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
              Help us build the infrastructure for a sustainable world. We're looking for passionate 
              individuals who want to make a real impact on the future of transportation.
            </p>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why join ChargeEV?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building more than a product—we're creating a movement toward sustainable transportation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-blue-50 border-blue-200 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">High Impact Work</h3>
                <p className="text-gray-600">
                  Every line of code and every decision directly impacts the transition to clean energy transportation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Amazing Team</h3>
                <p className="text-gray-600">
                  Work alongside industry veterans and passionate individuals who care about making a difference.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-200 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Global Scale</h3>
                <p className="text-gray-600">
                  Build systems that serve millions of users and support the world's transition to electric mobility.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8 lg:p-12 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                "At ChargeEV, we're not just building software—we're architecting the future of transportation."
              </h3>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
                <div className="text-left">
                  <div className="font-semibold">Sarah Chen</div>
                  <div className="text-sm text-gray-300">CEO & Co-founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ready to make an impact?
            </h2>
            <p className="text-xl text-gray-600">
              Submit your information and let's start a conversation about your future with ChargeEV
            </p>
          </div>

          <Card className="bg-white shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base font-medium text-gray-900">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter your full name"
                    required
                    className="mt-2 text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="resume" className="text-base font-medium text-gray-900">Resume *</Label>
                  <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-gray-400 transition-colors">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="resume-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                        >
                          <span>Upload your resume</span>
                          <input
                            id="resume-upload"
                            name="resume-upload"
                            type="file"
                            className="sr-only"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            required
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                      {formData.resume && (
                        <p className="text-sm text-green-600 font-medium">
                          ✓ {formData.resume.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-base font-medium text-gray-900">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Tell us about yourself, your interests, and why you'd like to join ChargeEV..."
                    rows={6}
                    className="mt-2 text-base"
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-700">
                    <strong>What happens next?</strong> We review all applications carefully and will reach out within 
                    1-2 weeks if we'd like to continue the conversation. Even if there isn't a perfect fit right now, 
                    we keep all applications on file for future opportunities.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-base"
                >
                  Submit Application
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Questions about working with us?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We'd love to hear from you. Reach out to learn more about life at ChargeEV.
          </p>
          <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
            Contact Our Team
          </Button>
        </div>
      </section>
    </div>
  );
}