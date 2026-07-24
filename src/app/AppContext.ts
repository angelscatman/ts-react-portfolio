import { createContext } from 'react';

import type { AppContextValue } from '@/types/core/app.types';

export const AppContext = createContext<AppContextValue | null>(null);
