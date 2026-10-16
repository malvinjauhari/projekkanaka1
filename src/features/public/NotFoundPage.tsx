import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileQuestion, Home, LayoutDashboard } from 'lucide-react';
import { WideNavbar } from '../../components/layout/WideNavbar';
import { WideFooter } from '../../components/layout/WideFooter';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans text-slate-800">
      <WideNavbar />
      <main className="flex-1 max-w-2xl w-full mx-auto px-4 sm:px-8 py-16 text-center">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-6">
          <FileQuestion className="w-8 h-8" />
        </div>
        <p className="text-sm font-bold tracking-widest text-emerald-700 uppercase mb-2">404</p>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          Halaman tidak ditemukan
        </h1>
        <p className="text-slate-600 leading-relaxed mb-8">
          Tautan yang Anda buka tidak tersedia atau sudah dipindahkan.
          Kembali ke halaman utama atau buka dashboard bencana.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1B3322] text-white text-sm font-bold hover:bg-[#243E2C] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Ke Beranda</span>
          </button>
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Buka Dashboard</span>
          </button>
        </div>
      </main>
      <WideFooter />
    </div>
  );
};
