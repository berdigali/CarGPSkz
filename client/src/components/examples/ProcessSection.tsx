import ProcessSection from '../ProcessSection';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function ProcessSectionExample() {
  return (
    <LanguageProvider>
      <ProcessSection />
    </LanguageProvider>
  );
}
