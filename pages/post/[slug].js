import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Head from 'next/head';

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  return (   
    <div className='prose p-6 max-w-sm mx-auto flex items-center space-x-4'> 
        <Head>
          <title>Sol Blog | {frontmatter.title}</title>        
        </Head>
        <h1 className='text-2xl'>{frontmatter.title}</h1>
        <div className='shadow-lg mx-auto' dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    
  );
}
