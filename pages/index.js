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
          className='border border-black border-2 border-double m-2 rounded-lg shadow-lg overflow-hidden flex flex-col'
        >
        <Head>
          <title>Sol Blog</title>        
        </Head>
          <Link href={`/post/${slug}`}>
            <a>
              <h1 className='p-4 text-sky-800 text-lg'>{frontmatter.title}</h1>
            </a>
          </Link>
          <p className='text-black p-4'>{frontmatter.metaDesc}</p>
          <p className='text-sky-400 p-4'>{frontmatter.article}</p>
        </div> 
      ))}
    </div>
  );
}
