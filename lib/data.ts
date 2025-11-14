import { ServiceEntry, Pathway, SymptomEntry, Lesson } from '@/types';
import fs from 'fs';
import path from 'path';

// Helper to check if we're in a server environment
const isServer = typeof window === 'undefined';

// Services
export async function getServices(): Promise<ServiceEntry[]> {
  try {
    if (isServer) {
      // Server-side: read from file system
      const filePath = path.join(process.cwd(), 'public', 'data', 'services.json');
      const fileContents = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(fileContents);
    } else {
      // Client-side: fetch from public directory
      const response = await fetch('/data/services.json');
      if (!response.ok) {
        throw new Error('Failed to fetch services');
      }
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error('Error loading services:', error);
    return [];
  }
}

export async function getServiceById(id: string): Promise<ServiceEntry | null> {
  try {
    const services = await getServices();
    return services.find(s => s.id === id) || null;
  } catch (error) {
    console.error(`Error loading service ${id}:`, error);
    return null;
  }
}

// Pathways
export async function getPathways(): Promise<Pathway[]> {
  try {
    if (isServer) {
      // Server-side: read from file system
      const filePath = path.join(process.cwd(), 'public', 'data', 'pathways.json');
      const fileContents = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(fileContents);
    } else {
      // Client-side: fetch from public directory
      const response = await fetch('/data/pathways.json');
      if (!response.ok) {
        throw new Error('Failed to fetch pathways');
      }
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error('Error loading pathways:', error);
    return [];
  }
}

export async function getPathwayById(id: string): Promise<Pathway | null> {
  try {
    const pathways = await getPathways();
    return pathways.find(p => p.id === id) || null;
  } catch (error) {
    console.error(`Error loading pathway ${id}:`, error);
    return null;
  }
}

// Symptoms
export async function getSymptoms(): Promise<SymptomEntry[]> {
  try {
    if (isServer) {
      // Server-side: read from file system
      const filePath = path.join(process.cwd(), 'public', 'data', 'symptoms.json');
      const fileContents = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(fileContents);
    } else {
      // Client-side: fetch from public directory
      const response = await fetch('/data/symptoms.json');
      if (!response.ok) {
        throw new Error('Failed to fetch symptoms');
      }
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error('Error loading symptoms:', error);
    return [];
  }
}

export async function getSymptomById(id: string): Promise<SymptomEntry | null> {
  try {
    const symptoms = await getSymptoms();
    return symptoms.find(s => s.id === id) || null;
  } catch (error) {
    console.error(`Error loading symptom ${id}:`, error);
    return null;
  }
}

// Lessons
export async function getLessons(): Promise<Lesson[]> {
  try {
    if (isServer) {
      // Server-side: read from file system
      const filePath = path.join(process.cwd(), 'public', 'data', 'lessons.json');
      const fileContents = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(fileContents);
    } else {
      // Client-side: fetch from public directory
      const response = await fetch('/data/lessons.json');
      if (!response.ok) {
        throw new Error('Failed to fetch lessons');
      }
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error('Error loading lessons:', error);
    return [];
  }
}

export async function getLessonById(id: string): Promise<Lesson | null> {
  try {
    const lessons = await getLessons();
    return lessons.find(l => l.id === id) || null;
  } catch (error) {
    console.error(`Error loading lesson ${id}:`, error);
    return null;
  }
}
