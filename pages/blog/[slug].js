import Layout from '../../components/Layout';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';

export default function PostPage({ frontmatter, content }) {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center text-sky-600 font-semibold mb-8 hover:gap-2 transition-all">
          ← Quay lại danh sách
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
             <span className="px-3 py-1 bg-sky-500 text-white text-xs font-bold rounded-full uppercase">
               {frontmatter.category || "Kỹ thuật"}
             </span>
             <time className="text-slate-500 text-sm font-medium">
               Cập nhật ngày {new Date(frontmatter.date).toLocaleDateString('vi-VN')}
             </time>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.15] mb-8">
            {frontmatter.title}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-sky-400 pl-6 italic">
            {frontmatter.excerpt}
          </p>
        </header>

        {/* Content Body */}
        <div className="bg-white/50 backdrop-blur-sm rounded-[2.5rem] border border-white/60 p-8 md:p-12 shadow-sm">
          <article 
            className="prose prose-sky prose-lg max-w-none
              prose-headings:text-slate-900 prose-headings:font-black
              prose-p:text-slate-700 prose-p:leading-8
              prose-pre:bg-slate-900 prose-pre:rounded-2xl prose-pre:p-6 prose-pre:shadow-2xl
              prose-code:text-sky-600 prose-code:bg-sky-50 prose-code:px-1.5 prose-code:rounded
              prose-img:rounded-3xl prose-img:shadow-xl
              prose-blockquote:border-sky-500 prose-blockquote:bg-sky-50/50 prose-blockquote:rounded-r-2xl"
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          />
        </div>

        {/* Article Footer */}
        <div className="mt-16 pt-10 border-t border-slate-200 text-center">
           <p className="text-slate-500 text-sm mb-6">Bạn đang đọc bài viết tại Blog của Hoàng Mạnh Hùng</p>
           <div className="flex justify-center gap-4">
              <div className="px-6 py-3 bg-white rounded-full border border-slate-200 font-bold text-slate-800">
                2280601094
              </div>
              <div className="px-6 py-3 bg-sky-600 rounded-full font-bold text-white shadow-lg shadow-sky-200">
                Lớp 22DTHG2
              </div>
           </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));
  const paths = files.map((filename) => ({ params: { slug: filename.replace('.md', '') } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return { props: { frontmatter, content, slug } };
}