'use client';

import React from 'react';
import ListingData from '@/src/ListingData'; 
import { Listing } from '@/src/types';
import Container from './components/Container';
import ListingCard from './components/listings/ListingCard';

const Home: React.FC = () => {
  return (
    <Container>
      <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {ListingData.map((listing: Listing) => (
          <ListingCard key={listing.id} data={ListingData} />
        ))}
      </div>
    </Container>
  );
};

export default Home;
