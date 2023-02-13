import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <nav class="navbar navbar-expand-lg shadow-lg py-2 bg-gray-50 relative flex items-center w-full justify-between mb-8">
          <div class="px-6">    
            <div class="navbar-collapse collapse grow items-center" id="navbarSupportedContentX">
            <ul class="navbar-nav mr-auto flex flex-row">
              <li class="nav-item">
                <h3 class="block pr-2 lg:px-2 py-2 text-black mr-5 text-xl" data-mdb-ripple="true" data-mdb-ripple-color="light">SOL-BLOG</h3>
              </li>
              <li class="nav-item">
                <Link href='/'>
                <a class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Home</a>
                </Link>
              </li>              
              <li class="nav-item">
                <Link href='https://github.com/mosi-sol'>
                <a class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Github</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link href='https://sol-app.github.io/resume/'>
                <a class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Resume</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link href='https://sol-app.github.io/mosi-sol/'>
                <a class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Portfolio</a>
                </Link>
              </li>
            </ul>
            </div>	
          </div>
        </nav>
      <main className='container mx-auto flex-1 w-full'>{children}</main>
      <footer className='text-center lg:text-left mt-8 bg-gradient-to-b from-gray-900 via-gray-700 to-black'>
        <div className='text-white text-center p-4'>© 2023 &nbsp;|&nbsp; Mosi-sol</div>
      </footer>
    </div>
  );
}
