// import { Link } from "gatsby"
import React from "react";
import { useStateValue } from "../utils/state";
import { darkTheme, lightTheme } from "../utils/theme";

const Header = () => {
  const [{ theme }, dispatch] = useStateValue();
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 w-screen h-full">
        <nav className={`relative flex items-center justify-between sm:h-10 md:justify-center`}>
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-full">
              <div className="flex flex-row justify-center">
                {theme.name === "dark" ? (
                  <button
                    type="button"
                    className={`ml-4 mr-1 py-1 rounded-full inline-block self-center focus:outline-none ${theme.text.accent7}  hover:${theme.bg.accent1} hover:${theme.text.inverse} focus:${theme.bg.accent1} focus:${theme.text.inverse}`}
                    onClick={() =>
                      dispatch({
                        type: "changeTheme",
                        newTheme: lightTheme
                      })
                    }
                  >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className={`inline w-6 h-6 mx-1`}
                  >
                    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                  </button>
                ) : (
                  <button
                    type="button"
                    className={`ml-4 mr-1 py-1 rounded-full inline-block self-center focus:outline-none ${theme.text.accent7}  hover:${theme.bg.accent1} hover:${theme.text.inverse} focus:${theme.bg.accent1} focus:${theme.text.inverse}`}
                    onClick={() =>
                      dispatch({
                        type: "changeTheme",
                        newTheme: darkTheme
                      })
                    }
                  >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className={`inline w-6 h-6 mx-1`}
                  >
                    <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                  </svg>

                  </button>
                )}

                <a
                  href="/"
                  className={`text-2xl ${theme.text.normal} py-2 font-hairline inline-block`}
                >
                  <span className={`font-serif ${theme.text.accent7} font-bold`}>
                    nap
                  </span>
                  time.app
                </a>
              </div>
              <div className="-mr-2 flex items-center md:hidden">
                {/*<button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>*/}
              </div>
            </div>
          </div>
          {/*<div className="hidden md:block">
            <a
              href="/#features"
              className="mx-5 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
            >
              features
            </a>
          </div>*/}
          {/*<div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
              <span className="inline-flex rounded-md shadow">
                <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-midnight-600 bg-white hover:text-midnight-500 focus:outline-none focus:shadow-outline-blue active:bg-gray-50 active:text-midnight-700 transition duration-150 ease-in-out">
                  Log in
                </a>
              </span>
            </div>*/}
        </nav>
      </div>

      <div
        style={{ display: "none" }}
        className="absolute top-0 inset-x-0 p-2 md:hidden"
      >
        <div className="rounded-lg shadow-md transition transform origin-top-right">
          <div className={`rounded-lg bg-white shadow-xs overflow-hidden`}>
            <div className="px-5 pt-4 flex items-center justify-between">
            <div className="flex flex-row">
              {theme.name === "dark" ? (
                <button
                  type="button"
                  className="ml-4 py-2 inline-block"
                  onClick={() =>
                    dispatch({
                      type: "changeTheme",
                      newTheme: lightTheme
                    })
                  }
                >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className={`${theme.text.accent7} inline w-6 h-6 mx-1 hover:${theme.text.accent3}`}
                >
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
                </button>
              ) : (
                <button
                  type="button"
                  className="ml-4 py-2 inline-block"
                  onClick={() =>
                    dispatch({
                      type: "changeTheme",
                      newTheme: darkTheme
                    })
                  }
                >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className={`${theme.text.accent7} inline w-6 h-6 mx-1 hover:${theme.text.accent3}`}
                >
                  <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                </svg>

                </button>
              )}

              <a
                href="/"
                className={`text-2xl ${theme.text.normal} py-2 font-hairline inline-block`}
              >
                <span className={`font-serif ${theme.text.accent7} font-bold`}>
                  nap
                </span>
                time.app
              </a>
            </div>
              <div className="-mr-2">
                {/*<button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>*/}
              </div>
            </div>
            {/*<div className="px-2 pt-2 pb-3">
              <a
                href="#"
                className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
              >
                Features
              </a>
              <a
                href="#"
                className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
              >
                About
              </a>
            </div>*/}
            {/*<div>
                <a href="#" className="block w-full px-5 py-3 text-center font-medium text-midnight-600 bg-gray-50 hover:bg-gray-100 hover:text-midnight-700 focus:outline-none focus:bg-gray-100 focus:text-midnight-700 transition duration-150 ease-in-out">
                  Log in
                </a>
              </div>*/}
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;

// <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
//   <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
//     Coming soon
//   </div>
//   <div className="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
//     <p className="text-base font-medium text-gray-900">
//       Sign up to get notified when it's ready.
//     </p>
//     <form action="#" method="POST" className="mt-3 sm:flex">
//       <input aria-label="Email" className="appearance-none block w-full px-3 py-3 border border-gray-300 text-base leading-6 rounded-md placeholder-gray-500 shadow-sm focus:outline-none focus:placeholder-gray-400 focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:flex-1" placeholder="Enter your email" />
//       <button type="submit" className="mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-700 focus:outline-none focus:shadow-outline active:bg-gray-900 transition duration-150 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto">
//         Notify me
//       </button>
//     </form>
//     <p className="mt-3 text-sm leading-5 text-gray-500">
//       We care about the protection of your data. Read our{` `}
//       <a href="/privacy" className="font-medium text-gray-900 underline">Privacy Policy</a>.
//     </p>
//   </div>
// </div>
