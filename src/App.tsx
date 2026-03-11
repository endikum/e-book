import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Author from './components/Author';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import StoreLinks from './components/StoreLinks';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <CTA />
        <Author />
        <Testimonials />
        <FAQ />
        <StoreLinks />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
