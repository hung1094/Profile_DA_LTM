import Layout from '../components/Layout';
import Image from 'next/image';

export default function Profile() {
  const techStack = [
    { category: 'Ngôn ngữ & Framework', tools: 'Java, Next.js, Node.js' },
    { category: 'Công nghệ mạng', tools: 'Socket.io, WebSockets, REST API' },
    { category: 'Công cụ & DB', tools: 'Git, PostgreSQL, Tailwind CSS' }
  ];

  const contactInfo = [
    { 
      label: 'Email', 
      value: 'hoangmanhhung05052005@gmail.com', 
      link: 'mailto:hoangmanhhung05052005@gmail.com',
      icon: '✉️' 
    },
    { 
      label: 'GitHub', 
      value: 'github.com/hung1094', 
      link: 'https://github.com/hung1094',
      icon: '🐙' 
    },
    { 
      label: 'Zalo / SĐT', 
      value: '0934304341', 
      link: 'tel:0934304341',
      icon: '📱' 
    }
  ];

  return (
    <Layout>
      <div className="py-12 px-4 animate-fade-in">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/40 backdrop-blur-2xl rounded-[3rem] shadow-2xl border border-white/50 overflow-hidden relative">
            
            {/* Header Background */}
            <div className="h-64 bg-gradient-to-br from-sky-500 via-cyan-500 to-teal-500 relative">
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white/20 text-7xl md:text-9xl font-black uppercase tracking-tighter select-none">
                  STUDENT
                </h1>
              </div>
            </div>

            {/* Profile Info Section */}
            <div className="relative px-6 md:px-12 pb-16 -mt-24 text-center">
              <div className="flex flex-col items-center">
                
                {/* Avatar Section */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                  <div className="relative w-48 h-48 md:w-52 md:h-52 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white">
                    <Image 
                      src="/avt.png" 
                      alt="Avatar Hoàng Mạnh Hùng"
                      fill 
                      className="object-cover"
                      priority 
                    />
                  </div>
                </div>

                <h2 className="mt-8 text-4xl md:text-5xl font-black text-slate-800 tracking-tight">
                  Hoàng <span className="text-cyan-600">Mạnh Hùng</span>
                </h2>
                
                {/* Academic Info */}
                <div className="mt-6 inline-flex flex-col md:flex-row items-center gap-2 md:gap-6 px-6 py-3 bg-white/50 rounded-2xl border border-white/80 shadow-sm text-sm font-bold text-slate-600 uppercase tracking-widest">
                  <span>MSSV: 2280601094</span>
                  <span className="hidden md:inline text-slate-300">|</span>
                  <span>Lớp: 22DTHG2</span>
                  <span className="hidden md:inline text-slate-300">|</span>
                  <span>Môn: Lập trình mạng</span>
                </div>
              </div>

              {/* Bio Section */}
              <div className="mt-12 p-8 md:p-10 bg-white/60 backdrop-blur-md rounded-[2.5rem] border border-white shadow-inner text-left max-w-3xl mx-auto">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                  <span className="w-2 h-6 bg-cyan-500 rounded-full"></span>
                  Giới thiệu
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  Là một sinh viên Công nghệ thông tin với sự tò mò về cách dữ liệu vận hành trong thế giới số, mình dành thời gian nghiên cứu về hệ thống mạng và lập trình web. 
                  Blog này không chỉ là nơi lưu trữ bài tập, mà là cuốn nhật ký ghi lại hành trình mình khám phá môn <b>Lập trình mạng</b>, nơi những dòng code biến thành kết nối thực tế.
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mt-12 max-w-3xl mx-auto">
                <div className="grid grid-cols-1 gap-4 text-left">
                  {techStack.map((item) => (
                    <div key={item.category} className="p-5 bg-white/30 rounded-2xl border border-white/40 flex flex-col md:flex-row md:justify-between md:items-center gap-2 hover:bg-white/50 transition-colors">
                      <span className="text-xs font-black text-cyan-700 uppercase tracking-wider">{item.category}</span>
                      <span className="text-slate-700 font-bold">{item.tools}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Section - Rõ ràng & Chuyên nghiệp */}
              <div className="mt-16 pt-10 border-t border-slate-200/50">
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-10">Liên hệ với tôi</h3>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
                  {contactInfo.map((contact) => (
                    <a 
                      key={contact.label}
                      href={contact.link}
                      target={contact.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-xl group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                        {contact.icon}
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{contact.label}</p>
                        <p className="text-sm font-bold text-slate-700 group-hover:text-cyan-600 transition-colors">{contact.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Final Footer Label */}
                <p className="mt-16 text-slate-400 text-[10px] font-bold uppercase tracking-[0.4em]">
                  © 2025 • Designed by Hung • HUTECH University
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}