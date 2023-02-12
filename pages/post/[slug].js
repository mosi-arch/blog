import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

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
      <h1 className='text-2xl'>{frontmatter.title}</h1>
      <div className='grid grid-cols-1' dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
    <a href="https://github.com/mosi-sol"><img src="https://awesome-github-stats.azurewebsites.net/user-stats/mosi-sol?cardType=level&theme=github&preferLogin=false&Ring=8B4BDD&Title=8F51DD)](https://git.io/awesome-stats-card" /></a>
    <a href="https://github.com/mosi-sol"><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=mosi-sol&layout=compact" /></a>
  );
}
