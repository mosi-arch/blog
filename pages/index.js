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
            className='p-3 max-w-sm mx-auto bg-slate-100 hover:bg-slate-200 rounded-xl shadow-md flex items-center space-x-4 divide-y divide-slate-600 divide-solid mb-4 w-full shadow-2xl'
          >
              <Head>
                <title>Sol Blog</title>        
              </Head>
              <div>
                <!--<Link href={`/post/${slug}`}>-->
                  <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <h1 className='text-xl font-semibold capitalize text-black hover:text-blue-900'>{frontmatter.title}</h1>
                  </a>
                <!--</Link>-->
                <p className='text-slate-500 lowercase text-sm'>{frontmatter.metaDesc}</p>
                <p className='text-blue-800 hover:text-blue-700 uppercase text-xs'>{frontmatter.article}</p>
              </div>  
			  
			  <!-- Modal -->
				<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
				  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  <div class="modal-dialog relative w-auto pointer-events-none">
					<div
					  class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
					  <div
						class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
						<h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">{frontmatter.title}</h5>
						<button type="button"
						  class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
						  data-bs-dismiss="modal" aria-label="Close"></button>
					  </div>
					  <div class="modal-body relative p-4">
						
						<p className='text-slate-500 lowercase text-sm'>{frontmatter.metaDesc}</p>
						<p className='text-blue-800 hover:text-blue-700 uppercase text-xs'>{frontmatter.article}</p>
						
					  </div>
					  <div
						class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
						<button type="button" class="px-6
						  py-2.5
						  bg-purple-600
						  text-white
						  font-medium
						  text-xs
						  leading-tight
						  uppercase
						  rounded
						  shadow-md
						  hover:bg-purple-700 hover:shadow-lg
						  focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
						  active:bg-purple-800 active:shadow-lg
						  transition
						  duration-150
						  ease-in-out" data-bs-dismiss="modal">Close</button>
					  </div>
					</div>
				  </div>
				</div>
			  
          </div> 
      ))}
    </div>
  );
}
