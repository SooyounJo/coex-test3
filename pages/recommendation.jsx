import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import RecommendationCard from './components/RecommendationCard';
import FeedbackSection from './components/FeedbackSection';
import InputSection from './components/InputSection';

const RecommendationPage = () => {
  return (
    <Layout>
      <Header />
      <RecommendationCard />
      <FeedbackSection />
      <InputSection />
    </Layout>
  );
};

export default RecommendationPage;