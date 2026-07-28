import { lazy, type ReactNode, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AppLayout } from '@/app/AppLayout';

const AboutPage = lazy(() => import('@/pages/AboutPage').then((module) => ({ default: module.AboutPage })));
const ArticlePage = lazy(() => import('@/pages/ArticlePage').then((module) => ({ default: module.ArticlePage })));
const BlogPage = lazy(() => import('@/pages/BlogPage').then((module) => ({ default: module.BlogPage })));
const ErrorPage = lazy(() => import('@/pages/ErrorPage').then((module) => ({ default: module.ErrorPage })));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage })));
const ProjectPage = lazy(() => import('@/pages/ProjectPage').then((module) => ({ default: module.ProjectPage })));
const ResumePage = lazy(() => import('@/pages/ResumePage').then((module) => ({ default: module.ResumePage })));
const WorkPage = lazy(() => import('@/pages/WorkPage').then((module) => ({ default: module.WorkPage })));

function RouteSuspense({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<div role="status" aria-live="polite" className="min-h-[52vh]" />}>
      {children}
    </Suspense>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <RouteSuspense><ErrorPage /></RouteSuspense>,
    children: [
      { index: true, element: <RouteSuspense><WorkPage /></RouteSuspense> },
      { path: 'blog', element: <RouteSuspense><BlogPage /></RouteSuspense> },
      { path: 'about', element: <RouteSuspense><AboutPage /></RouteSuspense> },
      { path: 'resume', element: <RouteSuspense><ResumePage /></RouteSuspense> },
      { path: 'projects/:slug', element: <RouteSuspense><ProjectPage /></RouteSuspense> },
      { path: 'articles/:slug', element: <RouteSuspense><ArticlePage /></RouteSuspense> },
      { path: 'error', element: <RouteSuspense><ErrorPage /></RouteSuspense> },
      { path: '*', element: <RouteSuspense><NotFoundPage /></RouteSuspense> },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
