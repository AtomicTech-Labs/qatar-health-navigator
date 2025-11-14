import React from 'react';
import { notFound } from 'next/navigation';
import { getServices, getServiceById } from '@/lib/data';
import DirectoryDetailClient from './DirectoryDetailClient';

// Generate static params for all services
export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({
    id: service.id,
  }));
}

// Server component that fetches data
export default async function DirectoryDetailPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const service = await getServiceById(params.id);

  if (!service) {
    notFound();
  }

  return <DirectoryDetailClient service={service} />;
}
