import DeviceSection from '../DeviceSection';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function DeviceSectionExample() {
  return (
    <LanguageProvider>
      <DeviceSection />
    </LanguageProvider>
  );
}
