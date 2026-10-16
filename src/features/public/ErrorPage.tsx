import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Home, RotateCcw } from 'lucide-react';

type ErrorPageProps = {
  code?: string;
  title?: string;
  message?: string;
};

export const ErrorPage: React.FC<ErrorPageProps> = ({
  code = '500',
  title = 'Terjadi kesalahan',
  message = 'Server mengalami gangguan. Coba muat ulang halaman atau kembali lagi nanti.',
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center font-sans text-slate-800 px-4 py-16 text-center">
      <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-6">
        <AlertTriangle className="w-8 h-8" />
      </div>
      <p className="text-sm font-bold tracking-widest text-amber-700 uppercase mb-2">{code}</p>
      <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">{title}</h1>
      <p className="text-slate-600 leading-relaxed mb-8 max-w-md">{message}</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          onClick={() => window.location.reload()}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1B3322] text-white text-sm font-bold hover:bg-[#243E2C] transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Muat Ulang</span>
        </button>
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Ke Beranda</span>
        </button>
      </div>
    </div>
  );
};
