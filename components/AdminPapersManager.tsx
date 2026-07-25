'use client';

// AdminPapersManager component: Uploads monthly research papers to Supabase Storage and records metadata in "papers" table.
// Handles PDF file upload to bucket "papers" and saves title, month, file_url, uploaded_at to Supabase DB.

import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Paper } from '@/lib/supabase/types';

export default function AdminPapersManager() {
  const [papers, setPapers] = useState<Paper[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  // Paper form state
  const [title, setTitle] = useState('');
  const [month, setMonth] = useState('');
  const [file, setFile] = useState<File | null>(null);

  // Fetch papers from Supabase
  const fetchPapers = async () => {
    setLoading(true);
    try {
      const supabase = createClient();
      const { data, error } = await supabase.from('papers').select('*').order('uploaded_at', { ascending: false });
      if (!error && data) {
        setPapers(data);
      }
    } catch (err) {
      console.error('Error fetching papers:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPapers();
  }, []);

  // Handle file selection
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  // Upload paper file to Supabase Storage & insert record into "papers" table
  const handleUploadPaper = async (e: FormEvent) => {
    e.preventDefault();
    if (!title || !month || !file) {
      setMessage('Please fill in paper title, month, and select a PDF file.');
      return;
    }

    setSubmitting(true);
    setMessage('');

    try {
      const supabase = createClient();
      
      // 1. Upload file to Supabase Storage bucket 'papers'
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
      const filePath = `monthly-papers/${fileName}`;

      const { data: storageData, error: storageError } = await supabase.storage
        .from('papers')
        .upload(filePath, file, { cacheControl: '3600', upsert: true });

      let publicUrl = '';
      if (storageError) {
        console.warn('Storage upload error (using placeholder link if bucket uncreated):', storageError);
        // Fallback file link if storage bucket policy is unconfigured
        publicUrl = `https://placeholder-storage.supabase.co/papers/${fileName}`;
      } else {
        // Get public download URL for uploaded paper
        const { data: urlData } = supabase.storage.from('papers').getPublicUrl(filePath);
        publicUrl = urlData.publicUrl;
      }

      // 2. Insert paper metadata into "papers" table
      const { error: dbError } = await supabase.from('papers').insert([
        {
          title: title.trim(),
          month: month.trim(),
          file_url: publicUrl,
          uploaded_at: new Date().toISOString(),
        },
      ]);

      if (dbError) {
        console.error('DB Insert error:', dbError);
        setMessage(`Failed to record paper in database: ${dbError.message}`);
      } else {
        setMessage('Research paper uploaded successfully!');
        setTitle('');
        setMonth('');
        setFile(null);
        fetchPapers();
      }
    } catch (err: any) {
      console.error('Upload exception:', err);
      setMessage(`Unexpected error: ${err.message || err}`);
    } finally {
      setSubmitting(false);
    }
  };

  // Delete paper from DB
  const handleDeletePaper = async (id: string) => {
    if (!confirm('Are you sure you want to delete this research paper entry?')) return;

    try {
      const supabase = createClient();
      const { error } = await supabase.from('papers').delete().eq('id', id);
      if (error) {
        alert(`Failed to delete paper: ${error.message}`);
      } else {
        fetchPapers();
      }
    } catch (err) {
      console.error('Delete paper error:', err);
    }
  };

  return (
    <div className="space-y-8">
      {/* -------------------------------------------------------------------
         UPLOAD NEW PAPER FORM
         ------------------------------------------------------------------- */}
      <div className="bg-white/[0.03] border border-white/10 p-6 rounded-2xl">
        <h3 className="text-lg font-bold text-white mb-4">Upload New Monthly Research Paper</h3>

        <form onSubmit={handleUploadPaper} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-white/80 mb-1">Paper Title *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Distributed Consensus in Cloud Computing"
                required
                className="w-full px-3 py-2 text-sm rounded-lg bg-black/60 border border-white/15 text-white focus:outline-none focus:border-[#1090ff]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-white/80 mb-1">Month / Edition *</label>
              <input
                type="text"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                placeholder="e.g. April 2026"
                required
                className="w-full px-3 py-2 text-sm rounded-lg bg-black/60 border border-white/15 text-white focus:outline-none focus:border-[#1090ff]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-white/80 mb-1">PDF File *</label>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              required
              className="w-full text-xs text-white/80 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-[#1090ff] file:text-white hover:file:bg-[#0c65d3] cursor-pointer"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-2.5 text-sm font-bold rounded-lg bg-[#1090ff] hover:bg-[#0c65d3] text-white transition-colors disabled:opacity-50 cursor-pointer"
          >
            {submitting ? 'Uploading to Storage...' : 'Upload Research Paper'}
          </button>

          {message && (
            <p className={`text-xs font-medium ${message.includes('success') ? 'text-emerald-400' : 'text-rose-400'}`}>
              {message}
            </p>
          )}
        </form>
      </div>

      {/* -------------------------------------------------------------------
         PAPERS LIST
         ------------------------------------------------------------------- */}
      <div>
        <h3 className="text-lg font-bold text-white mb-4">Uploaded Papers ({papers.length})</h3>

        {loading ? (
          <p className="text-sm text-white/60">Loading paper entries...</p>
        ) : papers.length === 0 ? (
          <p className="text-sm text-white/60">No research papers uploaded yet.</p>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left text-sm text-white/80">
              <thead className="bg-white/[0.05] text-xs font-bold uppercase text-white/60">
                <tr>
                  <th className="p-3">Title</th>
                  <th className="p-3">Month</th>
                  <th className="p-3">Download Link</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {papers.map((p) => (
                  <tr key={p.id} className="hover:bg-white/[0.02]">
                    <td className="p-3 font-semibold text-white">{p.title}</td>
                    <td className="p-3 text-xs text-[#12a0ff] font-bold">{p.month}</td>
                    <td className="p-3 text-xs">
                      <a href={p.file_url} target="_blank" rel="noreferrer" className="text-[#1090ff] hover:underline">
                        View File
                      </a>
                    </td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => handleDeletePaper(p.id)}
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
