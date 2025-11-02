import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { MessageSquare, Wrench, Key } from 'lucide-react';

export default function ProcessSection() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: MessageSquare,
      number: '1',
      title: t('Шаг 1 — Заявка', '1-қадам — Өтінім'),
      description: t(
        'Напишите нам в WhatsApp, договоримся о дате установки.',
        'WhatsApp арқылы жазыңыз — орнату күнін белгілейміз.'
      ),
    },
    {
      icon: Wrench,
      number: '2',
      title: t('Шаг 2 — Установка', '2-қадам — Орнату'),
      description: t(
        'Монтаж трекера и проверка связи — ~40 минут.',
        'Трекерді орнатып, байланысын тексереміз — ~40 минут.'
      ),
    },
    {
      icon: Key,
      number: '3',
      title: t('Шаг 3 — Доступ', '3-қадам — Қол жеткізу'),
      description: t(
        'Вы получаете логин и начинаете контролировать транспорт.',
        'Жеке кабинетке кіріп, көлікті бақылайсыз.'
      ),
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all relative"
              data-testid={`card-step-${step.number}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary/20">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3" data-testid={`text-step-title-${step.number}`}>
                {step.title}
              </h3>
              <p className="text-muted-foreground" data-testid={`text-step-desc-${step.number}`}>
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
