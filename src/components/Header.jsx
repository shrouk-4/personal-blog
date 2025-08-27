import React from "react";

function Header() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 w-full mb-6 " >
  <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
    {/* Logo */}
    <a href="#" className="flex items-center space-x-2">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="h-8"
        alt="Logo"
      />
      <span className="text-2xl font-semibold dark:text-white">MyBlog</span>
    </a>

    {/* Search bar */}
    <div className="hidden md:block relative w-130">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </span>
      <input
        type="text"
        placeholder="Search..."
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
      />
    </div>

    {/* Menu items */}
    <ul className="hidden md:flex space-x-8 font-medium">
      <li>
        <a
          href="#"
          className="text-blue-700 dark:text-blue-400 hover:underline"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-gray-900 dark:text-white hover:text-blue-700"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#"
          className="text-gray-900 dark:text-white hover:text-blue-700"
        >
          Services
        </a>
      </li>
    </ul>
  </div>
</nav>

  );
}

export default Header;
