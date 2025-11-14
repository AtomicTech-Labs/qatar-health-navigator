// Service Entry
export interface ServiceEntry {
  id: string;
  name: string;
  category: 'PHCC' | 'HMC' | 'Urgent Care' | 'Emergency' | 'Private';
  short_description: string;
  services: string[];
  timings: string;
  when_to_visit: string;
  when_not_to_visit: string;
  google_maps_url: string;
  audio_file: string;
}

// Pathway
export interface PathwayStep {
  icon: string;
  title_en: string;
  title_ar: string;
  body_en: string;
  body_ar: string;
}

export interface Pathway {
  id: string;
  title_en: string;
  title_ar: string;
  steps: PathwayStep[];
  what_to_expect_en: string;
  what_to_expect_ar: string;
  audio_file: string;
}

// Symptom
export interface SymptomEntry {
  id: string;
  name_en: string;
  name_ar: string;
  green_en: string;
  yellow_en: string;
  red_en: string;
  green_ar: string;
  yellow_ar: string;
  red_ar: string;
  audio_file: string;
}

// Lesson
export interface Lesson {
  id: string;
  title_en: string;
  title_ar: string;
  body_en: string;
  body_ar: string;
  icon: string;
  audio_file: string;
}
