'use client';

import dynamic from 'next/dynamic';

const MapClient = dynamic(() => import('./MapClient'), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

export default function Map() {
  return <MapClient />;
}
