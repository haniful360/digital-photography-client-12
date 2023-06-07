import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        
        <div className='max-w-6xl mx-auto'>
            <Helmet>
                <title>photo- Home</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;