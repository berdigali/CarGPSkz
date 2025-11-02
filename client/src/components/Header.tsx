import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between gap-2 md:gap-4">
          <div className="flex items-center gap-1 md:gap-2">
            <span className="text-lg md:text-xl font-bold" data-testid="brand-name">CarGPS.kz</span>
            <Badge variant="outline" className="text-xs hidden sm:inline-flex" data-testid="badge-device">GS900</Badge>
            <Badge variant="outline" className="text-xs hidden lg:inline-flex" data-testid="badge-price">2000 ₸/мес</Badge>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-sm text-muted-foreground hover-elevate hover:text-foreground transition-colors"
              data-testid="link-benefits"
            >
              {t('Преимущества', 'Артықшылықтар')}
            </button>
            <button
              onClick={() => scrollToSection('devices')}
              className="text-sm text-muted-foreground hover-elevate hover:text-foreground transition-colors"
              data-testid="link-devices"
            >
              {t('Устройства', 'Құрылғылар')}
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-sm text-muted-foreground hover-elevate hover:text-foreground transition-colors"
              data-testid="link-pricing"
            >
              {t('Тарифы', 'Тарифтер')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm text-muted-foreground hover-elevate hover:text-foreground transition-colors"
              data-testid="link-contact"
            >
              {t('Контакты', 'Байланыс')}
            </button>
          </nav>

          <div className="flex items-center gap-1 md:gap-2">
            <Button
              variant={language === 'ru' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setLanguage('ru')}
              className="min-w-10 md:min-w-12 text-xs md:text-sm px-2 md:px-3"
              data-testid="button-lang-ru"
            >
              RU
            </Button>
            <Button
              variant={language === 'kk' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setLanguage('kk')}
              className="min-w-10 md:min-w-12 text-xs md:text-sm px-2 md:px-3"
              data-testid="button-lang-kk"
            >
              KZ
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
