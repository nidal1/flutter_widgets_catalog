'use client';

import React, { useState, useEffect } from 'react';
import Container from './Container';
import { GlobeIcon, MoonIcon, SearchIcon, SunIcon } from './icons';

export default function Navbar() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur backdrop-filter border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="font-bold text-lg">Flutter Widgets</div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <SearchIcon className="h-5 w-5" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'light' ? (
                <MoonIcon className="h-5 w-5" />
              ) : (
                <SunIcon className="h-5 w-5" />
              )}
            </button>
            <div className="relative">
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <GlobeIcon className="h-5 w-5" />
              </button>
              {/* Dropdown menu can be added here */}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
