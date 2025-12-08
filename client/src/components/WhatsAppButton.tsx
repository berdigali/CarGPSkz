import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const { t } = useLanguage();

  const whatsappNumber = '77782589661';
  const whatsappMessage = t(
    '[Заявка с сайта cargps.kz] Здравствуйте! Хочу подключить GPS трекер',
    '[cargps.kz сайтынан өтінім] Сәлеметсіз бе! GPS трекерін қосқым келеді'
  );

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <Button
      size="lg"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg bg-success hover:bg-success/90 text-success-foreground w-14 h-14"
      data-testid="button-whatsapp-float"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  );
}
