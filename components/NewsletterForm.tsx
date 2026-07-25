'use client';

// Newsletter Signup Form component: Captures student email addresses and inserts them into the Supabase "subscribers" table.
// Includes basic client-side email validation, loading states, and user feedback messages (success/error).
import { useState, FormEvent } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Basic email validation regex
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const supabase = createClient();
      
      // Query Supabase: insert new subscriber email into "subscribers" table
      const { error } = await supabase
        .from('subscribers')
        .insert([{ email: email.trim().toLowerCase(), subscribed_at: new Date().toISOString() }]);

      if (error) {
        // Handle duplicate key / existing email constraint or generic error
        if (error.code === '23505') {
          setStatus('success');
          setMessage('You are already subscribed!');
        } else {
          console.error('Supabase subscription error:', error);
          setStatus('error');
          setMessage('Failed to subscribe. Please try again.');
        }
      } else {
        setStatus('success');
        setMessage('Thank you for subscribing to ACM updates!');
        setEmail('');
      }
    } catch (err) {
      console.error('Newsletter error:', err);
      setStatus('error');
      setMessage('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className="newsletter-box mt-4 p-4 rounded-xl border border-white/10 bg-white/[0.03]">
      <h4 className="text-sm font-semibold text-white/90 mb-1">Stay updated with ACM DTC</h4>
      <p className="text-xs text-white/70 mb-3">Subscribe to our monthly chapter newsletter and event announcements.</p>
      
      <form onSubmit={handleSubmit} className="flex flex-wrap sm:flex-nowrap gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your student email..."
          disabled={status === 'loading'}
          aria-label="Email address for newsletter"
          className="w-full px-3 py-2 text-sm rounded-lg bg-black/60 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:border-[#1090ff] transition-colors"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-4 py-2 text-sm font-bold rounded-lg bg-[#1090ff] hover:bg-[#0c65d3] text-white transition-colors disabled:opacity-50 whitespace-nowrap cursor-pointer"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>

      {/* Status feedback message */}
      {message && (
        <p className={`mt-2 text-xs font-medium ${status === 'error' ? 'text-rose-400' : 'text-emerald-400'}`}>
          {message}
        </p>
      )}
    </div>
  );
}
