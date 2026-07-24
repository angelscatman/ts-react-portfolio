import { useContext } from 'react';

import { AppServicesContext } from '@/app/AppServicesContext';

export function useAppServices() {
  const services = useContext(AppServicesContext);

  if (!services) {
    throw new Error('useAppServices must be used inside AppServicesProvider');
  }

  return services;
}

export function useContentService() {
  return useAppServices().contentService;
}

export function useCopyService() {
  return useAppServices().copyService;
}

export function useCvService() {
  return useAppServices().cvService;
}

export function usePreferencesService() {
  return useAppServices().preferencesService;
}
