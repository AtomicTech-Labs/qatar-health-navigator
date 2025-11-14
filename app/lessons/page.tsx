import React from 'react';
import { getLessons } from '@/lib/data';
import LessonsListClient from './LessonsListClient';

// Server component that fetches data
export default async function LessonsPage() {
  const lessons = await getLessons();

  return <LessonsListClient lessons={lessons} />;
}
