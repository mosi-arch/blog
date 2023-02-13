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
    <div className='prose grid grid-cols-1 mx-auto flex-1 w-full'> 
        <Head>
          <title>Sol Blog | {frontmatter.title}</title>        
        </Head>
        <h1 className='text-2xl'>
          {frontmatter.title} 
           &nbsp; <small className='text-sm bg-gray-500 text-white rounded-md p-1'>{frontmatter.article}</small>
        </h1>
        <div className='shadow-lg grid grid-cols-1' dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    
  );
}
