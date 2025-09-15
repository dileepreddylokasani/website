import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { DriversPage } from './components/pages/DriversPage';
import { BusinessPage } from './components/pages/BusinessPage';
import { AboutPage } from './components/pages/AboutPage';
import { CareersPage } from './components/pages/CareersPage';
import { NewsroomPage } from './components/pages/NewsroomPage';
import { BlogPage } from './components/pages/BlogPage';
import { CaseStudiesPage } from './components/pages/CaseStudiesPage';
import { FAQsPage } from './components/pages/FAQsPage';
import { ContactPage } from './components/pages/ContactPage';
import { NewsDetailPage } from './components/pages/NewsDetailPage';
import { BlogDetailPage } from './components/pages/BlogDetailPage';
import { CaseStudyDetailPage } from './components/pages/CaseStudyDetailPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drivers" element={<DriversPage />} />
            <Route path="/business" element={<BusinessPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/news" element={<NewsroomPage />} />
            <Route path="/news/:id" element={<NewsDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetailPage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}