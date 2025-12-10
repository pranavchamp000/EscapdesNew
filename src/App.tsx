import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Workshops from './components/Workshops';
import Curriculum from './components/Curriculum';
import Team from './components/Team';
import Gallery from './components/Gallery';
import AboutAcademy from './components/AboutAcademy';
import AllBlogsPage from './components/AllBlogsPage';
import FAQ from './components/FAQ';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ApplyModal from './components/ApplyModal';

function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'blogs'>('home');

  if (currentView === 'blogs') {
    return <AllBlogsPage onBack={() => setCurrentView('home')} />;
  }

  return (
    <div className="font-sans antialiased text-dark-900 bg-white selection:bg-gold-500 selection:text-white">
      <Navbar onApplyClick={() => setIsApplyModalOpen(true)} />
      <Hero />
      <About />
      <Courses />
      <Curriculum />
      <Workshops />
      <Team />
      <Gallery />
      <AboutAcademy />
      <FAQ />
      <Reviews />
      <Contact />
      <Footer />
      
      <ApplyModal 
        isOpen={isApplyModalOpen} 
        onClose={() => setIsApplyModalOpen(false)} 
      />
    </div>
  );
}

export default App;