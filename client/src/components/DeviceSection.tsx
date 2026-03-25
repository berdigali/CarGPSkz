import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, ShoppingCart } from 'lucide-react';
import deviceImage from '@assets/gs900_new.png';

export default function DeviceSection() {
  const { t } = useLanguage();

  const features = [
    t('История маршрутов и стоянок', 'Маршрут және тоқтау тарихы'),
    t('Уведомления в WhatsApp/Telegram', 'WhatsApp/Telegram ескертулері'),
    t('Поддержка легковых, грузовых и спецтехники', 'Жеңіл, жүк, арнайы техникаға жарамды'),
  ];

  return (
    <section id="devices" className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src={deviceImage}
              alt="GS900 GPS Tracker"
              className="w-full rounded-lg"
              loading="lazy"
              width="1024"
              height="1024"
              data-testid="img-device"
            />
          </div>

          <Card className="p-8 order-1 lg:order-2" data-testid="card-device">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-device-title">
              {t('GPS трекер GS900', 'GS900 GPS трекері')}
            </h2>

            <p className="text-muted-foreground mb-6" data-testid="text-device-description">
              {t(
                'Компактный и надёжный. Поддержка 4G, точность позиционирования, датчики зажигания/движения.',
                'Ықты және сенімді. 4G қолдауы, дәл позиция, тұтану/қозғалыс датчиктері.'
              )}
            </p>

            <div className="mb-6 flex items-baseline gap-2">
              <span className="text-3xl font-bold" data-testid="text-device-price">15 000 ₸</span>
              <span className="text-muted-foreground" data-testid="text-device-price-note">
                {t('разово', 'бір реттік')}
              </span>
              <Badge variant="outline" className="ml-2" data-testid="badge-installation">
                {t('установка по запросу', 'орнату — сұрау бойынша')}
              </Badge>
            </div>

            <ul className="space-y-3 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2" data-testid={`list-feature-${index + 1}`}>
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="bg-[#F14635] hover:bg-[#d93c2c] text-white w-full sm:w-auto"
              data-testid="button-device-kaspi"
            >
              <a href="https://kaspi.kz/shop/p/wanway-gs900-gps-gsm-123295185/?m=12144008&ms=true" target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="w-5 h-5 mr-2" />
                {t('КУПИТЬ НА KASPI', 'KASPI-ДЕН САТЫП АЛУ')}
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
