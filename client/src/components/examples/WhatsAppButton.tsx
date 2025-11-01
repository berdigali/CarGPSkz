import WhatsAppButton from '../WhatsAppButton';
import { LanguageProvider } from '@/contexts/LanguageContext';

export default function WhatsAppButtonExample() {
  return (
    <LanguageProvider>
      <div className="h-screen relative">
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}
