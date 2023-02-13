import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export async function getStaticProps() {
  const files = fs.readdirSync('posts');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
      {posts.map(({ slug, frontmatter }) => (
          <div
            key={slug}
            className='p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 divide-y divide-slate-600 divide-solid mb-4 w-full shadow-2xl'
          >
              <Head>
                <title>Sol Blog</title>        
              </Head>
              <div>
                <Link href={`/post/${slug}`}>
                  <a>
                    <h1 className='text-xl font-semibold capitalize text-black hover:text-sky-400'>{frontmatter.title}</h1>
                  </a>
                </Link>
                <p className='text-slate-500 lowercase'>{frontmatter.metaDesc}</p>
                <p className='text-blue-800 hover:text-sky-400 uppercase'>{frontmatter.article}</p>
              </div>  
          </div> 
      ))}
    </div>
  );
}
