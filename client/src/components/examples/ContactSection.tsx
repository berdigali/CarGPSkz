import ContactSection from '../ContactSection';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function ContactSectionExample() {
  return (
    <LanguageProvider>
      <ContactSection />
    </LanguageProvider>
  );
}
