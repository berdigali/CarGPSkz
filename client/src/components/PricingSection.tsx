import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, MessageCircle } from 'lucide-react';

export default function PricingSection() {
  const { t } = useLanguage();

  const whatsappNumber = '77782589661';
  const whatsappMessage = t(
    '[Заявка с сайта cargps.kz] Здравствуйте! Хочу узнать подробнее о тарифах',
    '[cargps.kz сайтынан өтінім] Сәлеметсіз бе! Тарифтер туралы толығырақ білгім келеді'
  );

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const features = [
    t('Онлайн-карта + история 6–12 месяцев', 'Онлайн карта + 6–12 ай тарихы'),
    t('Уведомления: скорость, геозоны, питание', 'Ескертулер: жылдамдық, геоаймақ, қуат'),
    t('Поддержка 7 дней в неделю', 'Апта сайын 7 күн қолдау'),
  ];

  return (
    <section id="pricing" className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl font-bold mb-4" data-testid="text-pricing-title">
            {t('Тарифы CarGPS', 'CarGPS тарифтері')}
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-pricing-subtitle">
            {t(
              'Гибкие планы для контроля одного авто или целого автопарка',
              'Бір автокөлік немесе бүкіл автопаркті бақылау үшін икемді жоспарлар'
            )}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8" data-testid="card-pricing">
            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm text-muted-foreground">
                  {t('от', '')}
                </span>
                <span className="text-4xl font-bold" data-testid="text-price-amount">2000 ₸</span>
                <span className="text-muted-foreground" data-testid="text-price-period">
                  {t('/мес', '/ай')}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {t('* Цена за одно устройство', '* Бір құрылғыға баға')}
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2" data-testid={`list-pricing-feature-${index + 1}`}>
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              className="w-full bg-success hover:bg-success/90 text-success-foreground"
              onClick={handleWhatsAppClick}
              data-testid="button-pricing-whatsapp"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t('Подключить сейчас', 'Қазір қосу')}
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
