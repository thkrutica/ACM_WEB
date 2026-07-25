'use client';

// AdminEventsManager component: Provides CRUD functionality for Chapter Events.
// Writes to the Supabase "events" table (title, description, date, image_url, created_at).

import { useState, useEffect, FormEvent } from 'react';
import { createClient } from '@/lib/supabase/client';
import { EventItem } from '@/lib/supabase/types';

export default function AdminEventsManager() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  // New Event Form State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // Fetch events from Supabase database
  const fetchEvents = async () => {
    setLoading(true);
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching events:', error);
      } else if (data) {
        setEvents(data);
      }
    } catch (err) {
      console.error('Unexpected error fetching events:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Handle adding a new event to Supabase
  const handleAddEvent = async (e: FormEvent) => {
    e.preventDefault();
    if (!title || !description || !date) {
      setMessage('Please fill in all required fields (title, description, date).');
      return;
    }

    setSubmitting(true);
    setMessage('');

    try {
      const supabase = createClient();
      // Supabase query: Insert new event into "events" table
      const { error } = await supabase.from('events').insert([
        {
          title: title.trim(),
          description: description.trim(),
          date: date.trim(),
          image_url: imageUrl.trim() || null,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        console.error('Error inserting event:', error);
        setMessage(`Failed to add event: ${error.message}`);
      } else {
        setMessage('Event added successfully!');
        setTitle('');
        setDescription('');
        setDate('');
        setImageUrl('');
        fetchEvents();
      }
    } catch (err: any) {
      setMessage(`Unexpected error: ${err.message || err}`);
    } finally {
      setSubmitting(false);
    }
  };

  // Handle deleting an event from Supabase
  const handleDeleteEvent = async (id: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return;

    try {
      const supabase = createClient();
      // Supabase query: Delete event record by ID
      const { error } = await supabase.from('events').delete().eq('id', id);
      if (error) {
        alert(`Failed to delete event: ${error.message}`);
      } else {
        fetchEvents();
      }
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  return (
    <div className="space-y-8">
      {/* -------------------------------------------------------------------
         ADD NEW EVENT FORM
         ------------------------------------------------------------------- */}
      <div className="bg-white/[0.03] border border-white/10 p-6 rounded-2xl">
        <h3 className="text-lg font-bold text-white mb-4">Add New Chapter Event</h3>

        <form onSubmit={handleAddEvent} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-white/80 mb-1">Event Title *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. AI & Machine Learning Workshop"
                required
                className="w-full px-3 py-2 text-sm rounded-lg bg-black/60 border border-white/15 text-white focus:outline-none focus:border-[#1090ff]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-white/80 mb-1">Event Date / Tag *</label>
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="e.g. March 28, 2026 or Skill building"
                required
                className="w-full px-3 py-2 text-sm rounded-lg bg-black/60 border border-white/15 text-white focus:outline-none focus:border-[#1090ff]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-white/80 mb-1">Event Description *</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide event details, schedule, and speaker information..."
              rows={3}
              required
              className="w-full px-3 py-2 text-sm rounded-lg bg-black/60 border border-white/15 text-white focus:outline-none focus:border-[#1090ff]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-white/80 mb-1">Cover Image URL (Optional)</label>
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://example.com/poster.jpg"
              className="w-full px-3 py-2 text-sm rounded-lg bg-black/60 border border-white/15 text-white focus:outline-none focus:border-[#1090ff]"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-2.5 text-sm font-bold rounded-lg bg-[#1090ff] hover:bg-[#0c65d3] text-white transition-colors disabled:opacity-50 cursor-pointer"
          >
            {submitting ? 'Saving Event...' : 'Add Event'}
          </button>

          {message && (
            <p className={`text-xs font-medium ${message.includes('success') ? 'text-emerald-400' : 'text-rose-400'}`}>
              {message}
            </p>
          )}
        </form>
      </div>

      {/* -------------------------------------------------------------------
         EXISTING EVENTS TABLE
         ------------------------------------------------------------------- */}
      <div>
        <h3 className="text-lg font-bold text-white mb-4">Existing Chapter Events ({events.length})</h3>

        {loading ? (
          <p className="text-sm text-white/60">Loading events from database...</p>
        ) : events.length === 0 ? (
          <p className="text-sm text-white/60">No events found in database. Create one above!</p>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left text-sm text-white/80">
              <thead className="bg-white/[0.05] text-xs font-bold uppercase text-white/60">
                <tr>
                  <th className="p-3">Title</th>
                  <th className="p-3">Date / Tag</th>
                  <th className="p-3">Description</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {events.map((evt) => (
                  <tr key={evt.id} className="hover:bg-white/[0.02]">
                    <td className="p-3 font-semibold text-white">{evt.title}</td>
                    <td className="p-3 text-xs text-[#12a0ff] font-bold">{evt.date}</td>
                    <td className="p-3 text-xs text-white/70 max-w-xs truncate">{evt.description}</td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => handleDeleteEvent(evt.id)}
                        className="px-3 py-1 text-xs font-bold bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 rounded border border-rose-500/30 transition-colors cursor-pointer"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
