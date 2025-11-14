import React from 'react';
import { getPathways, getPathwayById } from '@/lib/data';
import { notFound } from 'next/navigation';
import PathwayDetailClient from './PathwayDetailClient';

// Generate static params for all pathways
export async function generateStaticParams() {
  const pathways = await getPathways();
  return pathways.map((pathway) => ({
    id: pathway.id,
  }));
}

// Server component that fetches data
export default async function PathwayDetailPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const pathway = await getPathwayById(params.id);

  if (!pathway) {
    notFound();
  }

  return <PathwayDetailClient pathway={pathway} />;
}
