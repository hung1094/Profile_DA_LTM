import Layout from '../components/Layout';
import Image from 'next/image';

export default function Profile() {
  const techStack = [
    { category: 'Ngôn ngữ & Framework', tools: 'Java, Next.js, Node.js, Flutter, PHP' },
    { category: 'Công nghệ mạng', tools: 'Socket.io, WebSockets, REST API' },
    { category: 'Công cụ & DB', tools: 'Git, PostgreSQL, MySQL, Tailwind CSS' }
  ];

  const certificates = [
    {
      title: 'Chứng chỉ JavaScript Essentials 1',
      issuer: 'Cisco Networking Academy',
      image: '/image.png', // Thay đường dẫn ảnh của bạn
      link: 'https://www.credly.com/earner/earned/badge/61a1c57f-16ef-460c-9d29-254ae4ec7cd8'
    },
    {
      title: 'Chứng chỉ NJavaScript Essentials 2',
      issuer: 'Cisco Networking Academy',
      image: '/image1.png', // Thay đường dẫn ảnh của bạn
      link: 'https://www.credly.com/earner/earned/badge/a3208433-5868-4481-a33f-866df0db2425'
    }
  ];

  const projects = [
    {
      name: 'Website Bán Vợt Cầu Lông',
      tech: 'PHP, MySQL, Bootstrap',
      desc: 'Hệ thống quản lý sản phẩm, giỏ hàng và thanh toán trực tuyến dành cho cửa hàng dụng cụ thể thao.',
      icon: '🏸'
    },
    {
      name: 'Ứng dụng Quản lý Chi tiêu',
      tech: 'Flutter, Firebase',
      desc: 'Ứng dụng di động giúp theo dõi thu chi cá nhân, biểu đồ thống kê và thiết lập hạn mức chi tiêu.',
      icon: '💰'
    }
  ];

  const contactInfo = [
    { label: 'Email', value: 'hoangmanhhung05052005@gmail.com', link: 'mailto:hoangmanhhung05052005@gmail.com', icon: '✉️' },
    { label: 'GitHub', value: 'github.com/hung1094', link: 'https://github.com/hung1094', icon: '🐙' },
    { label: 'Zalo / SĐT', value: '0934304341', link: 'tel:0934304341', icon: '📱' }
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
                <h1 className="text-white/20 text-7xl md:text-9xl font-black uppercase tracking-tighter select-none">PORTFOLIO</h1>
              </div>
            </div>

            {/* Profile Info Section */}
            <div className="relative px-6 md:px-12 pb-16 -mt-24 text-center">
              <div className="flex flex-col items-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                  <div className="relative w-48 h-48 md:w-52 md:h-52 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white">
                    <Image src="/avt.png" alt="Avatar" fill className="object-cover" priority />
                  </div>
                </div>

                <h2 className="mt-8 text-4xl md:text-5xl font-black text-slate-800 tracking-tight">
                 <span className="text-cyan-600">Hoàng Mạnh Hùng</span>
                </h2>
                
                <div className="mt-6 inline-flex flex-col md:flex-row items-center gap-2 md:gap-6 px-6 py-3 bg-white/50 rounded-2xl border border-white/80 shadow-sm text-sm font-bold text-slate-600 uppercase tracking-widest">
                  <span>09/09/2004</span>
                </div>
              </div>

              {/* Bio & Tech Stack */}
              <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
                <div className="p-8 bg-white/60 backdrop-blur-md rounded-[2.5rem] border border-white shadow-inner">
                  <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                    <span className="w-2 h-6 bg-cyan-500 rounded-full"></span> Giới thiệu
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Sinh viên CNTT đam mê nghiên cứu hệ thống mạng và lập trình ứng dụng. 
                    Hiện tại tập trung vào phát triển giải pháp kết nối dữ liệu và trải nghiệm người dùng tối ưu.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  {techStack.map((item) => (
                    <div key={item.category} className="p-4 bg-white/30 rounded-2xl border border-white/40 hover:bg-white/50 transition-colors">
                      <span className="text-[10px] font-black text-cyan-700 uppercase block mb-1">{item.category}</span>
                      <span className="text-slate-700 font-bold text-sm">{item.tools}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* NEW: Section Dự Án */}
              <div className="mt-16 text-left max-w-5xl mx-auto">
                <h3 className="text-2xl font-black text-slate-800 mb-8 px-4 flex items-center gap-4">
                   <span className="w-10 h-[2px] bg-slate-300"></span> DỰ ÁN CÁ NHÂN
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((project) => (
                    <div key={project.name} className="p-6 bg-gradient-to-br from-white to-slate-50 rounded-[2rem] border border-white shadow-xl hover:translate-y-[-5px] transition-all">
                      <div className="text-4xl mb-4">{project.icon}</div>
                      <h4 className="text-xl font-bold text-slate-800 mb-2">{project.name}</h4>
                      <div className="text-xs font-bold text-cyan-600 mb-3 uppercase">{project.tech}</div>
                      <p className="text-sm text-slate-600 leading-relaxed">{project.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* NEW: Section Chứng Chỉ */}
              <div className="mt-16 text-left max-w-5xl mx-auto">
                <h3 className="text-2xl font-black text-slate-800 mb-8 px-4 flex items-center gap-4">
                   <span className="w-10 h-[2px] bg-slate-300"></span> CHỨNG CHỈ
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {certificates.map((cert) => (
                    <a 
                      key={cert.title} 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden rounded-[2rem] border-4 border-white shadow-lg bg-slate-200 aspect-video flex items-center justify-center"
                    >
                      <Image 
                        src={cert.image} 
                        alt={cert.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                        <p className="text-white font-bold">{cert.title}</p>
                        <p className="text-white/70 text-xs">{cert.issuer}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Section */}
              <div className="mt-20 pt-10 border-t border-slate-200/50">
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
                  {contactInfo.map((contact) => (
                    <a key={contact.label} href={contact.link} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-xl group-hover:bg-cyan-500 group-hover:text-white transition-all">
                        {contact.icon}
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-black text-slate-400 uppercase leading-none mb-1">{contact.label}</p>
                        <p className="text-sm font-bold text-slate-700 group-hover:text-cyan-600">{contact.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
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