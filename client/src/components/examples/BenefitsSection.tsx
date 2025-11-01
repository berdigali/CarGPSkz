import BenefitsSection from '../BenefitsSection';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function BenefitsSectionExample() {
  return (
    <LanguageProvider>
      <BenefitsSection />
    </LanguageProvider>
  );
}
