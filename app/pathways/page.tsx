import React from 'react';
import { getPathways } from '@/lib/data';
import PathwaysListClient from './PathwaysListClient';

// Server component that fetches data
export default async function PathwaysPage() {
  const pathways = await getPathways();

  return <PathwaysListClient pathways={pathways} />;
}
