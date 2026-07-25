# ACM Delhi Technical Campus — Student Chapter Website

A Next.js (App Router) + Tailwind CSS web application for the ACM Student Chapter at Delhi Technical Campus. Includes dynamic event management, newsletter signup, monthly research paper PDF uploads, and a protected Admin Panel powered by Supabase.

---

## 🚀 Getting Started

### 1. Environment Setup

Create a `.env.local` file in the project root based on `.env.example`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

---

## 🗄️ Supabase Database & Storage Setup

### 2. Create Database Tables

Run the following SQL snippet in your **Supabase SQL Editor**:

```sql
-- 1. Create events table
CREATE TABLE IF NOT EXISTS public.events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  date TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create subscribers table for newsletter signups
CREATE TABLE IF NOT EXISTS public.subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Create papers table for research paper metadata
CREATE TABLE IF NOT EXISTS public.papers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  month TEXT NOT NULL,
  file_url TEXT NOT NULL,
  uploaded_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS) & default policies
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.papers ENABLE ROW LEVEL SECURITY;

-- Public read access policies
CREATE POLICY "Allow public read access on events" ON public.events FOR SELECT USING (true);
CREATE POLICY "Allow public insert on subscribers" ON public.subscribers FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public read access on papers" ON public.papers FOR SELECT USING (true);

-- Authenticated Admin full access policies
CREATE POLICY "Allow admin write access on events" ON public.events FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow admin read access on subscribers" ON public.subscribers FOR SELECT TO authenticated USING (true);
CREATE POLICY "Allow admin write access on papers" ON public.papers FOR ALL TO authenticated USING (true);
```

### 3. Create Supabase Storage Bucket

1. In Supabase Dashboard, go to **Storage** -> **New Bucket**.
2. Name the bucket `papers`.
3. Toggle **Public Bucket** to **ON** (so students can download PDFs from the Resources page).
4. Save the bucket.

### 4. Create Admin Account

1. Go to **Authentication** -> **Users** in your Supabase Dashboard.
2. Click **Add User** -> **Create User**.
3. Enter an admin email and password.
4. Use these credentials to log in at `/admin/login`.

---

## 💻 Local Development

```bash
# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Directory Structure

- `app/`: Next.js App Router routes (`page.tsx`, `about`, `events`, `gallery`, `team`, `resources`, `contact`, `admin`).
- `components/`: Reusable React UI components (`Header.tsx`, `Footer.tsx`, `ScrollReveal.tsx`, `NewsletterForm.tsx`, `AdminEventsManager.tsx`, `AdminPapersManager.tsx`).
- `lib/supabase/`: Supabase client and server-side configurations.
