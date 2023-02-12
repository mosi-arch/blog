import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-fuchsia-100 mb-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          <Link href='/'>
            <a>HOME</a>
          </Link>
          <span className='mx-auto'>Mosi-sol <small>talk about: solidity-solution</small></span>{' '}
        </div>
      </header>
      <main className='container mx-auto flex-1 w-full'>{children}</main>
      <footer className='bg-fuchsia-100 mt-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          &copy; 2023 &nbsp;|&nbsp; Mosi-sol
        </div>
      </footer>
    </div>
  );
}
