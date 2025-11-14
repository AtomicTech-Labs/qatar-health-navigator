import React from 'react';
import { getSymptoms, getSymptomById } from '@/lib/data';
import { notFound } from 'next/navigation';
import SymptomDetailClient from './SymptomDetailClient';

// Generate static params for all symptoms
export async function generateStaticParams() {
  const symptoms = await getSymptoms();
  return symptoms.map((symptom) => ({
    id: symptom.id,
  }));
}

// Server component that fetches data
export default async function SymptomDetailPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const symptom = await getSymptomById(params.id);

  if (!symptom) {
    notFound();
  }

  return <SymptomDetailClient symptom={symptom} />;
}
