// TypeScript definitions for Supabase Database tables used in the ACM Chapter website

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  image_url?: string | null;
  created_at?: string;
}

export interface Subscriber {
  id: string;
  email: string;
  subscribed_at?: string;
}

export interface Paper {
  id: string;
  title: string;
  month: string;
  file_url: string;
  uploaded_at?: string;
}
