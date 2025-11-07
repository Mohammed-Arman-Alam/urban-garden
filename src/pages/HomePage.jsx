import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedGardeners from '../components/FeaturedGardeners';
import TopTrendingTips from '../components/TopTrendingTips';

const HomePage = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <FeaturedGardeners></FeaturedGardeners>
            <TopTrendingTips></TopTrendingTips>
        </>
        
    );
};

export default HomePage;