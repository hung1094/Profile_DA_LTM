import Layout from '../../components/Layout';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function Blog({ posts }) {
  return (
    <Layout>
      {/* Hero section - Glassmorphism style */}
      <div className="relative overflow-hidden text-center py-16 bg-white/30 backdrop-blur-md border border-white/40 rounded-[2.5rem] mb-16 shadow-xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-sky-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <h1 className="relative z-10 text-5xl md:text-6xl font-black bg-gradient-to-r from-sky-800 to-cyan-900 bg-clip-text text-transparent mb-6">
          Thư Viện Kiến Thức
        </h1>
        <p className="relative z-10 text-lg md:text-xl text-sky-800/80 max-w-2xl mx-auto px-4 font-medium">
          Hệ thống hóa kiến thức lập trình mạng qua lăng kính <span className="text-sky-600 font-bold underline decoration-sky-300">Java</span> và <span className="text-cyan-600 font-bold underline decoration-cyan-300">JavaScript</span>
        </p>
      </div>

      {/* Grid danh sách bài viết */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link 
            href={`/blog/${post.slug}`} 
            key={post.slug} 
            className="group flex flex-col h-full transform hover:-translate-y-3 transition-all duration-500"
          >
            <div className="flex flex-col h-full bg-white/60 backdrop-blur-sm rounded-[2rem] shadow-lg border border-white/50 overflow-hidden hover:shadow-sky-200/50 hover:shadow-2xl transition-all">
              {/* Card Header với Gradient mượt */}
              <div className="h-44 bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-500 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-7xl font-black text-white/30 select-none transform group-hover:scale-125 transition-transform duration-700">
                  {post.frontmatter.title?.[0] || 'B'}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4 text-xs font-bold uppercase tracking-widest text-sky-600">
                  <span>{formatDate(post.frontmatter.date)}</span>
                  <span className="w-1 h-1 bg-sky-300 rounded-full" />
                  <span className="bg-sky-100 px-2 py-0.5 rounded text-sky-700">{getTag(post)}</span>
                </div>

                <h2 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-sky-600 transition-colors line-clamp-2">
                  {post.frontmatter.title}
                </h2>

                <p className="text-slate-600 mb-8 line-clamp-3 text-sm leading-relaxed">
                  {post.frontmatter.excerpt || "Khám phá chi tiết các kỹ thuật lập trình mạng chuyên sâu..."}
                </p>

                <div className="mt-auto pt-6 border-t border-sky-100 flex items-center justify-between">
                  <span className="text-sky-600 font-bold text-sm">Xem chi tiết</span>
                  <div className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-all">
                    →
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  if (!fs.existsSync(postsDirectory)) fs.mkdirSync(postsDirectory);
  
  const files = fs.readdirSync(postsDirectory);
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(path.join(postsDirectory, filename), 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);
    return { slug, frontmatter };
  });

  posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

  return { props: { posts } };
}

function formatDate(dateString) {
  return new Date(dateString || Date.now()).toLocaleDateString('vi-VN', {
    day: '2-digit', month: '2-digit', year: 'numeric'
  });
}

function getTag(post) {
  if (post.frontmatter.tags) return post.frontmatter.tags[0];
  const s = post.slug.toLowerCase();
  return s.includes('java') ? 'Java' : s.includes('js') ? 'JavaScript' : 'Networking';
}