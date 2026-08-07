import { AppProvider } from '@/app/AppProvider';
import { AppRouter } from '@/app/AppRouter';
import { AppServicesProvider } from '@/app/AppServicesProvider';

export default function App() {
  return (
    <AppServicesProvider>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </AppServicesProvider>
  );
}
