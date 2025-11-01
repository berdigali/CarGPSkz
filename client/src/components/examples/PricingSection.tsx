import PricingSection from '../PricingSection';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function PricingSectionExample() {
  return (
    <LanguageProvider>
      <PricingSection />
    </LanguageProvider>
  );
}
