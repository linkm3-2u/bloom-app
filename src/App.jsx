
import React from "react";

import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
import Home from "./pages/Home";
import CheckIn from "./pages/CheckIn";
import Progress from "./pages/Progress";
import Resources from "./pages/Resources";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import WelcomePage from "./pages/WelcomePage";
import Journaling from "./pages/Journaling";

const queryClient = new QueryClient();

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#D3E4FD',
      light: '#E1EEFF',
      dark: '#A3C4ED',
      contrastText: '#333333',
    },
    secondary: {
      main: '#E5DEFF',
      light: '#F2EEFF',
      dark: '#C5BEDE',
      contrastText: '#333333',
    },
    background: {
      default: '#f8f9fc',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Quicksand", sans-serif',
    h1: {
      fontWeight: 500,
    },
    h2: {
      fontWeight: 500,
    },
    h3: {
      fontWeight: 500,
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
    button: {
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         borderRadius: 24,
  //         padding: '8px 16px',
  //       },
  //     },
  //   },
  //   MuiCard: {
  //     styleOverrides: {
  //       root: {
  //         borderRadius: 16,
  //         boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  //       },
  //     },
  //   },
  // },
});

const App = () => (
  <ThemeProvider theme={theme}>
    {/* <CssBaseline /> */}
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider maxSnack={3}>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* Render Navigation at the top */}
          <Navigation />

          {/* Add padding-top to account for the fixed navbar */}
          <div className="min-h-screen"> {/* pt-24 = ~96px if using Tailwind */}
            <Routes>
              {/* Route for the Welcome Page */}
              <Route path="/" element={<WelcomePage />} />
              {/* Route for the Home Page (Only accessible when logged in) */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/home" element={<Home />} />
              <Route path="/check-in" element={<CheckIn />} />
              <Route path="/journaling" element={<Journaling />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </SnackbarProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
