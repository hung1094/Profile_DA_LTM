import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Background Orbs - Đặt fixed và pointer-events-none để tránh lỗi tương tác */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-200/30 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-100/20 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-sky-300/20 rounded-full blur-[100px]" />
      </div>

      <Navbar />

      {/* Content - Dùng flex-grow để đẩy footer xuống đáy */}
      <main className="relative z-10 flex-grow container mx-auto px-4 sm:px-6 pt-32 pb-16 max-w-7xl">
        {children}
      </main>

      {/* Footer - Glassmorphism nhẹ nhàng */}
      <footer className="relative z-10 border-t border-sky-100">
        <div className="bg-white/40 backdrop-blur-md py-8 px-4 text-center">
          <p className="text-sky-900 font-bold text-sm sm:text-base">
            © 2025 Blog Lập Trình Mạng • Hoàng Mạnh Hùng 
          </p>
          {/* <div className="flex justify-center items-center space-x-2 mt-2 text-sky-600 text-xs sm:text-sm">
            <span>Đồ án môn Lập trình mạng</span>
            <span className="w-1 h-1 bg-sky-300 rounded-full" />
            <span>Lớp 22DTHG2</span>
          </div> */}
        </div>
      </footer>
    </div>
  );
}