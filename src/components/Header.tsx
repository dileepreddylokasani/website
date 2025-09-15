import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl text-gray-900 group-hover:text-emerald-600 transition-colors">ChargeEV</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                isActive('/') 
                  ? 'text-emerald-600 bg-emerald-50' 
                  : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-50'
              }`}
            >
              Home
            </Link>

            {/* Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-gray-50 rounded-lg transition-all duration-200">
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 shadow-lg border-0 bg-white/95 backdrop-blur-md">
                <DropdownMenuItem asChild className="focus:bg-emerald-50 focus:text-emerald-600">
                  <Link to="/drivers" className="w-full">For Users</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="focus:bg-emerald-50 focus:text-emerald-600">
                  <Link to="/business" className="w-full">For Business</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Company Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-gray-50 rounded-lg transition-all duration-200">
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 shadow-lg border-0 bg-white/95 backdrop-blur-md">
                <DropdownMenuItem asChild className="focus:bg-emerald-50 focus:text-emerald-600">
                  <Link to="/about" className="w-full">About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="focus:bg-emerald-50 focus:text-emerald-600">
                  <Link to="/careers" className="w-full">Careers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="focus:bg-emerald-50 focus:text-emerald-600">
                  <Link to="/news" className="w-full">Newsroom</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 px-4 py-2 text-sm text-gray-600 hover:text-emerald-600 hover:bg-gray-50 rounded-lg transition-all duration-200">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 shadow-lg border-0 bg-white/95 backdrop-blur-md">
                <DropdownMenuItem asChild className="focus:bg-emerald-50 focus:text-emerald-600">
                  <Link to="/blog" className="w-full">Blog</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="focus:bg-emerald-50 focus:text-emerald-600">
                  <Link to="/case-studies" className="w-full">Case Studies</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="focus:bg-emerald-50 focus:text-emerald-600">
                  <Link to="/faqs" className="w-full">FAQs</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/contact"
              className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                isActive('/contact') 
                  ? 'text-emerald-600 bg-emerald-50' 
                  : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="space-y-4">
              <Link
                to="/"
                className="block px-4 py-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="space-y-3">
                <span className="block px-4 text-sm text-gray-500 uppercase tracking-wide">Solutions</span>
                <Link
                  to="/drivers"
                  className="block pl-8 pr-4 py-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  For Users
                </Link>
                <Link
                  to="/business"
                  className="block pl-8 pr-4 py-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  For Business
                </Link>
              </div>
              <div className="space-y-3">
                <span className="block px-4 text-sm text-gray-500 uppercase tracking-wide">Company</span>
                <Link
                  to="/about"
                  className="block pl-8 pr-4 py-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/careers"
                  className="block pl-8 pr-4 py-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Careers
                </Link>
                <Link
                  to="/news"
                  className="block pl-8 pr-4 py-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Newsroom
                </Link>
              </div>
              <div className="space-y-3">
                <span className="block px-4 text-sm text-gray-500 uppercase tracking-wide">Resources</span>
                <Link
                  to="/blog"
                  className="block pl-8 pr-4 py-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  to="/case-studies"
                  className="block pl-8 pr-4 py-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Case Studies
                </Link>
                <Link
                  to="/faqs"
                  className="block pl-8 pr-4 py-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQs
                </Link>
              </div>
              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 px-4">
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white shadow-lg">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}