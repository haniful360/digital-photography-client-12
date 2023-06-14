import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        
        <div className='max-w-6xl mx-auto'>
            <Helmet>
                <title>D.Photography - Home</title>
            </Helmet>
            <Banner/>
            <PopularClasses/>
            <PopularInstructor/>
            <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;