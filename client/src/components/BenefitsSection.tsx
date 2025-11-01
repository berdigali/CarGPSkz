import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Settings, FileText, TrendingDown } from 'lucide-react';

export default function BenefitsSection() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Settings,
      title: t('1. Простая установка', '1. Оңай орнату'),
      description: t(
        'Подключим трекер к питанию авто, проверим сигнал и выдадим доступ в личный кабинет.',
        'Трекерді автокөлікке қосып, сигналды тексереміз және жеке кабинетке қолжеткізу береміз.'
      ),
    },
    {
      icon: FileText,
      title: t('2. Контроль и отчёты', '2. Бақылау және есептер'),
      description: t(
        'Маршруты, пробег, стоянки, превышение скорости, уведомления по геозонам.',
        'Маршруттар, жүріс қоры, тоқтаулар, жылдамдық, геоаймақ хабарламалары.'
      ),
    },
    {
      icon: TrendingDown,
      title: t('3. Экономия', '3. Үнем'),
      description: t(
        'Сократите холостые пробеги и повысите дисциплину водителей.',
        'Бос жүрісті азайтып, жүргізуші тәртібін жақсартады.'
      ),
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all"
              data-testid={`card-benefit-${index + 1}`}
            >
              <benefit.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3" data-testid={`text-benefit-title-${index + 1}`}>
                {benefit.title}
              </h3>
              <p className="text-muted-foreground" data-testid={`text-benefit-desc-${index + 1}`}>
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
