import React, { useState } from 'react';
import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import ProgramOverview from '../components/ProgramOverview';
import Outcomes from '../components/Outcomes';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import CTASection from '../components/CTASection';
import Instructor from '../components/Instructor';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import EnrollmentModal from '../components/EnrollmentModal';

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnrollClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Hero onEnrollClick={handleEnrollClick} />
      <ProblemSolution />
      <ProgramOverview />
      <Pricing onEnrollClick={handleEnrollClick} />
      <Outcomes />
      <HowItWorks />
      <CTASection onEnrollClick={handleEnrollClick} />
      <Instructor />
      <FAQ />
      <Footer />
      <EnrollmentModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default LandingPage;
