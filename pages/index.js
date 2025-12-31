// pages/index.js
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      {/* Giảm min-height để cân bằng với padding của Layout */}
      <div className="min-h-[70vh] flex items-center justify-center relative px-4">
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          {/* Badge nhỏ phía trên tiêu đề (tùy chọn nhưng rất hiện đại) */}
          {/* <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-sky-700 uppercase bg-sky-100/50 rounded-full border border-sky-200">
            Welcome to my blog
          </span> */}

          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
              Blog Lập Trình Mạng
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Khám phá kiến thức chuyên sâu về hệ thống mạng, giao thức và kiến trúc phần mềm với 
            <span className="text-sky-600 font-bold"> Java</span> & 
            <span className="text-cyan-600 font-bold"> JavaScript</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Primary Action */}
            <Link
              href="/blog"
              className="group relative w-full sm:w-auto px-10 py-4 text-lg font-bold text-white rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)] bg-sky-600 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-sky-500 to-cyan-500 transition-all" />
              <span className="relative z-10 flex items-center justify-center">
                Xem tất cả bài viết
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>

            {/* Secondary Action */}
            <Link
              href="/profile"
              className="w-full sm:w-auto px-10 py-4 text-lg font-bold text-sky-800 bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 shadow-sm hover:bg-white/60 transition-all hover:shadow-md active:scale-95"
            >
              Giới thiệu bản thân
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}