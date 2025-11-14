import React from 'react';
import { getLessons, getLessonById } from '@/lib/data';
import { notFound } from 'next/navigation';
import LessonDetailClient from './LessonDetailClient';

// Generate static params for all lessons
export async function generateStaticParams() {
  const lessons = await getLessons();
  return lessons.map((lesson) => ({
    id: lesson.id,
  }));
}

// Server component that fetches data
export default async function LessonDetailPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const lesson = await getLessonById(params.id);

  if (!lesson) {
    notFound();
  }

  return <LessonDetailClient lesson={lesson} />;
}
