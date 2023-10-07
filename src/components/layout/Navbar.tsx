import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <svg
      className="fill-slate-300"
      viewBox="0 0 285.578 68.326"
      width="285.578px"
      height="68.326px"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 50.992 48.345 L 50.959 48.325 C 50.076 47.719 49.866 46.508 50.493 45.641 C 59.644 29.764 48.149 9.951 29.804 9.975 C 11.461 10.005 0.024 29.851 9.22 45.701 C 15.932 57.27 30.869 61.049 42.288 54.064 C 43.134 53.546 44.232 53.769 44.812 54.572 L 44.823 54.574 C 45.407 55.388 45.197 56.522 44.36 57.072 L 44.005 57.305 C 25.864 68.196 2.718 55.394 2.344 34.257 C 1.968 13.123 24.645 -0.491 43.163 9.752 C 56.733 17.261 61.401 34.487 53.472 47.804 C 52.958 48.667 51.82 48.918 50.992 48.345 Z M 19.901 25.315 C 20.315 24.902 21.329 24.755 21.826 25.315 C 22.439 25.96 22.24 27.016 21.826 27.46 L 15.425 33.669 L 21.669 39.574 C 22.082 39.985 22.137 41.154 21.669 41.619 C 21.101 42.181 19.942 42.092 19.558 41.708 L 12.258 34.446 C 11.847 34.032 11.847 33.361 12.258 32.947 L 19.901 25.318 L 19.901 25.315 Z M 39.766 25.315 L 47.405 32.943 C 47.818 33.358 47.818 34.028 47.405 34.442 L 40.112 41.712 C 39.727 42.092 38.633 42.333 37.998 41.712 C 37.401 41.121 37.588 39.904 37.998 39.495 L 44.267 33.677 L 37.796 27.401 C 37.379 26.956 37.245 25.863 37.796 25.318 C 38.333 24.789 39.352 24.908 39.766 25.318 L 39.766 25.315 Z M 31.922 23.793 C 32.131 23.243 33.159 22.898 33.814 23.142 C 34.441 23.375 34.807 24.24 34.639 24.789 L 27.701 43.841 C 27.499 44.391 26.508 44.611 25.954 44.403 C 25.366 44.2 24.727 43.39 24.939 42.843 L 31.92 23.793 L 31.922 23.793 Z"
        // fill="#F1F6FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 98.597 37.389 C 98.597 39.451 98.345 41.347 97.84 43.079 C 97.336 44.81 96.639 46.302 95.753 47.553 C 94.865 48.804 93.811 49.784 92.592 50.492 C 91.372 51.201 90.046 51.555 88.615 51.555 L 76.936 51.555 C 76.625 51.555 76.337 51.476 76.071 51.319 C 75.805 51.162 75.574 50.945 75.38 50.668 C 75.186 50.393 75.033 50.067 74.923 49.69 C 74.812 49.311 74.756 48.902 74.756 48.462 L 74.756 20.794 C 74.756 20.369 74.812 19.967 74.923 19.59 C 75.033 19.211 75.186 18.882 75.38 18.599 C 75.574 18.315 75.805 18.095 76.071 17.937 C 76.337 17.78 76.625 17.7 76.936 17.7 L 88.615 17.7 C 90.046 17.7 91.372 18.055 92.592 18.764 C 93.811 19.472 94.865 20.451 95.753 21.703 C 96.639 22.954 97.336 24.449 97.84 26.188 C 98.345 27.927 98.597 29.82 98.597 31.865 L 98.597 37.389 Z M 94.272 31.865 C 94.272 30.669 94.136 29.575 93.864 28.585 C 93.593 27.594 93.207 26.747 92.708 26.047 C 92.209 25.346 91.613 24.802 90.919 24.417 C 90.226 24.032 89.458 23.839 88.615 23.839 L 79.082 23.839 L 79.082 45.416 L 88.615 45.416 C 89.458 45.416 90.226 45.224 90.919 44.838 C 91.613 44.452 92.209 43.909 92.708 43.209 C 93.207 42.509 93.593 41.667 93.864 40.684 C 94.136 39.7 94.272 38.602 94.272 37.389 L 94.272 31.865 Z M 121.704 34.487 C 121.704 35.336 121.599 36.253 121.388 37.237 C 121.177 38.22 120.835 39.133 120.365 39.975 C 119.894 40.817 119.277 41.522 118.518 42.088 C 117.758 42.655 116.835 42.938 115.748 42.938 L 107.944 42.938 L 107.944 37.106 L 115.748 37.106 C 116.335 37.106 116.791 36.851 117.111 36.339 C 117.434 35.827 117.595 35.195 117.595 34.439 C 117.595 33.637 117.415 33.007 117.054 32.549 C 116.693 32.094 116.258 31.865 115.748 31.865 L 107.944 31.865 C 107.357 31.865 106.901 32.121 106.581 32.633 C 106.26 33.145 106.098 33.779 106.098 34.534 L 106.098 43.103 C 106.098 43.921 106.279 44.559 106.639 45.016 C 106.999 45.471 107.445 45.7 107.978 45.7 L 115.748 45.7 L 115.748 51.555 L 107.944 51.555 C 107.346 51.555 106.7 51.404 106.006 51.106 C 105.313 50.807 104.67 50.323 104.076 49.653 C 103.484 48.986 102.987 48.111 102.587 47.034 C 102.189 45.955 101.988 44.645 101.988 43.103 L 101.988 34.487 C 101.988 33.636 102.094 32.72 102.304 31.737 C 102.515 30.753 102.857 29.84 103.328 28.998 C 103.799 28.155 104.415 27.451 105.174 26.884 C 105.934 26.318 106.857 26.035 107.944 26.035 L 115.748 26.035 C 116.347 26.035 116.994 26.185 117.686 26.484 C 118.379 26.783 119.022 27.266 119.616 27.935 C 120.21 28.604 120.706 29.477 121.105 30.556 C 121.504 31.633 121.704 32.944 121.704 34.487 Z M 142.031 51.555 L 130.302 51.555 C 129.703 51.555 129.049 51.404 128.339 51.106 C 127.629 50.807 126.972 50.315 126.367 49.631 C 125.762 48.946 125.258 48.057 124.854 46.962 C 124.449 45.869 124.246 44.527 124.246 42.938 L 124.246 34.629 C 124.246 34.045 124.293 33.432 124.387 32.786 C 124.481 32.141 124.629 31.5 124.827 30.862 C 125.028 30.225 125.286 29.615 125.602 29.033 C 125.918 28.45 126.301 27.939 126.75 27.499 C 127.199 27.059 127.718 26.704 128.306 26.436 C 128.893 26.169 129.559 26.035 130.302 26.035 L 142.031 26.035 L 142.031 32.173 L 130.302 32.173 C 129.736 32.173 129.307 32.377 129.013 32.786 C 128.718 33.196 128.572 33.826 128.572 34.674 L 128.572 42.938 C 128.572 43.74 128.722 44.355 129.021 44.779 C 129.319 45.204 129.758 45.416 130.335 45.416 L 142.031 45.416 L 142.031 51.555 Z M 153.512 51.555 L 151.582 51.555 C 150.961 51.555 150.298 51.404 149.594 51.106 C 148.89 50.807 148.233 50.315 147.624 49.631 C 147.013 48.946 146.508 48.057 146.109 46.962 C 145.709 45.869 145.51 44.527 145.51 42.938 L 145.51 15.246 L 149.835 15.246 L 149.835 42.938 C 149.835 43.693 150.002 44.296 150.335 44.743 C 150.668 45.192 151.083 45.416 151.582 45.416 L 153.512 45.416 L 153.512 51.555 Z M 174.857 43.103 C 174.857 43.953 174.752 44.871 174.541 45.853 C 174.33 46.836 173.989 47.75 173.518 48.592 C 173.046 49.433 172.431 50.138 171.671 50.705 C 170.911 51.271 169.987 51.555 168.9 51.555 L 161.097 51.555 C 160.498 51.555 159.853 51.404 159.16 51.106 C 158.466 50.807 157.823 50.323 157.23 49.653 C 156.636 48.986 156.139 48.111 155.741 47.034 C 155.342 45.955 155.141 44.645 155.141 43.103 C 155.141 42.252 155.247 41.332 155.458 40.341 C 155.668 39.349 156.009 38.432 156.48 37.591 C 156.951 36.748 157.568 36.044 158.328 35.477 C 159.087 34.91 160.01 34.629 161.097 34.629 L 168.9 34.629 L 168.9 40.483 L 161.097 40.483 C 160.509 40.483 160.055 40.738 159.734 41.25 C 159.412 41.762 159.25 42.395 159.25 43.15 C 159.25 43.952 159.436 44.578 159.809 45.027 C 160.18 45.475 160.621 45.7 161.131 45.7 L 168.9 45.7 C 169.488 45.7 169.944 45.448 170.265 44.944 C 170.586 44.441 170.747 43.811 170.747 43.055 L 170.747 34.487 C 170.747 33.684 170.573 33.046 170.223 32.574 C 169.874 32.102 169.432 31.865 168.9 31.865 L 159.4 31.865 L 159.4 26.035 L 168.9 26.035 C 169.5 26.035 170.145 26.185 170.839 26.484 C 171.531 26.783 172.175 27.266 172.769 27.935 C 173.361 28.604 173.858 29.477 174.258 30.556 C 174.657 31.633 174.857 32.944 174.857 34.487 L 174.857 43.103 Z M 198.481 51.555 L 194.156 51.555 L 194.156 37.389 C 194.156 36.587 194.059 35.867 193.865 35.23 C 193.67 34.592 193.407 34.045 193.074 33.59 C 192.741 33.133 192.35 32.782 191.901 32.538 C 191.452 32.294 190.967 32.173 190.445 32.173 L 182.876 32.173 L 182.876 51.555 L 178.55 51.555 L 178.55 29.081 C 178.55 28.655 178.606 28.258 178.716 27.889 C 178.827 27.518 178.983 27.196 179.181 26.919 C 179.382 26.645 179.615 26.428 179.881 26.271 C 180.147 26.113 180.43 26.035 180.729 26.035 L 190.479 26.035 C 191.023 26.035 191.597 26.121 192.201 26.294 C 192.805 26.467 193.405 26.747 193.998 27.132 C 194.59 27.517 195.157 28.006 195.695 28.596 C 196.233 29.186 196.709 29.902 197.125 30.744 C 197.541 31.586 197.872 32.558 198.115 33.661 C 198.36 34.761 198.481 36.005 198.481 37.389 L 198.481 51.555 Z M 237.376 48.462 C 237.376 48.902 237.32 49.311 237.209 49.69 C 237.099 50.067 236.946 50.393 236.751 50.668 C 236.558 50.945 236.328 51.162 236.062 51.319 C 235.795 51.476 235.507 51.555 235.196 51.555 L 219.59 51.555 C 219.192 51.555 218.761 51.488 218.302 51.353 C 217.84 51.22 217.386 51.012 216.937 50.727 C 216.487 50.446 216.058 50.08 215.647 49.631 C 215.238 49.182 214.873 48.639 214.557 48.002 C 214.241 47.364 213.989 46.624 213.8 45.783 C 213.612 44.94 213.518 43.992 213.518 42.938 L 213.518 26.318 C 213.518 25.752 213.565 25.142 213.659 24.489 C 213.754 23.835 213.9 23.19 214.1 22.553 C 214.3 21.915 214.561 21.305 214.882 20.723 C 215.203 20.141 215.589 19.625 216.038 19.176 C 216.487 18.729 217.006 18.371 217.595 18.103 C 218.182 17.836 218.848 17.7 219.59 17.7 L 237.176 17.7 L 237.176 23.839 L 219.59 23.839 C 219.025 23.839 218.592 24.052 218.292 24.476 C 217.993 24.902 217.843 25.531 217.843 26.366 L 217.843 42.938 C 217.843 43.725 217.996 44.334 218.302 44.767 C 218.606 45.201 219.036 45.416 219.59 45.416 L 233.049 45.416 L 233.049 37.72 L 221.537 37.72 L 221.537 31.534 L 235.196 31.534 C 235.507 31.534 235.795 31.618 236.062 31.782 C 236.328 31.948 236.558 32.172 236.751 32.457 C 236.946 32.739 237.099 33.066 237.209 33.436 C 237.32 33.805 237.376 34.203 237.376 34.629 L 237.376 48.462 Z M 259.966 43.103 C 259.966 43.953 259.861 44.871 259.651 45.853 C 259.44 46.836 259.099 47.75 258.627 48.592 C 258.156 49.433 257.54 50.138 256.78 50.705 C 256.021 51.271 255.097 51.555 254.01 51.555 L 246.207 51.555 C 245.608 51.555 244.963 51.404 244.269 51.106 C 243.575 50.807 242.932 50.323 242.339 49.653 C 241.745 48.986 241.249 48.111 240.85 47.034 C 240.451 45.955 240.251 44.645 240.251 43.103 C 240.251 42.252 240.356 41.332 240.567 40.341 C 240.778 39.349 241.119 38.432 241.591 37.591 C 242.062 36.748 242.678 36.044 243.437 35.477 C 244.196 34.91 245.12 34.629 246.207 34.629 L 254.01 34.629 L 254.01 40.483 L 246.207 40.483 C 245.619 40.483 245.164 40.738 244.843 41.25 C 244.522 41.762 244.36 42.395 244.36 43.15 C 244.36 43.952 244.546 44.578 244.918 45.027 C 245.289 45.475 245.731 45.7 246.24 45.7 L 254.01 45.7 C 254.597 45.7 255.053 45.448 255.374 44.944 C 255.696 44.441 255.857 43.811 255.857 43.055 L 255.857 34.487 C 255.857 33.684 255.682 33.046 255.332 32.574 C 254.983 32.102 254.542 31.865 254.01 31.865 L 244.511 31.865 L 244.511 26.035 L 254.01 26.035 C 254.61 26.035 255.256 26.185 255.948 26.484 C 256.642 26.783 257.284 27.266 257.878 27.935 C 258.472 28.604 258.968 29.477 259.367 30.556 C 259.766 31.633 259.966 32.944 259.966 34.487 L 259.966 43.103 Z M 283.224 42.938 C 283.224 43.992 283.131 44.94 282.942 45.783 C 282.753 46.624 282.505 47.364 282.194 48.002 C 281.883 48.639 281.522 49.182 281.112 49.631 C 280.702 50.08 280.272 50.446 279.823 50.727 C 279.374 51.012 278.92 51.22 278.459 51.353 C 277.998 51.488 277.563 51.555 277.153 51.555 L 269.349 51.555 C 268.751 51.555 268.096 51.404 267.386 51.106 C 266.677 50.807 266.02 50.315 265.414 49.631 C 264.81 48.946 264.306 48.057 263.901 46.962 C 263.496 45.869 263.293 44.527 263.293 42.938 L 263.293 34.629 C 263.293 33.054 263.496 31.719 263.901 30.626 C 264.306 29.533 264.81 28.644 265.414 27.958 C 266.02 27.274 266.677 26.783 267.386 26.484 C 268.096 26.185 268.751 26.035 269.349 26.035 L 277.153 26.035 C 278.261 26.035 279.204 26.318 279.981 26.884 C 280.758 27.451 281.384 28.164 281.861 29.021 C 282.338 29.879 282.685 30.812 282.901 31.818 C 283.117 32.826 283.224 33.762 283.224 34.629 L 283.224 42.938 Z M 278.9 34.674 C 278.9 33.826 278.75 33.196 278.45 32.786 C 278.15 32.377 277.718 32.173 277.153 32.173 L 269.382 32.173 C 268.805 32.173 268.369 32.381 268.068 32.797 C 267.77 33.214 267.62 33.826 267.62 34.629 L 267.62 42.938 C 267.62 43.74 267.77 44.355 268.068 44.779 C 268.369 45.204 268.805 45.416 269.382 45.416 L 277.153 45.416 C 277.74 45.416 278.178 45.204 278.466 44.779 C 278.755 44.355 278.9 43.74 278.9 42.938 L 278.9 34.674 Z"
        // fill="#F1F6FF"
      />
    </svg>
  );
};

