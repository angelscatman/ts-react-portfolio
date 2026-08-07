import '@payloadcms/next/css';

import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts';
import type { ServerFunctionHandler } from 'payload';
import type { ReactNode } from 'react';

import configPromise from '../../payload.config';
import { importMap } from './importMap.js';

type PayloadLayoutProps = {
  children: ReactNode;
};

const serverFunction: ServerFunctionHandler = async (args) => {
  'use server';

  return handleServerFunctions({
    ...args,
    config: configPromise,
    importMap,
  });
};

export default function PayloadLayout({ children }: PayloadLayoutProps) {
  return RootLayout({
    children,
    config: configPromise,
    importMap,
    serverFunction,
  });
}