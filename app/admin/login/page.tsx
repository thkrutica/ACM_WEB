'use client';

// Admin Login Page component: Provides authentication form for chapter administrators.
// Uses Supabase Auth signInWithPassword to establish an admin session.

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg('Please enter email and password.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const supabase = createClient();
      // Supabase query: Authenticate user via Supabase Auth
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        setErrorMsg(error.message);
      } else if (data.session) {
        // Redirect to protected admin dashboard upon successful login
        router.push('/admin');
        router.refresh();
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'An unexpected authentication error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto py-12">
      <div className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl shadow-2xl">
        <div className="text-center mb-6">
          <span className="section-kicker mb-2">Admin Portal</span>
          <h1 className="text-2xl font-bold text-white">Chapter Admin Login</h1>
          <p className="text-xs text-white/60 mt-1">Sign in to manage events, paper uploads, and newsletter signups.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-white/80 mb-1">Admin Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@delhitechnicalcampus.ac.in"
              required
              className="w-full px-3 py-2 text-sm rounded-lg bg-black/60 border border-white/15 text-white focus:outline-none focus:border-[#1090ff]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-white/80 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-3 py-2 text-sm rounded-lg bg-black/60 border border-white/15 text-white focus:outline-none focus:border-[#1090ff]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 text-sm font-bold rounded-lg bg-[#1090ff] hover:bg-[#0c65d3] text-white transition-colors disabled:opacity-50 cursor-pointer"
          >
            {loading ? 'Authenticating...' : 'Sign In to Admin Panel'}
          </button>

          {errorMsg && (
            <p className="text-xs font-medium text-rose-400 text-center mt-2">
              {errorMsg}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
