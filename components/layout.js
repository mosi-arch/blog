import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-fuchsia-100 mb-8 py-4 shadow'>
        <div className='container mx-auto flex justify-center'>
          <Link href='/'>
            <a className='text-3xl font-bold'>HOME</a>
          </Link>
          <Link href='https://github.com/mosi-sol'>
            <a className='text-base font-light ml-3'>Github</a>
          </Link>
          <Link href='https://sol-app.github.io/resume/'>
            <a className='text-base font-light ml-3'>Resume</a>
          </Link>
          <Link href='https://sol-app.github.io/mosi-sol/'>
            <a className='text-base font-light ml-3'>Portfolio</a>
          </Link>
          <span className='text-base mx-auto text-xl font-bold'>Mosi-sol Blog</span>{' '}
        </div>
      </header>
      <main className='container mx-auto flex-1 w-full'>{children}</main>
      <footer className='bg-fuchsia-100 mt-8 py-4'>
        <div className='container mx-auto flex justify-center text-xl'>
          &copy; 2023 &nbsp;|&nbsp; Mosi-sol
        </div>
      </footer>
    </div>
  );
}
