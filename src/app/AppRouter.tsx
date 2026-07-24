import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AppLayout } from '@/app/AppLayout';
import { AboutPage } from '@/pages/AboutPage';
import { ArticlePage } from '@/pages/ArticlePage';
import { BlogPage } from '@/pages/BlogPage';
import { ErrorPage } from '@/pages/ErrorPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProjectPage } from '@/pages/ProjectPage';
import { ResumePage } from '@/pages/ResumePage';
import { WorkPage } from '@/pages/WorkPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <WorkPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'resume', element: <ResumePage /> },
      { path: 'projects/:slug', element: <ProjectPage /> },
      { path: 'articles/:slug', element: <ArticlePage /> },
      { path: 'error', element: <ErrorPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
