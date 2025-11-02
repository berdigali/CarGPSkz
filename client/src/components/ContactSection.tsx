import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Phone, Mail, Clock } from 'lucide-react';

export default function ContactSection() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: t('Телефон', 'Телефон'),
      value: '+7 778 258 9661',
      link: 'tel:+77782589661',
    },
    {
      icon: Mail,
      label: t('Email', 'Email'),
      value: 'info@cargps.kz',
      link: 'mailto:info@cargps.kz',
    },
    {
      icon: Clock,
      label: t('Часы работы', 'Жұмыс уақыты'),
      value: t('Пн-Пт: 9:00 - 18:00', 'Дс-Жм: 9:00 - 18:00'),
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-12 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl font-bold mb-4" data-testid="text-contact-title">
            {t('Свяжитесь с нами', 'Бізбен байланысыңыз')}
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-contact-subtitle">
            {t(
              'Ответим на все вопросы и поможем выбрать подходящее решение',
              'Барлық сұрақтарға жауап береміз және қажетті шешімді таңдауға көмектесеміз'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((item, index) => (
            <Card
              key={index}
              className="p-6 text-center hover-elevate transition-all"
              data-testid={`card-contact-${index + 1}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2" data-testid={`text-contact-label-${index + 1}`}>
                {item.label}
              </h3>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid={`link-contact-value-${index + 1}`}
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-muted-foreground" data-testid={`text-contact-value-${index + 1}`}>
                  {item.value}
                </p>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
