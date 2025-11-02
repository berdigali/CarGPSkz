import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle } from 'lucide-react';
import heroImage from '@assets/generated_images/GPS_tracker_in_car_dashboard_3e8c6fc0.png';

export default function HeroSection() {
  const { t } = useLanguage();

  const whatsappNumber = '77782589661';
  const whatsappMessage = t(
    'Здравствуйте! Хочу подключить GPS трекер CarGPS.kz',
    'Сәлеметсіз бе! CarGPS.kz GPS трекерін қосқым келеді'
  );

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="GPS tracker in car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6" data-testid="text-hero-title">
            {t(
              '4G GPS трекер в Казахстане — мониторинг транспорта от CarGPS.kz',
              '4G GPS трекер Қазақстанда — CarGPS.kz көлік мониторингі'
            )}
          </h1>

          <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8" data-testid="text-hero-subtitle">
            {t(
              'Надёжный контроль авто и автопарков: трекер GS900 + онлайн-сервис. Установка за 30 минут. Тарифы от 2000 ₸/мес.',
              'Сенімді бақылау: GS900 трекері + онлайн сервис. Орнату — 30 минут. Тарифтер айына 2000 ₸-ден.'
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-success hover:bg-success/90 text-success-foreground w-full sm:w-auto"
              data-testid="button-whatsapp"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t('Написать в WhatsApp', 'WhatsApp жазу')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToPricing}
              className="w-full sm:w-auto"
              data-testid="button-view-pricing"
            >
              {t('Смотреть тарифы', 'Тарифтерді көру')}
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" data-testid="badge-feature-1">
              {t('Онлайн-карта', 'Онлайн карта')}
            </Badge>
            <Badge variant="secondary" data-testid="badge-feature-2">
              {t('История поездок', 'Сапар тарихы')}
            </Badge>
            <Badge variant="secondary" data-testid="badge-feature-3">
              {t('Геозоны и уведомления', 'Геоаймақ ескертулері')}
            </Badge>
            <Badge variant="secondary" data-testid="badge-feature-4">
              {t('Экономия топлива', 'Жанармай үнемі')}
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
