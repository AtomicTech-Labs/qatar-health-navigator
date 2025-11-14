import React from 'react';
import { getServices } from '@/lib/data';
import DirectoryListClient from './DirectoryListClient';

// Server component that fetches data
export default async function DirectoryPage() {
  const services = await getServices();

  return <DirectoryListClient services={services} />;
}
