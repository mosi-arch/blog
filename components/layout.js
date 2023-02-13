import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <nav class="navbar navbar-expand-lg shadow-lg py-2 bg-gray-50 relative flex items-center w-full justify-between mb-8">
          <div class="px-6">    
            <div class="navbar-collapse collapse grow items-center" id="navbarSupportedContentX">
            <ul class="navbar-nav mr-auto flex flex-row">
              <li class="nav-item">
                <h3 class="block pr-2 lg:px-2 py-2 text-black mr-5 text-xl">SOL-BLOG</h3>
              </li>
              <li class="nav-item">
                <Link href='/'>
                <a class="nav-link block pr-2 lg:px-2 py-2 text-gray-600">Home</a>
                </Link>
              </li>              
              <li class="nav-item">
                <Link href='https://github.com/mosi-sol'>
                <a class="nav-link block pr-2 lg:px-2 py-2 text-gray-600">Github</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link href='https://sol-app.github.io/resume/'>
                <a class="nav-link block pr-2 lg:px-2 py-2 text-gray-600">Resume</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link href='https://sol-app.github.io/mosi-sol/'>
                <a class="nav-link block pr-2 lg:px-2 py-2 text-gray-600">Portfolio</a>
                </Link>
              </li>
            </ul>
            </div>	
          </div>
        </nav>
      <main className='container mx-auto flex-1 w-full my-4'>{children}</main>
      <footer className='text-center lg:text-left mt-8 bg-gradient-to-b from-gray-200 to-white'>
        <div className='text-black text-center p-4'>© 2023 &nbsp;|&nbsp; Mosi-sol</div>
      </footer>
    </div>
  );
}
