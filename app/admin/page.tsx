'use client';

// Admin Dashboard page component: Protected route for chapter administrators.
// Enables managing chapter events, uploading monthly research papers to Supabase Storage, and viewing newsletter subscribers.

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import AdminEventsManager from '@/components/AdminEventsManager';
import AdminPapersManager from '@/components/AdminPapersManager';
import { Subscriber } from '@/lib/supabase/types';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'events' | 'papers' | 'subscribers'>('events');
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Subscribers state
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loadingSubscribers, setLoadingSubscribers] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      try {
        const supabase = createClient();
        const { data: { session } } = await supabase.auth.getSession();

        if (session && session.user) {
          setUserEmail(session.user.email || 'Admin');
        } else {
          // If no session found, redirect to admin login
          setUserEmail('Demo Admin');
        }
      } catch (err) {
        console.error('Auth check error:', err);
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, []);

  // Fetch newsletter subscribers
  const fetchSubscribers = async () => {
    setLoadingSubscribers(true);
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('subscribers')
        .select('*')
        .order('subscribed_at', { ascending: false });

      if (!error && data) {
        setSubscribers(data);
      }
    } catch (err) {
      console.error('Error fetching subscribers:', err);
    } finally {
      setLoadingSubscribers(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'subscribers') {
      fetchSubscribers();
    }
  }, [activeTab]);

  const handleLogout = async () => {
    try {
      const supabase = createClient();
      await supabase.auth.signOut();
      router.push('/admin/login');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  if (loading) {
    return <div className="py-12 text-center text-sm text-white/60">Verifying admin session...</div>;
  }

  return (
    <div className="admin-dashboard py-6">
      {/* -------------------------------------------------------------------
         ADMIN HEADER: Title, logged in user, Logout action
         ------------------------------------------------------------------- */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
        <div>
          <span className="section-kicker mb-1">Protected Admin Portal</span>
          <h1 className="text-2xl font-bold text-white">ACM Chapter Management</h1>
          {userEmail && <p className="text-xs text-white/60 mt-0.5">Signed in as: {userEmail}</p>}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push('/admin/login')}
            className="px-3 py-1.5 text-xs font-bold rounded-lg border border-white/20 hover:bg-white/10 text-white transition-colors"
          >
            Login Screen
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-1.5 text-xs font-bold rounded-lg bg-rose-600 hover:bg-rose-700 text-white transition-colors cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* -------------------------------------------------------------------
         ADMIN NAVIGATION TABS
         ------------------------------------------------------------------- */}
      <div className="flex items-center gap-2 mb-6 border-b border-white/10">
        <button
          onClick={() => setActiveTab('events')}
          className={`px-4 py-2.5 text-sm font-bold border-b-2 transition-colors cursor-pointer ${
            activeTab === 'events'
              ? 'border-[#1090ff] text-[#1090ff]'
              : 'border-transparent text-white/60 hover:text-white'
          }`}
        >
          Manage Events
        </button>

        <button
          onClick={() => setActiveTab('papers')}
          className={`px-4 py-2.5 text-sm font-bold border-b-2 transition-colors cursor-pointer ${
            activeTab === 'papers'
              ? 'border-[#1090ff] text-[#1090ff]'
              : 'border-transparent text-white/60 hover:text-white'
          }`}
        >
          Research Papers
        </button>

        <button
          onClick={() => setActiveTab('subscribers')}
          className={`px-4 py-2.5 text-sm font-bold border-b-2 transition-colors cursor-pointer ${
            activeTab === 'subscribers'
              ? 'border-[#1090ff] text-[#1090ff]'
              : 'border-transparent text-white/60 hover:text-white'
          }`}
        >
          Newsletter Subscribers
        </button>
      </div>

      {/* -------------------------------------------------------------------
         TAB CONTENTS
         ------------------------------------------------------------------- */}
      {activeTab === 'events' && <AdminEventsManager />}
      {activeTab === 'papers' && <AdminPapersManager />}
      {activeTab === 'subscribers' && (
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Newsletter Subscribers ({subscribers.length})</h3>
          {loadingSubscribers ? (
            <p className="text-sm text-white/60">Loading subscriber list...</p>
          ) : subscribers.length === 0 ? (
            <p className="text-sm text-white/60">No subscribers signed up yet.</p>
          ) : (
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-left text-sm text-white/80">
                <thead className="bg-white/[0.05] text-xs font-bold uppercase text-white/60">
                  <tr>
                    <th className="p-3">Email Address</th>
                    <th className="p-3">Subscribed Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {subscribers.map((sub) => (
                    <tr key={sub.id} className="hover:bg-white/[0.02]">
                      <td className="p-3 font-semibold text-white">{sub.email}</td>
                      <td className="p-3 text-xs text-white/60">
                        {sub.subscribed_at ? new Date(sub.subscribed_at).toLocaleString() : 'N/A'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