const GitHubLink = (props: { isMobile?: boolean }) => {
  return (
    <a
      className={`flex justify-center ${
        props.isMobile ? 'md:hidden' : 'hidden md:inline'
      }`}
      href="https://github.com/declangao"
      target="_blank"
    >
      <svg
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0"
        className="w-5 h-5 fill-slate-300"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        <circle cx="4" cy="4" r="2" stroke="none"></circle>
      </svg>
    </a>
  );
};

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState('Components');

  const toggleMobileMenu = () => {
    setIsNavOpen(!isNavOpen);
    setToggle(!toggle);
  };

  const NavbarList = [
    {
      name: 'Experience',
      href: '/experience',
    },
    {
      name: 'Projects',
      href: '/projects',
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ];

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    setIsDarkMode(localStorage.getItem('theme') === 'light' ? false : true);

    if (localStorage.getItem('theme') === 'light') {
      document.querySelector('html')?.classList.remove('dark');
    }
  }, []);

  function toggleDarkTheme() {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.querySelector('html')?.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      setIsDarkMode(true);
      document.querySelector('html')?.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50 backdrop-blur supports-backdrop-blur:bg-white/95 bg-slate-900/75">
        <div className="container flex justify-between w-full max-w-screen-3xl mx-auto font-semibold h-20 px-5">
          <Link
            href="/"
            onClick={() => {
              setSelected('Home');
            }}
            className="flex items-center gap-3 md:gap-4 mr-5"
          >
            <Logo />
          </Link>

          <nav className="flex items-center sm:gap-3 md:gap-8">
            {NavbarList.map((data, index) => (
              <Link key={index} href={data.href}>
                <motion.div
                  className="group"
                  data-testid={`${data.name}-navlink`}
                  onClick={() => setSelected(data.name)}
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                  }}
                >
                  <span className="font-nunito text-lg text-center font-semibold text-white opacity-80 cursor-pointer md:flex md:items-center hidden">
                    {data.name}
                  </span>
                  <div
                    className={`w-full h-0.5 ${
                      selected == data?.name
                        ? 'bg-white opacity-80'
                        : 'group-hover:bg-white group-hover:opacity-80'
                    }`}
                  ></div>
                </motion.div>
              </Link>
            ))}

            <motion.div
              whileHover={{
                y: -5,
                scale: 1.05,
              }}
            >
              <GitHubLink />
            </motion.div>

            {/* <DarkModeToggle /> */}
            <button onClick={toggleDarkTheme}>
              {isDarkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-7 w-7 fill-slate-300"
                >
                  <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-7 w-7 fill-slate-300"
                >
                  <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                </svg>
              )}
            </button>

            <button
              className="w-12 h-12 relative focus:outline-none md:hidden"
              onClick={() => {
                toggleMobileMenu();
              }}
            >
              <div className="block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                <span
                  className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out ${
                    toggle ? 'rotate-45' : '-translate-y-1.5'
                  }  
                `}
                ></span>
                <span
                  className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out ${
                    toggle && 'opacity-0'
                  }`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out ${
                    toggle ? '-rotate-45' : 'translate-y-1.5'
                  }`}
                ></span>
              </div>
            </button>
          </nav>

          <div
            className={`md:invisible w-full h-full flex flex-wrap flex-col justify-center fixed left-0 top-11 ${
              toggle ? 'visible z-20' : 'invisible -z-10'
            }`}
          >
            <div
              className={`md:w-full bg-slate-800 absolute left-0 transition-all duration-300 ease-in-out top-8 h-screen ${
                toggle ? 'w-3/5 opacity-60' : 'w-0 -z-10'
              }`}
            ></div>
            <div
              data-tilt
              data-tilt-perspective="2000"
              className="h-screen relative z-20 text-center pt-24 md:w-full w-3/5"
            >
              <div
                className={`block min-h-[130px] w-fit mt-80 mx-auto transform transition ${
                  toggle
                    ? 'opacity-100 -translate-y-1/3 delay-[0.45s]'
                    : 'opacity-0 -translate-y-0  delay-[0s]'
                }`}
              >
                <ul
                  className={`transition w-fit flex flex-col gap-5 my-5 ${
                    toggle ? 'delay-[0.45s]' : 'delay-[0s]'
                  }`}
                >
                  {NavbarList.map((data, index) => (
                    <li
                      className="font-semibold text-white text-opacity-100 text-center cursor-pointer px-2 md:hidden"
                      key={index}
                    >
                      <Link href={data.href} onClick={toggleMobileMenu}>
                        {data.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <GitHubLink isMobile />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}