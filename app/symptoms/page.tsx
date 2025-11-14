import React from 'react';
import { getSymptoms } from '@/lib/data';
import SymptomsListClient from './SymptomsListClient';

// Server component that fetches data
export default async function SymptomsPage() {
  const symptoms = await getSymptoms();

  return <SymptomsListClient symptoms={symptoms} />;
}
