import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy-load route-level pages for code splitting
const MainPage = lazy(() => import("./components/Main/MainPage"));
const ProjectDetails = lazy(() => import("./components/Main/ProjectDetails"));
const AllProjects = lazy(() => import("./components/Main/AllProjects"));

// Simple loading spinner
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-6 h-6 border-2 border-border border-t-subtle rounded-full animate-spin"></div>
  </div>
);

// 404 fallback page
const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-body">
    <h1 className="text-6xl font-bold text-heading">404</h1>
    <p className="text-lg">Page not found</p>
    <a
      href="/"
      className="mt-2 text-sm font-medium text-heading hover:text-body transition-colors underline"
    >
      Back to Home
    </a>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/projects/" element={<AllProjects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
