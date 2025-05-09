import Link from 'next/link';
import { ThemeToggleButton } from './ThemeToggleButton'; // Import the toggle button

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              Biruk's Portfolio
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#hero" className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="#about" className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="#projects" className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Projects
              </Link>
              <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden md:block"> {/* Container for the toggle button */}
            <div className="ml-4 flex items-center md:ml-6">
              <ThemeToggleButton />
            </div>
          </div>
          {/* Mobile menu button can be added here */}
        </div>
      </div>
    </nav>
  );
}
