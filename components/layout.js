import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-fuchsia-100 mb-8 py-4'>
        <div className='container mx-auto flex justify-center'>
          <Link href='/'>
            <a className='text-3xl font-bold'>HOME</a>
          </Link>
          <span className='text-2xl mx-auto font-medium'>Mosi-sol <small className='font-light text-blue-700'>talk about: solidity-solution</small></span>{' '}
        </div>
      </header>
      <main className='container mx-auto flex-1 w-full'>{children}</main>
      <div>
      <hr>
        <img src="https://awesome-github-stats.azurewebsites.net/user-stats/mosi-sol?cardType=level&theme=github&preferLogin=false&Ring=8B4BDD&Title=8F51DD)](https://git.io/awesome-stats-card" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=mosi-sol&layout=compact" />
      </div>
      <footer className='bg-fuchsia-100 mt-8 py-4'>
        <div className='container mx-auto flex justify-center text-xl'>
          &copy; 2023 &nbsp;|&nbsp; Mosi-sol
        </div>
      </footer>
    </div>
  );
}
