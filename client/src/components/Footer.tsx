import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4" data-testid="text-footer-about">
              {t('О нас', 'Біз туралы')}
            </h3>
            <p className="text-sm text-muted-foreground">
              CarGPS.kz — {t('лидер GPS мониторинга транспорта в Казахстане', 'Қазақстандағы GPS мониторинг көшбасшысы')}
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4" data-testid="text-footer-services">
              {t('Услуги', 'Қызметтер')}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{t('GPS мониторинг', 'GPS мониторинг')}</li>
              <li>{t('Установка трекеров', 'Трекер орнату')}</li>
              <li>{t('Техподдержка', 'Техникалық қолдау')}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4" data-testid="text-footer-support">
              {t('Поддержка', 'Қолдау')}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="tel:+77782589661" className="hover:text-foreground transition-colors">
                  +7 778 258 9661
                </a>
              </li>
              <li>
                <a href="mailto:info@cargps.kz" className="hover:text-foreground transition-colors">
                  info@cargps.kz
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4" data-testid="text-footer-legal">
              {t('Правовая информация', 'Құқықтық ақпарат')}
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{t('Политика конфиденциальности', 'Құпиялылық саясаты')}</li>
              <li>{t('Условия использования', 'Пайдалану шарттары')}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p data-testid="text-copyright">
            © 2025 CarGPS.kz. {t('Все права защищены.', 'Барлық құқықтар қорғалған.')}
          </p>
        </div>
      </div>
    </footer>
  );
}
