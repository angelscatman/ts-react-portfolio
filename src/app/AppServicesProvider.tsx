import { type ReactNode, useMemo } from 'react';

import { AppServicesContext } from '@/app/AppServicesContext';
import { createAppServices } from '@/app/createAppServices';

type AppServicesProviderProps = {
  children: ReactNode;
};

export function AppServicesProvider({ children }: AppServicesProviderProps) {
  const services = useMemo(() => createAppServices(), []);

  return <AppServicesContext.Provider value={services}>{children}</AppServicesContext.Provider>;
}
