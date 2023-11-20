import useTranslation from 'next-translate-plugin';
import setConfig from 'next-translate-plugin';

export default function Todo() {
  const { t } = useTranslation();
  setConfig({ defaultLocale: 'ko' });

  const handleClick = () => {
    alert(123);
  }

  return (
    <main>
      <div>Button
        <div>
          <h2>{t('Japanese')}</h2>
          <h2>{t('English')}</h2>
          <h2>{t('Korean')}</h2>
        </div>
      </div>
    </main>
  )
}