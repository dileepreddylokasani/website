import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Input } from '../ui/input';
import { 
  Search, 
  MessageCircle, 
  Users,
  Building,
  Smartphone,
  CreditCard,
  Shield,
  Zap
} from 'lucide-react';

export function FAQsPage() {
  const faqCategories = [
    {
      icon: Users,
      title: "For Users",
      color: "blue",
      faqs: [
        {
          question: "How do I get started with ChargeEV?",
          answer: "Getting started is simple! Download the ChargeEV app from your device's app store, create an account, add a payment method, and you're ready to start charging. The entire process takes less than 5 minutes."
        },
        {
          question: "How do I find charging stations near me?",
          answer: "Open the ChargeEV app and use the map view to see all available charging stations in your area. You can filter by charging speed, availability, pricing, and connector type to find the perfect match for your needs."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, debit cards, Apple Pay, Google Pay, and PayPal. You can also set up automatic payments for seamless charging experiences."
        },
        {
          question: "Can I reserve a charging station in advance?",
          answer: "Yes! Many of our partner stations support reservations. Look for the 'Reserve' button in the app when viewing available chargers. You can reserve a spot up to 24 hours in advance."
        },
        {
          question: "What if a charging station isn't working?",
          answer: "If you encounter any issues with a charging station, please report it through the app immediately. Our support team is available 24/7 to help resolve problems and find you an alternative nearby station."
        }
      ]
    },
    {
      icon: Building,
      title: "For Businesses",
      color: "green",
      faqs: [
        {
          question: "What types of businesses can partner with ChargeEV?",
          answer: "We work with charge point operators (CPOs), fleet managers, property owners, retailers, hospitality businesses, and any organization looking to offer EV charging services to their customers or employees."
        },
        {
          question: "How long does it take to integrate with ChargeEV?",
          answer: "Integration timeline varies based on your setup, but most businesses are live on our platform within 2-4 weeks. This includes hardware integration, software setup, testing, and staff training."
        },
        {
          question: "What hardware is compatible with ChargeEV?",
          answer: "We support a wide range of charging hardware from leading manufacturers. Our platform works with Level 2 AC chargers, DC fast chargers, and various connector types including CCS, CHAdeMO, and Tesla."
        },
        {
          question: "How do you handle revenue sharing?",
          answer: "Our revenue sharing model is transparent and competitive. You set your pricing, and we take a small percentage of each transaction to cover platform costs, payment processing, and ongoing support."
        },
        {
          question: "What support do you provide to business partners?",
          answer: "We provide comprehensive support including 24/7 technical assistance, dedicated account management, marketing support, analytics and reporting, and ongoing platform updates and improvements."
        }
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      color: "purple",
      faqs: [
        {
          question: "Is the ChargeEV app free to download?",
          answer: "Yes, the ChargeEV app is completely free to download and use. There are no subscription fees or monthly charges. You only pay for the electricity you use when charging."
        },
        {
          question: "Can I use the app without creating an account?",
          answer: "You can browse charging locations without an account, but you'll need to create one to start charging sessions, save favorites, view history, and access all app features."
        },
        {
          question: "Does the app work offline?",
          answer: "The app requires an internet connection to show real-time availability and start charging sessions. However, your saved locations and charging history are cached for offline viewing."
        },
        {
          question: "Can I monitor my charging session remotely?",
          answer: "Absolutely! Once you start a charging session, you can monitor progress, receive notifications when charging is complete, and even stop the session remotely from anywhere."
        },
        {
          question: "How do I update my payment information?",
          answer: "Go to the 'Account' section in the app, tap 'Payment Methods,' and you can add, remove, or update your payment information. All payment data is securely encrypted and stored."
        }
      ]
    },
    {
      icon: Shield,
      title: "Safety & Security",
      color: "red",
      faqs: [
        {
          question: "How secure is my payment information?",
          answer: "We use industry-standard encryption and PCI DSS compliance to protect your payment information. Your credit card details are never stored on our servers and are processed securely through certified payment processors."
        },
        {
          question: "What safety measures are in place at charging stations?",
          answer: "All charging stations on our network must meet strict safety standards including proper grounding, emergency shutoffs, weatherproof construction, and regular maintenance inspections."
        },
        {
          question: "Can I charge in any weather conditions?",
          answer: "Yes, our network stations are designed for all-weather operation. However, for your safety, avoid charging during severe thunderstorms or other extreme weather conditions."
        },
        {
          question: "What happens if there's an emergency during charging?",
          answer: "All stations have emergency stop buttons. If you experience any emergency, immediately stop the charging session and contact our 24/7 support line. Emergency services can also remotely shut down stations if needed."
        },
        {
          question: "How do you protect my personal data?",
          answer: "We follow strict privacy policies and only collect data necessary to provide our services. Your personal information is encrypted, never sold to third parties, and you have full control over your data preferences."
        }
      ]
    },
    {
      icon: CreditCard,
      title: "Billing & Pricing",
      color: "orange",
      faqs: [
        {
          question: "How is charging billed?",
          answer: "Charging is typically billed per kilowatt-hour (kWh) of energy consumed, though some stations may charge by time. Pricing is always displayed upfront before you start charging, with no hidden fees."
        },
        {
          question: "Are there any membership fees?",
          answer: "No, there are no monthly or annual membership fees. ChargeEV is completely pay-as-you-go. You only pay for the electricity you use."
        },
        {
          question: "Can I get a receipt for my charging sessions?",
          answer: "Yes, detailed receipts are automatically generated for every charging session and sent to your email. You can also view and download receipts from your account history in the app."
        },
        {
          question: "Do you offer fleet or bulk pricing?",
          answer: "Yes, we offer special pricing for fleet customers and high-volume users. Contact our sales team to discuss custom pricing options based on your specific needs and usage patterns."
        },
        {
          question: "What if I'm overcharged or see an error?",
          answer: "If you notice any billing discrepancies, contact our support team immediately. We investigate all billing issues promptly and provide full refunds for any errors or overcharges."
        }
      ]
    },
    {
      icon: Zap,
      title: "Technical",
      color: "yellow",
      faqs: [
        {
          question: "What charging speeds do you support?",
          answer: "Our network includes Level 2 AC chargers (up to 22kW) for overnight charging and DC fast chargers (50kW to 350kW) for rapid charging during travel. Charging speeds depend on your vehicle's capabilities."
        },
        {
          question: "Is my EV compatible with ChargeEV?",
          answer: "We support virtually all electric vehicles through various connector types including CCS Combo, CHAdeMO, Type 2, and Tesla (with adapter). Check the app to see connector types available at each station."
        },
        {
          question: "Why is my charging speed slower than advertised?",
          answer: "Charging speeds can vary based on your vehicle's battery level, temperature, vehicle settings, and the charger's current load. Charging typically slows down as your battery approaches full capacity."
        },
        {
          question: "Can I charge multiple vehicles on the same account?",
          answer: "Yes, you can add multiple vehicles to your account and easily switch between them when starting charging sessions. Each vehicle can have its own preferences and settings."
        },
        {
          question: "What should I do if charging stops unexpectedly?",
          answer: "First, check your vehicle's display for any error messages. Try restarting the session through the app. If problems persist, contact our 24/7 support team for immediate assistance."
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 text-blue-700",
      green: "bg-green-50 border-green-200 text-green-700",
      purple: "bg-purple-50 border-purple-200 text-purple-700",
      red: "bg-red-50 border-red-200 text-red-700",
      orange: "bg-orange-50 border-orange-200 text-orange-700",
      yellow: "bg-yellow-50 border-yellow-200 text-yellow-700"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-500/20 text-blue-100 border-blue-400/30">
              Help Center
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Find quick answers to common questions about ChargeEV's platform, 
              mobile app, and charging services.
            </p>
            <div className="max-w-md mx-auto relative">
              <Input
                type="text"
                placeholder="Search for answers..."
                className="pl-10 pr-4 py-3 bg-white/10 border-white/20 text-white placeholder-white/60"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Browse by category
            </h2>
            <p className="text-xl text-gray-600">
              Find answers organized by topic and user type
            </p>
          </div>

          {faqCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div key={categoryIndex} className="mb-16">
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(category.color)}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-0">
                    <Accordion type="multiple" className="w-full">
                      {category.faqs.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`} className="border-b border-gray-100 last:border-b-0">
                          <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-gray-50">
                            <span className="font-semibold text-gray-900">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-8 pb-6 pt-0">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99.2%</div>
              <div className="text-gray-600">Issues Resolved</div>
              <div className="text-sm text-gray-500 mt-1">Within 24 hours</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">&lt;2 min</div>
              <div className="text-gray-600">Avg Response Time</div>
              <div className="text-sm text-gray-500 mt-1">Live chat support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
              <div className="text-sm text-gray-500 mt-1">Never leave you stranded</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Satisfaction Score</div>
              <div className="text-sm text-gray-500 mt-1">From 50K+ users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Still need help?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Can't find the answer you're looking for? Our support team is here to help 
            with any questions about ChargeEV.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-sm text-gray-600 mb-4">Get instant help from our support team</p>
                <Button size="sm" className="w-full">Start Chat</Button>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-sm text-gray-600 mb-4">Send us a detailed message</p>
                <Button size="sm" variant="outline" className="w-full">Send Email</Button>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-sm text-gray-600 mb-4">Speak directly with our team</p>
                <Button size="sm" variant="outline" className="w-full">Call Now</Button>
              </CardContent>
            </Card>
          </div>

          <p className="text-sm text-gray-500">
            Emergency charging issues? Call our 24/7 hotline: <strong>1-800-CHARGE-1</strong>
          </p>
        </div>
      </section>
    </div>
  );
}