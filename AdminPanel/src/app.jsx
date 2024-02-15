/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';
import { useEffect } from 'react';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();
  useEffect(() => {
    // Check if the token exists in your preferred way (e.g., from localStorage, sessionStorage, Redux store, etc.)
    const token = localStorage.getItem('token');

    // Define the destination routes
    const dashboardRoute = '/dashboard';
    const defaultRoute = '/';

    // Conditionally redirect based on the presence of the token
    const redirectTo = token ? dashboardRoute : defaultRoute;

    // Perform the redirection
    if (window.location.pathname !== redirectTo) {
      window.location.pathname = redirectTo;
    }
  }, []);
  

  return (
    <ThemeProvider>
      <ToastContainer />
      <Router />
    </ThemeProvider>
  );
}
